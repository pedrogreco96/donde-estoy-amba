/* ¿Dónde estoy? AMBA — game logic */

// ─── DATASET EMBEBIDO ────────────────────────────────────────────────────────
// Los datos están inline para que funcione con file:// sin necesitar servidor.

const INTERSECTIONS_DB = {"generated_at":"2026-06-04T00:00:00Z","zones":{"caba":[{"lat":-34.6044,"lon":-58.39231,"street_label":"Av. Corrientes y Av. Callao","location_label":"Balvanera, CABA","zone":"caba","label":"Av. Corrientes y Av. Callao, Balvanera, CABA","id":70828},{"lat":-34.60907,"lon":-58.38155,"street_label":"Av. de Mayo y Av. 9 de Julio","location_label":"Monserrat, CABA","zone":"caba","label":"Av. de Mayo y Av. 9 de Julio, Monserrat, CABA","id":29239},{"lat":-34.59445,"lon":-58.40236,"street_label":"Av. Santa Fe y Av. Pueyrredón","location_label":"Recoleta, CABA","zone":"caba","label":"Av. Santa Fe y Av. Pueyrredón, Recoleta, CABA","id":12952},{"lat":-34.56208,"lon":-58.45677,"street_label":"Av. Cabildo y Juramento","location_label":"Belgrano, CABA","zone":"caba","label":"Av. Cabildo y Juramento, Belgrano, CABA","id":4251},{"lat":-34.60923,"lon":-58.39196,"street_label":"Av. Rivadavia y Av. Callao","location_label":"Balvanera, CABA","zone":"caba","label":"Av. Rivadavia y Av. Callao, Balvanera, CABA","id":34259},{"lat":-34.60454,"lon":-58.40548,"street_label":"Av. Corrientes y Av. Pueyrredón","location_label":"Balvanera, CABA","zone":"caba","label":"Av. Corrientes y Av. Pueyrredón, Balvanera, CABA","id":20873},{"lat":-34.61511,"lon":-58.42926,"street_label":"Av. Rivadavia y Av. La Plata","location_label":"Flores, CABA","zone":"caba","label":"Av. Rivadavia y Av. La Plata, Flores, CABA","id":61185},{"lat":-34.63069,"lon":-58.46964,"street_label":"Av. Rivadavia y Av. Nazca","location_label":"Flores, CABA","zone":"caba","label":"Av. Rivadavia y Av. Nazca, Flores, CABA","id":12817},{"lat":-34.61829,"lon":-58.43646,"street_label":"Av. Rivadavia y Av. Acoyte","location_label":"Caballito, CABA","zone":"caba","label":"Av. Rivadavia y Av. Acoyte, Caballito, CABA","id":47753},{"lat":-34.58808,"lon":-58.43116,"street_label":"Honduras y Thames","location_label":"Palermo, CABA","zone":"caba","label":"Honduras y Thames, Palermo, CABA","id":88157},{"lat":-34.61815,"lon":-58.39169,"street_label":"Av. Independencia y Av. Entre Ríos","location_label":"Constitución, CABA","zone":"caba","label":"Av. Independencia y Av. Entre Ríos, Constitución, CABA","id":41286},{"lat":-34.62541,"lon":-58.4161,"street_label":"Av. San Juan y Av. Boedo","location_label":"Boedo, CABA","zone":"caba","label":"Av. San Juan y Av. Boedo, Boedo, CABA","id":83218},{"lat":-34.62699,"lon":-58.42676,"street_label":"Av. Directorio y Av. La Plata","location_label":"Parque Chacabuco, CABA","zone":"caba","label":"Av. Directorio y Av. La Plata, Parque Chacabuco, CABA","id":70233},{"lat":-34.62536,"lon":-58.37109,"street_label":"Brasil y Defensa","location_label":"San Telmo, CABA","zone":"caba","label":"Brasil y Defensa, San Telmo, CABA","id":65748},{"lat":-34.6205,"lon":-58.47422,"street_label":"Av. Gaona y Av. Nazca","location_label":"Villa del Parque, CABA","zone":"caba","label":"Av. Gaona y Av. Nazca, Villa del Parque, CABA","id":15933},{"lat":-34.60315,"lon":-58.42096,"street_label":"Av. Corrientes y Av. Medrano","location_label":"Almagro, CABA","zone":"caba","label":"Av. Corrientes y Av. Medrano, Almagro, CABA","id":88377},{"lat":-34.61146,"lon":-58.42103,"street_label":"Av. Rivadavia y Av. Medrano","location_label":"Almagro, CABA","zone":"caba","label":"Av. Rivadavia y Av. Medrano, Almagro, CABA","id":80802},{"lat":-34.59587,"lon":-58.39335,"street_label":"Av. Santa Fe y Av. Callao","location_label":"Recoleta, CABA","zone":"caba","label":"Av. Santa Fe y Av. Callao, Recoleta, CABA","id":9258},{"lat":-34.55823,"lon":-58.45984,"street_label":"Av. Cabildo y Monroe","location_label":"Belgrano, CABA","zone":"caba","label":"Av. Cabildo y Monroe, Belgrano, CABA","id":55307},{"lat":-34.62892,"lon":-58.43949,"street_label":"Av. Eva Perón y Av. Directorio","location_label":"Parque Avellaneda, CABA","zone":"caba","label":"Av. Eva Perón y Av. Directorio, Parque Avellaneda, CABA","id":72738},{"lat":-34.58344,"lon":-58.40616,"street_label":"Av. Las Heras y Coronel Díaz","location_label":"Palermo, CABA","zone":"caba","label":"Av. Las Heras y Coronel Díaz, Palermo, CABA","id":99136},{"lat":-34.58903,"lon":-58.4101,"street_label":"Av. Santa Fe y Coronel Díaz","location_label":"Palermo, CABA","zone":"caba","label":"Av. Santa Fe y Coronel Díaz, Palermo, CABA","id":58092}],"cordon1":[{"lat":-34.7649,"lon":-58.40356,"street_label":"Av. H. Yrigoyen y Av. Mitre","location_label":"Lomas de Zamora, Lomas de Zamora","zone":"cordon1","label":"Av. H. Yrigoyen y Av. Mitre, Lomas de Zamora, Lomas de Zamora","id":48023},{"lat":-34.69406,"lon":-58.37647,"street_label":"Coronel Burela y Vicente Damonte","location_label":"Lanús, Lanús","zone":"cordon1","label":"Coronel Burela y Vicente Damonte, Lanús, Lanús","id":71612},{"lat":-34.70043,"lon":-58.3973,"street_label":"2 de Mayo y Amancio Alcorta","location_label":"Lanús, Lanús","zone":"cordon1","label":"2 de Mayo y Amancio Alcorta, Lanús, Lanús","id":62404},{"lat":-34.68355,"lon":-58.39559,"street_label":"Avenida Presidente Teniente General Juan Domingo Perón y Jorge Chávez","location_label":"Lanús, Lanús","zone":"cordon1","label":"Avenida Presidente Teniente General Juan Domingo Perón y Jorge Chávez, Lanús, Lanús","id":4993},{"lat":-34.66799,"lon":-58.36653,"street_label":"Colón y Italia","location_label":"Avellaneda, Avellaneda","zone":"cordon1","label":"Colón y Italia, Avellaneda, Avellaneda","id":72506},{"lat":-34.67083,"lon":-58.3644,"street_label":"Colón y Vélez Sarsfield","location_label":"Avellaneda, Avellaneda","zone":"cordon1","label":"Colón y Vélez Sarsfield, Avellaneda, Avellaneda","id":68880},{"lat":-34.66865,"lon":-58.37894,"street_label":"General Arredondo y Mariano Acosta","location_label":"Avellaneda, Avellaneda","zone":"cordon1","label":"General Arredondo y Mariano Acosta, Avellaneda, Avellaneda","id":78376},{"lat":-34.72878,"lon":-58.26676,"street_label":"Andrés Baranda y Corrientes","location_label":"Quilmes, Quilmes","zone":"cordon1","label":"Andrés Baranda y Corrientes, Quilmes, Quilmes","id":12145},{"lat":-34.72488,"lon":-58.26826,"street_label":"Manuel Quintana y Tucumán","location_label":"Quilmes, Quilmes","zone":"cordon1","label":"Manuel Quintana y Tucumán, Quilmes, Quilmes","id":80897},{"lat":-34.72074,"lon":-58.27407,"street_label":"Marcelo Torcuato de Alvear y República del Líbano","location_label":"Quilmes, Quilmes","zone":"cordon1","label":"Marcelo Torcuato de Alvear y República del Líbano, Quilmes, Quilmes","id":95494},{"lat":-34.76243,"lon":-58.39648,"street_label":"Almirante Brown y Sarandi","location_label":"Lomas de Zamora, Lomas de Zamora","zone":"cordon1","label":"Almirante Brown y Sarandi, Lomas de Zamora, Lomas de Zamora","id":76477},{"lat":-34.76058,"lon":-58.4101,"street_label":"Díaz Vélez y José Ignacio Gorriti","location_label":"Lomas de Zamora, Lomas de Zamora","zone":"cordon1","label":"Díaz Vélez y José Ignacio Gorriti, Lomas de Zamora, Lomas de Zamora","id":68387},{"lat":-34.77088,"lon":-58.41517,"street_label":"Caseros y Vicente Oliden","location_label":"Lomas de Zamora, Lomas de Zamora","zone":"cordon1","label":"Caseros y Vicente Oliden, Lomas de Zamora, Lomas de Zamora","id":12185},{"lat":-34.47375,"lon":-58.52256,"street_label":"Diego Palma y Haedo","location_label":"San Isidro, San Isidro","zone":"cordon1","label":"Diego Palma y Haedo, San Isidro, San Isidro","id":82769},{"lat":-34.4715,"lon":-58.5143,"street_label":"Belgrano y Juan Marín","location_label":"San Isidro, San Isidro","zone":"cordon1","label":"Belgrano y Juan Marín, San Isidro, San Isidro","id":32088},{"lat":-34.45693,"lon":-58.53363,"street_label":"Avenida Centenario y Rivadavia","location_label":"San Isidro, San Isidro","zone":"cordon1","label":"Avenida Centenario y Rivadavia, San Isidro, San Isidro","id":75864},{"lat":-34.52817,"lon":-58.49235,"street_label":"España y General José de San Martín","location_label":"Vicente López, Vicente López","zone":"cordon1","label":"España y General José de San Martín, Vicente López, Vicente López","id":54022},{"lat":-34.51893,"lon":-58.50356,"street_label":"Entre Ríos y Pedro Goyena","location_label":"Vicente López, Vicente López","zone":"cordon1","label":"Entre Ríos y Pedro Goyena, Vicente López, Vicente López","id":16355},{"lat":-34.5171,"lon":-58.50879,"street_label":"Coronel Manuel Dorrego y Ignacio Warnes","location_label":"Vicente López, Vicente López","zone":"cordon1","label":"Coronel Manuel Dorrego y Ignacio Warnes, Vicente López, Vicente López","id":35339},{"lat":-34.64758,"lon":-58.59211,"street_label":"Cazadores y Las Bases","location_label":"San Justo, La Matanza","zone":"cordon1","label":"Cazadores y Las Bases, San Justo, La Matanza","id":47938},{"lat":-34.66103,"lon":-58.5758,"street_label":"América y Gutenberg","location_label":"San Justo, La Matanza","zone":"cordon1","label":"América y Gutenberg, San Justo, La Matanza","id":11267},{"lat":-34.64896,"lon":-58.57009,"street_label":"Rondeau y Saavedra","location_label":"San Justo, La Matanza","zone":"cordon1","label":"Rondeau y Saavedra, San Justo, La Matanza","id":86873}],"cordon2":[{"lat":-34.43159,"lon":-58.56641,"street_label":"Castelli y G. Melo","location_label":"Tigre, Tigre","zone":"cordon2","label":"Castelli y G. Melo, Tigre, Tigre","id":66701},{"lat":-34.42224,"lon":-58.58485,"street_label":"Avellaneda y Intendente Jove","location_label":"Tigre, Tigre","zone":"cordon2","label":"Avellaneda y Intendente Jove, Tigre, Tigre","id":75331},{"lat":-34.42359,"lon":-58.57944,"street_label":"Avenida Daniel M. Cazón y Bourdieu","location_label":"Tigre, Tigre","zone":"cordon2","label":"Avenida Daniel M. Cazón y Bourdieu, Tigre, Tigre","id":82483},{"lat":-34.49908,"lon":-58.69903,"street_label":"Gorostiaga y Suiza","location_label":"Los Polvorines, Malvinas Argentinas","zone":"cordon2","label":"Gorostiaga y Suiza, Los Polvorines, Malvinas Argentinas","id":72327},{"lat":-34.5036,"lon":-58.68855,"street_label":"Avenida Presidente Juan Domingo Perón y Congresales","location_label":"Los Polvorines, Malvinas Argentinas","zone":"cordon2","label":"Avenida Presidente Juan Domingo Perón y Congresales, Los Polvorines, Malvinas Argentinas","id":91689},{"lat":-34.49452,"lon":-58.69578,"street_label":"Ingeniero Huergo y Pedro Miguel Aráoz","location_label":"Los Polvorines, Malvinas Argentinas","zone":"cordon2","label":"Ingeniero Huergo y Pedro Miguel Aráoz, Los Polvorines, Malvinas Argentinas","id":11989},{"lat":-34.51313,"lon":-58.74905,"street_label":"Alfredo Nobel y Capitan Martinez","location_label":"José C. Paz, José C. Paz","zone":"cordon2","label":"Alfredo Nobel y Capitan Martinez, José C. Paz, José C. Paz","id":8579},{"lat":-34.50815,"lon":-58.72621,"street_label":"Avenida del Sesquicentenario y Lourdes","location_label":"José C. Paz, José C. Paz","zone":"cordon2","label":"Avenida del Sesquicentenario y Lourdes, José C. Paz, José C. Paz","id":51570},{"lat":-34.51519,"lon":-58.74078,"street_label":"San Agustín y Serrano","location_label":"José C. Paz, José C. Paz","zone":"cordon2","label":"San Agustín y Serrano, José C. Paz, José C. Paz","id":52791},{"lat":-34.54769,"lon":-58.72673,"street_label":"Avenida Gaspar Campos y Coronel Argüero","location_label":"San Miguel, San Miguel","zone":"cordon2","label":"Avenida Gaspar Campos y Coronel Argüero, San Miguel, San Miguel","id":57799},{"lat":-34.53248,"lon":-58.70188,"street_label":"Avenida Doctor Ricardo Balbín y Avenida General Juan Gregorio Lemos","location_label":"San Miguel, San Miguel","zone":"cordon2","label":"Avenida Doctor Ricardo Balbín y Avenida General Juan Gregorio Lemos, San Miguel, San Miguel","id":89634},{"lat":-34.527,"lon":-58.72983,"street_label":"Maestro Ángel D'Elía y Partido de General Sarmiento","location_label":"San Miguel, San Miguel","zone":"cordon2","label":"Maestro Ángel D'Elía y Partido de General Sarmiento, San Miguel, San Miguel","id":72993},{"lat":-34.58663,"lon":-58.62407,"street_label":"Avenida General O'Brien y Uspallata","location_label":"Hurlingham, Hurlingham","zone":"cordon2","label":"Avenida General O'Brien y Uspallata, Hurlingham, Hurlingham","id":60817},{"lat":-34.59158,"lon":-58.63488,"street_label":"Avenida Arturo Jauretche y Juan Díaz de Solís","location_label":"Hurlingham, Hurlingham","zone":"cordon2","label":"Avenida Arturo Jauretche y Juan Díaz de Solís, Hurlingham, Hurlingham","id":39457},{"lat":-34.58986,"lon":-58.62271,"street_label":"General Luzuriaga y General Mariano Necochea","location_label":"Hurlingham, Hurlingham","zone":"cordon2","label":"General Luzuriaga y General Mariano Necochea, Hurlingham, Hurlingham","id":21603},{"lat":-34.65966,"lon":-58.71617,"street_label":"Medrano y Santiago del Estero","location_label":"Merlo, Merlo","zone":"cordon2","label":"Medrano y Santiago del Estero, Merlo, Merlo","id":46474},{"lat":-34.63904,"lon":-58.67219,"street_label":"Barcala y Marañón","location_label":"Ituzaingó, Ituzaingó","zone":"cordon2","label":"Barcala y Marañón, Ituzaingó, Ituzaingó","id":23114},{"lat":-34.64047,"lon":-58.67518,"street_label":"José María Paz y Posta de Pardo","location_label":"Ituzaingó, Ituzaingó","zone":"cordon2","label":"José María Paz y Posta de Pardo, Ituzaingó, Ituzaingó","id":91774}],"cordon3":[{"lat":-34.91066,"lon":-57.95451,"street_label":"Av. 7 y Av. 44","location_label":"La Plata, La Plata","zone":"cordon3","label":"Av. 7 y Av. 44, La Plata, La Plata","id":6531},{"lat":-34.65084,"lon":-58.84316,"street_label":"Francisco Pascasio Moreno y Iberá","location_label":"Moreno, Moreno","zone":"cordon3","label":"Francisco Pascasio Moreno y Iberá, Moreno, Moreno","id":47764},{"lat":-34.64768,"lon":-58.84481,"street_label":"Luis Augusto Huergo y Mariscal Antonio José de Sucre","location_label":"Moreno, Moreno","zone":"cordon3","label":"Luis Augusto Huergo y Mariscal Antonio José de Sucre, Moreno, Moreno","id":2642},{"lat":-34.64715,"lon":-58.84281,"street_label":"Avenida Eduardo Madero y Dante Alighieri","location_label":"Moreno, Moreno","zone":"cordon3","label":"Avenida Eduardo Madero y Dante Alighieri, Moreno, Moreno","id":54373},{"lat":-34.45307,"lon":-58.89687,"street_label":"Las Piedras y Sarmiento","location_label":"Pilar, Pilar","zone":"cordon3","label":"Las Piedras y Sarmiento, Pilar, Pilar","id":36211},{"lat":-34.44235,"lon":-58.91857,"street_label":"Córdoba y La Golondrina","location_label":"Pilar, Pilar","zone":"cordon3","label":"Córdoba y La Golondrina, Pilar, Pilar","id":76651},{"lat":-34.46158,"lon":-58.91165,"street_label":"Fermín Gamboa y Ituizangó","location_label":"Pilar, Pilar","zone":"cordon3","label":"Fermín Gamboa y Ituizangó, Pilar, Pilar","id":28402},{"lat":-34.5625,"lon":-59.0959,"street_label":"427 - La Plata y 448 - Cerrito","location_label":"Luján, Luján","zone":"cordon3","label":"427 - La Plata y 448 - Cerrito, Luján, Luján","id":8292},{"lat":-34.56575,"lon":-59.09705,"street_label":"1000 - Avenida Constitución y 452 - Libertad","location_label":"Luján, Luján","zone":"cordon3","label":"1000 - Avenida Constitución y 452 - Libertad, Luján, Luján","id":38780},{"lat":-34.77432,"lon":-58.83947,"street_label":"Constitución y Núñez","location_label":"Marcos Paz, Marcos Paz","zone":"cordon3","label":"Constitución y Núñez, Marcos Paz, Marcos Paz","id":14418},{"lat":-34.77111,"lon":-58.84039,"street_label":"Santa Fe y Suipacha","location_label":"Marcos Paz, Marcos Paz","zone":"cordon3","label":"Santa Fe y Suipacha, Marcos Paz, Marcos Paz","id":78609},{"lat":-34.78103,"lon":-58.84875,"street_label":"José C. Paz y Pueyrredón","location_label":"Marcos Paz, Marcos Paz","zone":"cordon3","label":"José C. Paz y Pueyrredón, Marcos Paz, Marcos Paz","id":55321},{"lat":-34.34349,"lon":-58.80057,"street_label":"Mitre y Santa Fe","location_label":"Escobar, Escobar","zone":"cordon3","label":"Mitre y Santa Fe, Escobar, Escobar","id":75674},{"lat":-34.34659,"lon":-58.79796,"street_label":"Colón y César Díaz","location_label":"Escobar, Escobar","zone":"cordon3","label":"Colón y César Díaz, Escobar, Escobar","id":25026}]},"stats":{"caba":22,"cordon1":22,"cordon3":16,"cordon2":18}};

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const AMBA_CENTER = [-34.62, -58.65];
const AMBA_ZOOM   = 9;
const AMBA_BOUNDS = L.latLngBounds(
  L.latLng(-35.50, -59.60),
  L.latLng(-33.80, -57.40)
);
const MAX_DISTANCE_KM = 50;

