#!/usr/bin/env python3
"""
Genera intersections.json con cruces de calles reales del AMBA.

Estrategia:
1. Descarga todas las calles con nombre por zona via Overpass API
2. Encuentra nodos compartidos entre calles de distinto nombre (= cruces)
3. Geocodifica partido/localidad via Nominatim
4. Guarda el resultado clasificado por zona

Uso: python3 generate_intersections.py
Tiempo estimado: 15-30 minutos (respeta rate limits de las APIs)
"""

import json
import time
import random
import sys
from collections import defaultdict

try:
    import requests
except ImportError:
    print("Instalar requests: pip3 install requests")
    sys.exit(1)

OVERPASS_URL = "https://overpass-api.de/api/interpreter"
NOMINATIM_URL = "https://nominatim.openstreetmap.org/reverse"
HEADERS = {"User-Agent": "AMBAGame/1.0 (educational project)"}

# Bounding boxes por zona (sur, oeste, norte, este)
ZONES = {
    "caba": {
        "bbox": (-34.706, -58.532, -34.527, -58.334),
        "max_intersections": 2500,
    },
    "cordon1": {
        "bbox": (-34.920, -58.820, -34.470, -58.210),
        "max_intersections": 2500,
    },
    "cordon2": {
        "bbox": (-35.100, -59.100, -34.300, -58.100),
        "max_intersections": 2000,
    },
    "cordon3": {
        "bbox": (-35.400, -59.500, -33.900, -57.500),
        "max_intersections": 1500,
    },
}

def overpass_query(query, timeout=120):
    try:
        r = requests.post(OVERPASS_URL, data={"data": query}, headers=HEADERS, timeout=timeout + 30)
        r.raise_for_status()
        return r.json().get("elements", [])
    except Exception as e:
        print(f"  Overpass error: {e}")
        return []

def get_intersections_for_zone(zone_name, bbox, max_count):
    s, w, n, e = bbox
    print(f"\n[{zone_name}] Descargando calles con nombre...")

    # Paso 1: obtener todos los ways con nombre en el bbox
    query = f"""
[out:json][timeout:240];
(
  way["highway"~"primary|secondary|tertiary|residential|unclassified|service"]
     ["name"]
     ({s},{w},{n},{e});
);
out body;
>;
out skel qt;
"""
    elements = overpass_query(query, timeout=240)
    if not elements:
        print(f"  Reintentando {zone_name} una vez más...")
        time.sleep(15)
        elements = overpass_query(query, timeout=240)
    if not elements:
        return []

    # Separar nodos y ways
    node_coords = {}
    ways = []
    for el in elements:
        if el["type"] == "node":
            node_coords[el["id"]] = (el["lat"], el["lon"])
        elif el["type"] == "way" and "tags" in el and "name" in el["tags"]:
            ways.append(el)

    print(f"  → {len(ways)} calles, {len(node_coords)} nodos")

    # Paso 2: encontrar nodos compartidos entre 2+ calles de distinto nombre
    node_to_ways = defaultdict(list)
    for way in ways:
        for nid in way.get("nodes", []):
            node_to_ways[nid].append(way["tags"]["name"])

    intersection_nodes = []
    for nid, street_names in node_to_ways.items():
        unique_names = list(set(street_names))
        if len(unique_names) >= 2 and nid in node_coords:
            lat, lon = node_coords[nid]
            # Filtrar nodos en el bbox
            if s <= lat <= n and w <= lon <= e:
                intersection_nodes.append({
                    "id": nid,
                    "lat": lat,
                    "lon": lon,
                    "streets": unique_names[:2]
                })

    print(f"  → {len(intersection_nodes)} cruces encontrados")

    # Paso 3: muestrear hasta max_count cruces
    random.shuffle(intersection_nodes)
    sample = intersection_nodes[:min(max_count, len(intersection_nodes))]

    # Paso 4: geocodificar por CELDA de grilla (no por cruce) para no
    # quemar 1 req/seg de Nominatim con miles de nodos. Cada celda de
    # ~600m comparte el mismo barrio/partido en la práctica.
    CELL = 0.006  # ~600m
    geocode_cache = {}

    def geocode_cell(lat, lon):
        key = (round(lat / CELL), round(lon / CELL))
        if key in geocode_cache:
            return geocode_cache[key]

        location_label = None
        try:
            r = requests.get(
                NOMINATIM_URL,
                params={"lat": lat, "lon": lon, "format": "json", "zoom": 16},
                headers=HEADERS,
                timeout=10
            )
            r.raise_for_status()
            data = r.json()
            addr = data.get("address", {})
            display = data.get("display_name", "")
            is_caba = ("Ciudad Autónoma de Buenos Aires" in display or
                       "Autonomous City of Buenos Aires" in display)

            if is_caba:
                localidad = addr.get("suburb") or addr.get("neighbourhood") or "Buenos Aires"
                partido = "CABA"
            else:
                localidad = (addr.get("suburb") or addr.get("city_district") or
                             addr.get("town") or addr.get("city") or
                             addr.get("village") or "")
                partido = addr.get("county") or addr.get("state_district") or ""
                partido = partido.replace(" Partido", "").strip()

            state = addr.get("state", "")
            if not is_caba and "Buenos Aires" not in state:
                location_label = None
            elif not partido:
                location_label = None
            elif partido == "CABA":
                location_label = f"{localidad}, CABA"
            elif localidad and localidad.lower() != partido.lower():
                location_label = f"{localidad}, {partido}"
            else:
                location_label = partido

        except Exception:
            location_label = None

        geocode_cache[key] = location_label
        time.sleep(1.1)  # Nominatim: 1 req/s máximo
        return location_label

    results = []
    print(f"  Geocodificando {len(sample)} cruces por celdas (puede tardar)...")

    for i, node in enumerate(sample):
        if i > 0 and i % 200 == 0:
            print(f"    {i}/{len(sample)}, {len(results)} válidos, "
                  f"{len(geocode_cache)} celdas geocodificadas...")

        lat, lon = node["lat"], node["lon"]
        streets = node["streets"]

        location_label = geocode_cell(lat, lon)
        if not location_label:
            continue

        street_label = f"{streets[0]} y {streets[1]}"

        results.append({
            "id": node["id"],
            "lat": lat,
            "lon": lon,
            "streets": streets,
            "label": f"{street_label}, {location_label}",
            "street_label": street_label,
            "location_label": location_label,
            "zone": zone_name
        })

    print(f"  ✓ {len(results)} cruces válidos en {zone_name} "
          f"({len(geocode_cache)} llamadas a Nominatim)")
    return results

def main():
    random.seed(42)
    print("=" * 60)
    print("Generador de intersecciones AMBA")
    print("=" * 60)

    all_zones = {}

    for zone_name, config in ZONES.items():
        intersections = get_intersections_for_zone(
            zone_name, config["bbox"], config["max_intersections"]
        )
        all_zones[zone_name] = intersections
        time.sleep(3)

    output = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "zones": all_zones,
        "stats": {z: len(v) for z, v in all_zones.items()}
    }

    total = sum(output["stats"].values())
    print(f"\n{'='*60}")
    print(f"Total: {total} cruces")
    for z, c in output["stats"].items():
        print(f"  {z}: {c}")

    with open("intersections.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\n✅ Guardado en intersections.json")

if __name__ == "__main__":
    main()