const ROUND_CONFIG = [
  { zone: 'caba',    mult: 1 },
  { zone: 'caba',    mult: 1 },
  { zone: 'cordon1', mult: 2 },
  { zone: 'cordon2', mult: 3 },
  { zone: 'cordon3', mult: 3 },
];

// ─── STATE ────────────────────────────────────────────────────────────────────

let dailyRounds  = [];
let currentRound = 0;
let totalScore   = 0;
let results      = [];

let map          = null;
let miniMap      = null;
let guessMarker  = null;
let pendingGuess = null;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function todayDisplay() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

function seededRng(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function dateSeed(dateStr) {
  let hash = 0;
  for (const c of dateStr) hash = (Math.imul(31, hash) + c.charCodeAt(0)) | 0;
  return Math.abs(hash);
}

function pickDaily(db) {
  const seed  = dateSeed(today());
  const rand  = seededRng(seed);
  const usedIds = new Set();

  return ROUND_CONFIG.map(({ zone, mult }) => {
    const pool = db.zones[zone];
    // Fisher-Yates shuffle virtual: buscar un ítem no usado aún
    let pick, attempts = 0;
    do {
      const idx = Math.floor(rand() * pool.length);
      pick = pool[idx];
      attempts++;
    } while (usedIds.has(pick.id) && attempts < pool.length * 3);
    usedIds.add(pick.id);
    return { ...pick, mult };
  });
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const R    = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a    = Math.sin(dLat/2)**2 +
               Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
               Math.sin(dLon/2)**2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

function calcScore(distKm, mult) {
  const raw   = Math.round(Math.max(0, 100 * (1 - distKm / MAX_DISTANCE_KM)));
  return { raw, final: raw * mult };
}

function formatDist(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(2)} km`;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─── MAP ──────────────────────────────────────────────────────────────────────

function initMap() {
  if (map) return;  // ya inicializado

  map = L.map('map', {
    center: AMBA_CENTER,
    zoom: AMBA_ZOOM,
    minZoom: 8,
    maxZoom: 17,
    maxBounds: AMBA_BOUNDS,
    maxBoundsViscosity: 0.9,
    zoomControl: true,
  });

  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Tiles © Esri', maxZoom: 19 }
  ).addTo(map);

  map.on('click', onMapClick);
}

let showingResult = false;

function onMapClick(e) {
  if (showingResult) return;  // ignorar taps mientras se muestra resultado
  if (guessMarker) map.removeLayer(guessMarker);
  pendingGuess = e.latlng;
  guessMarker  = L.marker(e.latlng, { icon: makePinIcon('guess') }).addTo(map);
  // Confirmar automáticamente
  confirmGuess();
}

function makePinIcon(type) {
  return L.divIcon({
    className: '',
    html: `<div class="${type}-pin"></div>`,
    iconSize:   [20, 20],
    iconAnchor: [10, 20],
  });
}

// ─── ROUND ────────────────────────────────────────────────────────────────────

function updateDots() {
  for (let i = 1; i <= 5; i++) {
    const dot = document.getElementById(`dot-${i}`);
    dot.classList.remove('done', 'active');
    if (i - 1 < currentRound)      dot.classList.add('done');
    else if (i - 1 === currentRound) dot.classList.add('active');
  }
}

function startRound(idx) {
  currentRound  = idx;
  pendingGuess  = null;
  guessMarker   = null;
  showingResult = false;

  // Ocultar overlay
  document.getElementById('result-overlay').classList.add('hidden');

  // Limpiar marcadores del mapa
  map.eachLayer(layer => {
    if (layer instanceof L.Marker || layer instanceof L.Polyline) map.removeLayer(layer);
  });
  map.setView(AMBA_CENTER, AMBA_ZOOM);

  const round    = dailyRounds[idx];
  const multText = round.mult > 1 ? `x${round.mult}` : '';
  document.getElementById('round-label').textContent      = `Ronda ${idx + 1} de 5`;
  document.getElementById('round-multiplier').textContent = multText;
  document.getElementById('clue-text').textContent        =
    `${round.street_label} — ${round.location_label}`;

  updateDots();
  showScreen('screen-game');

  // Forzar redibujado del mapa (necesario al mostrar el div)
  setTimeout(() => map.invalidateSize(), 50);
}

function confirmGuess() {
  if (!pendingGuess || showingResult) return;

  const round  = dailyRounds[currentRound];
  const dist   = haversineKm(pendingGuess.lat, pendingGuess.lng, round.lat, round.lon);
  const { raw, final } = calcScore(dist, round.mult);

  totalScore += final;
  document.getElementById('total-score').textContent = totalScore;

  const result = { intersection: round, guess: pendingGuess, distKm: dist, rawScore: raw, finalScore: final, mult: round.mult };
  results.push(result);
  saveProgress();

  showRoundResult(result);
}

// ─── RESULT OVERLAY (sobre el mapa) ──────────────────────────────────────────

function showRoundResult(result) {
  const { intersection, guess, distKm, rawScore, finalScore, mult } = result;

  showingResult = true;
  document.getElementById('btn-confirm').disabled = true;

  // Mostrar marcador del target y línea en el mapa principal
  const guessLL  = L.latLng(guess.lat, guess.lng);
  const targetLL = L.latLng(intersection.lat, intersection.lon);
  L.marker(targetLL, { icon: makePinIcon('target') }).addTo(map);
  L.polyline([guessLL, targetLL], { color: 'rgba(255,255,255,0.5)', dashArray: '6,4', weight: 2 }).addTo(map);
  map.fitBounds(L.latLngBounds([guessLL, targetLL]).pad(0.35), { maxZoom: 14, animate: true });

  // Rellenar overlay
  const scoreEl = document.getElementById('result-overlay-score');
  scoreEl.classList.remove('score-high', 'score-mid', 'score-low');
  scoreEl.classList.add(rawScore >= 75 ? 'score-high' : rawScore >= 40 ? 'score-mid' : 'score-low');

  document.getElementById('ro-pts').textContent      = finalScore;
  document.getElementById('ro-distance').textContent = `📏 ${formatDist(distKm)}`;
  document.getElementById('ro-street').textContent   = `📍 ${intersection.label}`;
  document.getElementById('ro-mult').textContent     =
    mult > 1 ? `Base ${rawScore} × ${mult} = ${finalScore} pts` : '';

  document.getElementById('result-overlay').classList.remove('hidden');
}

function nextRound() {
  if (currentRound < 4) {
    startRound(currentRound + 1);
  } else {
    showFinal();
  }
}

// ─── FINAL ────────────────────────────────────────────────────────────────────

function showFinal() {
  document.getElementById('final-date-display').textContent  = todayDisplay();
  document.getElementById('final-score-number').textContent  = totalScore;

  const list = document.getElementById('final-rounds-list');
  list.innerHTML = '';

  results.forEach((r, i) => {
    const zClass = i < 2 ? 'z1' : i === 2 ? 'z2' : 'z3';
    const row    = document.createElement('div');
    row.className = 'final-round-row';
    row.innerHTML = `
      <span class="frow-num ${zClass}">${i + 1}</span>
      <div class="frow-info">
        <div class="frow-street">${r.intersection.street_label}</div>
        <div class="frow-location">${r.intersection.location_label}</div>
      </div>
      <div class="frow-score">
        <div class="frow-pts">${r.finalScore} pts</div>
        <div class="frow-dist">${formatDist(r.distKm)}</div>
      </div>
    `;
    list.appendChild(row);
  });

  saveProgress(true);
  showScreen('screen-final');
}

// ─── SHARE ────────────────────────────────────────────────────────────────────

function scoreEmoji(raw) {
  if (raw >= 98) return '🔥';
  if (raw >= 90) return '🏅';
  if (raw >= 75) return '👏';
  if (raw >= 55) return '🎉';
  if (raw >= 35) return '🌞';
  if (raw >= 15) return '😬';
  return '💀';
}

function buildShareText() {
  const lines = [
    `¿Dónde estoy? AMBA`,
    `${todayDisplay()}: ${totalScore}/1000`,
    '',
  ];
  results.forEach((r, i) => lines.push(`${i+1}: ${formatDist(r.distKm)} | ${r.rawScore} ${scoreEmoji(r.rawScore)}`));
  return lines.join('\n');
}

function share() {
  const text = buildShareText();
  const url  = window.location.href.split('?')[0];
  const full = `${text}\n${url}`;

  const showCopied = () => {
    const el = document.getElementById('share-copied');
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 2500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(full).then(showCopied).catch(() => fallbackCopy(full, showCopied));
  } else {
    fallbackCopy(full, showCopied);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text;
  Object.assign(ta.style, { position: 'fixed', opacity: '0', top: '0', left: '0' });
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try { document.execCommand('copy'); cb(); } catch(e) {}
  document.body.removeChild(ta);
}

// ─── PERSISTENCE ─────────────────────────────────────────────────────────────

function saveProgress(done = false) {
  try {
    localStorage.setItem(`amba-game-${today()}`, JSON.stringify({
      results, totalScore, currentRound, done
    }));
  } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(`amba-game-${today()}`);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────

function boot() {
  document.getElementById('intro-date').textContent = `Cruces del ${todayDisplay()}`;

  dailyRounds = pickDaily(INTERSECTIONS_DB);

  // Si ya jugó hoy, mostrar resultados directamente sin pasar por intro
  const saved = loadProgress();
  if (saved && saved.done) {
    results      = saved.results;
    totalScore   = saved.totalScore;
    currentRound = 5;
    document.getElementById('total-score').textContent = totalScore;
    showFinal();
    return;
  }

  document.getElementById('btn-start').addEventListener('click', () => {
    showScreen('screen-game');
    initMap();
    startRound(0);
  });

  document.getElementById('btn-next-round').addEventListener('click', nextRound);
  document.getElementById('btn-share').addEventListener('click', share);
}

document.addEventListener('DOMContentLoaded', boot);
