# 🚀 RNT - PROMPTS COPILOT PARA MVP
## Arquitecto: Claude Sonnet 4.6 | Desarrollador: Copilot Sonnet 4.5 | Orquestador: Hernando Silva

---

## 📋 DECISIONES FINALES DEL ARQUITECTO

Antes de los prompts, estas son las decisiones inamovibles:

**LO QUE SE CONSTRUYE HOY (orden de prioridad):**
1. Botón flotante WhatsApp → 15 min → impacto visual inmediato
2. Motor cotizador JavaScript con tarifario real 2024 → 2-3h → el entregable crítico
3. Página de rastreo con redirección inteligente → 30 min → funcional sin backend

**LO QUE NO SE TOCA HOY:**
- Panel admin de rastreo (requiere backend PHP/BD — siguiente fase)
- Integración API Gelotra/Exxe (requiere coordinación con proveedores)
- Mensajería/Paquetes Premier (no tenemos la tabla — solicitarla a Fabián)

**ARQUITECTURA TÉCNICA CONFIRMADA:**
- Stack: HTML5 + CSS3 + Vanilla JS (sin frameworks)
- Tarifario: JSON estático cargado por JS → actualizable
- Deploy: Netlify CI/CD (push = producción)
- Cotizador origen: Solo las 12 regionales como punto de despacho (igual que Gelotra)

---

## ⚡ PROMPT #1 — BOTÓN WHATSAPP FLOTANTE
### Tiempo estimado: 15 minutos | Impacto: INMEDIATO

```
Eres un desarrollador frontend experto en HTML/CSS/JS vanilla. Estás trabajando en el proyecto c3_rnt ubicado en la raíz del workspace.

TAREA: Agrega un botón flotante de WhatsApp que aparezca en TODAS las páginas del sitio web.

CONTEXTO DEL PROYECTO:
- Sitio HTML multipágina con plantilla Logis (BootstrapMade)
- Archivos de páginas: index.html, about.html, services.html, service-details.html, pricing.html, contact.html, get-a-quote.html
- Estilos custom en: assets/css/main.css
- JS principal en: assets/js/main.js

NÚMERO DE WHATSAPP: +573124376616 (este es el número real del cliente)

ESPECIFICACIONES DEL BOTÓN:
1. Posición: fixed, esquina inferior derecha, z-index: 9999
2. Distancia: bottom: 30px, right: 30px
3. Forma: círculo de 60px de diámetro
4. Color de fondo: #25D366 (verde WhatsApp oficial)
5. Ícono: SVG de WhatsApp en blanco (usa el SVG oficial de WhatsApp)
6. Sombra: box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4)
7. Hover: scale(1.1) con transición 0.3s ease
8. Animación: pulse suave cada 3 segundos para llamar la atención

MENSAJE PRE-FORMATEADO EN EL LINK:
El link debe abrir: https://wa.me/573124376616?text=Hola%2C%20me%20interesa%20información%20sobre%20sus%20servicios%20de%20transporte

IMPLEMENTACIÓN:
1. Agrega el CSS del botón al FINAL del archivo assets/css/main.css (sección marcada como /* WhatsApp Button */)
2. Agrega el HTML del botón JUSTO ANTES del cierre </body> en CADA uno de los 7 archivos HTML
3. NO uses librerías externas — todo debe ser HTML+CSS puro
4. El botón debe ser responsive y verse bien en móvil (en móvil: bottom: 20px, right: 20px, tamaño 55px)

VALIDACIÓN FINAL:
- Confirma que editaste los 7 archivos HTML
- Confirma que el CSS fue agregado a main.css
- Muestra el HTML final del botón que se insertó
```

---

## ⚡ PROMPT #2 — COTIZADOR MVP COMPLETO
### Tiempo estimado: 2-3 horas | Es el entregable CRÍTICO del proyecto

### INSTRUCCIÓN PARA HERNANDO:
Este prompt se ejecuta en DOS partes. Primero ejecuta el PROMPT 2A (crea el JSON del tarifario), luego el PROMPT 2B (crea el motor JS y el HTML).

---

### PROMPT 2A — CREAR EL ARCHIVO JSON DEL TARIFARIO

```
Eres un desarrollador experto en JavaScript. Estás en el proyecto c3_rnt.

TAREA: Crear el archivo assets/js/tarifario-rnt.js con el tarifario completo de Red Nacional de Transportes.

CONTEXTO:
El tarifario existe en PDF en: _BaseBuildAgentsIA/7_DocsCliente/tarifas_2024.pdf
Es una tabla de ciudades (filas) × 12 regionales de origen (columnas).

ESTRUCTURA DEL OBJETO A CREAR:
El archivo debe exportar/definir una constante global llamada window.RNT_TARIFARIO con esta estructura:

```javascript
window.RNT_TARIFARIO = {
  
  // Las 12 regionales que son puntos de despacho (ORIGEN)
  origenes: [
    { id: "barranquilla", label: "Barranquilla / Santa Marta", col: 0 },
    { id: "bogota", label: "Bogotá", col: 1 },
    { id: "bucaramanga", label: "Bucaramanga", col: 2 },
    { id: "cali", label: "Cali", col: 3 },
    { id: "cartagena", label: "Cartagena", col: 4 },
    { id: "cucuta", label: "Cúcuta", col: 5 },
    { id: "ibague", label: "Ibagué", col: 6 },
    { id: "medellin", label: "Medellín", col: 7 },
    { id: "monteria", label: "Montería", col: 8 },
    { id: "pasto", label: "Pasto", col: 9 },
    { id: "pereira", label: "Pereira", col: 10 },
    { id: "sincelejo", label: "Sincelejo", col: 11 }
  ],

  // Tarifas: cada ciudad destino con su tarifa por kg desde cada regional
  // El orden de tarifas es el mismo orden de origenes arriba
  // [barranquilla, bogota, bucaramanga, cali, cartagena, cucuta, ibague, medellin, monteria, pasto, pereira, sincelejo]
  destinos: {
    "Abejorral": { depto: "Antioquia", tarifas: [3603,3603,3603,3603,3603,3603,3603,3603,3603,3603,3603,3603] },
    "Ábrego": { depto: "Santander", tarifas: [3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084] },
    "Acacias": { depto: "Meta", tarifas: [2861,2079,2331,2621,2727,1934,3007,2481,2786,3165,2467,2786] },
    "Acevedo": { depto: "Huila", tarifas: [3205,3302,3205,3205,3430,2515,1327,3359,3430,3430,3205,3430] },
    "Agrado": { depto: "Huila", tarifas: [3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084] },
    "Agua De Dios": { depto: "Cundinamarca", tarifas: [3256,3482,3256,3256,3482,2515,3482,3310,3482,3482,3256,3482] },
    "Aguachica": { depto: "Cesar", tarifas: [2572,2572,1070,3002,2545,1396,3685,3092,2752,4704,3109,2752] },
    "Aguadas": { depto: "Caldas", tarifas: [1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802] },
    "Aguazul": { depto: "Casanare", tarifas: [2575,2575,2575,2575,2575,2575,2575,2575,2575,2575,2575,2575] },
    "Agustín Codazzi": { depto: "Cesar", tarifas: [1762,2552,2409,3058,2133,2515,2729,3264,1718,3674,3058,1718] },
    "Aipe": { depto: "Huila", tarifas: [2963,1551,2748,2601,3142,2167,1278,2434,3430,3278,2064,3430] },
    "Albania": { depto: "Caquetá", tarifas: [3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084] },
    "Alcalá": { depto: "Valle", tarifas: [2771,1931,2465,2449,2776,2594,1859,2477,3409,3022,690,3409] },
    "Algeciras": { depto: "Huila", tarifas: [3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084] },
    "Alpujarra": { depto: "Tolima", tarifas: [3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084] },
    "Altamira": { depto: "Huila", tarifas: [3621,3621,3621,3621,3621,2615,3621,3621,3621,3621,3621,3621] },
    "Alvarado": { depto: "Tolima", tarifas: [2832,2201,2509,2554,2912,2078,968,2632,2878,3617,2273,2878] },
    "Amaga": { depto: "Antioquia", tarifas: [1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802] },
    "Amalfi": { depto: "Antioquia", tarifas: [3603,3603,3603,3603,3603,3603,3603,3603,3603,3603,3603,3603] },
    "Ambalema": { depto: "Tolima", tarifas: [3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084] },
    "Anapoima": { depto: "Cundinamarca", tarifas: [3256,3256,3256,3256,3482,2515,3482,3256,3482,3482,3256,3482] },
    "Andalucía": { depto: "Valle", tarifas: [2742,2291,2160,930,2501,2352,1425,2254,2501,1803,1176,2501] },
    "Andes": { depto: "Antioquia", tarifas: [1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802] },
    "Anolaima": { depto: "Cundinamarca", tarifas: [3256,3482,3256,3256,3482,2515,3482,3256,3482,3482,3256,3482] },
    "Anserma": { depto: "Caldas", tarifas: [1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802] },
    "Ansermanuevo": { depto: "Valle", tarifas: [2981,2385,2534,2385,3030,2303,1630,2439,3409,3409,1019,3409] },
    "Apartadó": { depto: "Antioquia", tarifas: [1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802,1802] },
    "Arauca": { depto: "Arauca", tarifas: [3603,3603,3603,3603,3603,3603,3603,3603,3603,3603,3603,3603] },
    "Armenia": { depto: "Quindío", tarifas: [2364,1222,1681,1219,2049,1540,821,1210,2283,2195,547,2283] },
    "Armero Guayabal": { depto: "Tolima", tarifas: [2773,2239,2339,2239,2501,2489,930,2239,2501,3430,1836,2501] },
    "Barrancabermeja": { depto: "Santander", tarifas: [2051,2002,777,2785,1974,1133,2875,1915,2233,4704,2783,2233] },
    "Barranquilla": { depto: "Atlántico", tarifas: [539,1610,960,1587,629,1240,1841,1048,808,3042,1590,808] },
    "Bogotá": { depto: "Cundinamarca", tarifas: [1706,555,855,1078,1656,1314,642,1066,1744,2121,893,1744] },
    "Bucaramanga": { depto: "Santander", tarifas: [1183,1076,539,2106,1299,782,1720,1071,1163,4553,1790,1163] },
    "Buenaventura": { depto: "Valle", tarifas: [2822,2259,2483,978,2727,2000,2455,2436,2776,1618,1990,2776] },
    "Buga": { depto: "Valle", tarifas: [2516,2077,2160,907,2727,2307,1600,2169,2432,1618,1101,2432] },
    "Cali": { depto: "Valle", tarifas: [1706,1076,1499,549,1656,1877,806,1066,1777,1025,819,1777] },
    "Cartagena": { depto: "Bolívar", tarifas: [608,1798,1446,1819,575,1448,1951,1047,757,2975,1708,757] },
    "Cúcuta": { depto: "Norte de Santander", tarifas: [2013,1916,778,2452,2010,415,2082,1884,2108,3625,2257,2108] },
    "Duitama": { depto: "Boyacá", tarifas: [2906,1124,1846,2478,2912,2078,2405,2454,3109,3325,2239,3109] },
    "Espinal": { depto: "Tolima", tarifas: [2906,1133,2077,2295,2912,2005,603,2210,3109,3430,1787,3109] },
    "Flandes": { depto: "Tolima", tarifas: [2611,1494,1987,2116,2912,2009,603,2085,2501,3256,1469,2501] },
    "Florencia": { depto: "Caquetá", tarifas: [3382,3107,2496,2552,3510,2484,1350,3214,3620,3553,2121,3382] },
    "Florida": { depto: "Valle", tarifas: [2544,2395,2180,978,2729,563,1528,1864,2744,1192,1068,2744] },
    "Fusagasugá": { depto: "Cundinamarca", tarifas: [2668,1104,1977,2113,2912,2009,1966,2110,2501,3300,1631,2501] },
    "Garzón": { depto: "Huila", tarifas: [3384,1905,3315,2652,3510,2503,1351,3381,3620,3456,2208,3620] },
    "Gigante": { depto: "Huila", tarifas: [2683,1979,2519,2382,2501,2489,979,2434,2501,3260,2115,2501] },
    "Girardot": { depto: "Cundinamarca", tarifas: [2611,1153,1979,2116,2912,2009,603,2141,2501,3300,1440,2501] },
    "Ibagué": { depto: "Tolima", tarifas: [2141,1074,1730,1074,1892,1857,575,1068,2108,2056,811,2108] },
    "Ipiales": { depto: "Nariño", tarifas: [3384,2632,2391,1654,3510,2484,3065,2632,3620,2175,2511,3620] },
    "La Dorada": { depto: "Caldas", tarifas: [2834,2172,2328,2367,2727,2404,968,2290,2878,3240,1836,2878] },
    "La Unión": { depto: "Valle", tarifas: [2750,2059,2511,1341,2929,2296,2082,2059,2943,2002,912,2943] },
    "Lorica": { depto: "Córdoba", tarifas: [1450,2955,2972,2955,1435,2728,3271,2138,827,4190,3273,827] },
    "Manizales": { depto: "Caldas", tarifas: [1789,1135,1653,1074,2010,1509,716,1081,1969,2177,519,1969] },
    "Medellín": { depto: "Antioquia", tarifas: [1013,1076,913,1053,945,1353,806,555,1047,2064,827,1047] },
    "Melgar": { depto: "Tolima", tarifas: [2671,1151,2077,2275,2545,2078,603,2247,2501,3292,1970,2501] },
    "Montería": { depto: "Córdoba", tarifas: [819,2680,2129,2477,1517,2484,3271,1378,614,3943,2514,614] },
    "Mosquera": { depto: "Cundinamarca", tarifas: [1706,555,855,1078,1656,1314,642,1066,1744,2121,893,1744] },
    "Neiva": { depto: "Huila", tarifas: [2558,1147,2095,1964,2912,2166,667,1974,2396,3048,1359,2396] },
    "Pamplona": { depto: "Norte de Santander", tarifas: [2765,2803,1243,2871,2727,2033,3332,2901,2678,4467,3109,2678] },
    "Pasto": { depto: "Nariño", tarifas: [2626,2192,2586,1022,2975,2303,2082,2141,3042,575,1890,3042] },
    "Pereira": { depto: "Risaralda", tarifas: [1767,1076,1561,1014,1746,1651,716,1042,1756,2070,539,1756] },
    "Pitalito": { depto: "Huila", tarifas: [3237,2347,2986,2680,3510,2484,1351,3215,3464,3440,2208,3464] },
    "Popayán": { depto: "Cauca", tarifas: [2442,1972,2595,889,2545,2240,1816,2000,2501,1618,1661,2501] },
    "Pradera": { depto: "Valle", tarifas: [2624,2298,2160,794,2501,2352,1305,1931,2501,1261,1004,2501] },
    "Riohacha": { depto: "Guajira", tarifas: [1576,3148,2986,2896,2062,2404,3332,2812,1892,3384,3109,1892] },
    "Rionegro": { depto: "Antioquia", tarifas: [1115,1179,1179,1178,1160,1626,806,654,1192,2765,994,1192] },
    "Samaná": { depto: "Caldas", tarifas: [3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084,3084] },
    "San Gil": { depto: "Santander", tarifas: [2170,1913,900,2729,2142,1263,2796,2026,2233,4331,2899,2233] },
    "Santa Marta": { depto: "Magdalena", tarifas: [522,2441,1608,2290,1355,1731,2545,1638,1163,3384,2239,1163] },
    "Sincelejo": { depto: "Sucre", tarifas: [819,2362,2150,2373,1207,2078,2455,1549,575,3707,2241,575] },
    "Socorro": { depto: "Santander", tarifas: [2182,2059,950,2809,2177,1283,2796,2002,2336,4098,2899,2336] },
    "Sogamoso": { depto: "Boyacá", tarifas: [2906,1124,2077,2432,2912,2078,2405,2509,3109,3325,2275,3109] },
    "Sopó": { depto: "Cundinamarca", tarifas: [1787,744,978,1271,1720,1046,842,1104,1744,2121,1002,1744] },
    "Tunja": { depto: "Boyacá", tarifas: [2596,2093,2588,917,2727,2404,1600,2006,2432,1618,1001,2432] },
    "Valledupar": { depto: "Cesar", tarifas: [980,3092,1561,2475,2121,1934,3332,2812,1718,3384,3109,1718] },
    "Villavicencio": { depto: "Meta", tarifas: [2595,1060,1792,2079,2727,2263,1997,1998,2776,3214,1936,2776] },
    "Yopal": { depto: "Casanare", tarifas: [3043,2251,2824,2852,3643,2347,3065,2773,3258,3409,2824,3258] },
    "Zipaquirá": { depto: "Cundinamarca", tarifas: [1785,555,855,1078,1656,1313,642,1066,2544,2121,893,1743] }
  },

  // Ciudades homologadas: aplican la tarifa de la ciudad capital
  homologadas: {
    "Soledad": "Barranquilla",
    "Galapa": "Barranquilla",
    "Puerto Colombia": "Barranquilla",
    "Malambo": "Barranquilla",
    "Sabana Larga": "Barranquilla",
    "Floridablanca": "Bucaramanga",
    "Girón": "Bucaramanga",
    "Piedecuesta": "Bucaramanga",
    "Mosquera": "Bogotá",
    "Funza": "Bogotá",
    "Madrid": "Bogotá",
    "Tocancipá": "Bogotá",
    "Cota": "Bogotá",
    "Facatativá": "Bogotá",
    "Chía": "Bogotá",
    "Soacha": "Bogotá",
    "Cajicá": "Bogotá",
    "Sibaté": "Bogotá",
    "Yumbo": "Cali",
    "Jamundí": "Cali",
    "Candelaria": "Cali",
    "Palmira": "Cali",
    "Turbaco": "Cartagena",
    "Villa Del Rosario": "Cúcuta",
    "Los Patios": "Cúcuta",
    "Itagüí": "Medellín",
    "Envigado": "Medellín",
    "Bello": "Medellín",
    "Sabaneta": "Medellín",
    "La Estrella": "Medellín",
    "Caldas": "Medellín",
    "Copacabana": "Medellín",
    "Girardota": "Medellín",
    "Cereté": "Montería",
    "La Tebaida": "Armenia",
    "Dosquebradas": "Pereira",
    "Santa Rosa De Cabal": "Pereira",
    "Cartago": "Pereira",
    "Ciénaga": "Santa Marta",
    "Corozal": "Sincelejo",
    "Morroa": "Sincelejo",
    "Sampués": "Sincelejo"
  },

  // Tarifas mínimas (sin el 10% markup — se aplica después)
  minimos: {
    nacional: 32280,
    regional: 29400,
    urbano: 22500,
    mensajeria3kg: 13500
  }

};
```

IMPORTANTE: El archivo NO debe terminar en export ni usar módulos ES6. Debe usar `window.RNT_TARIFARIO =` para que sea accesible globalmente.

NOTAS ADICIONALES SOBRE EL ARCHIVO:
- Agrega al inicio un comentario: `// Tarifario RNT 2024-2025 | Vigente hasta agosto 31 de 2025`
- Agrega al final: `// TODO: Para actualizar tarifas, modificar los arrays de "tarifas" en cada destino`
- El archivo debe guardarse en: assets/js/tarifario-rnt.js
- El archivo completo debe tener TODAS las ciudades del PDF que está en _BaseBuildAgentsIA/7_DocsCliente/tarifas_2024.pdf — este es un archivo CRÍTICO, no omitas ciudades. Léelo completo si tienes acceso a él y completa todos los destinos.
```

---

### PROMPT 2B — MOTOR JS DEL COTIZADOR Y HTML COMPLETO

```
Eres un desarrollador frontend experto. Continúas trabajando en el proyecto c3_rnt.

PREREQUISITO: El archivo assets/js/tarifario-rnt.js ya debe existir con window.RNT_TARIFARIO definido. Si no existe, dime y ejecutamos primero el PROMPT 2A.

TAREA: Crear el motor JavaScript del cotizador Y actualizar el formulario HTML en get-a-quote.html.

=== PARTE 1: MOTOR JS ===
Crea el archivo assets/js/cotizador-motor.js con esta lógica EXACTA:

```javascript
// =============================================
// COTIZADOR RNT - Motor de Cálculo
// Lógica según especificación de Fabián (RNT)
// =============================================

(function() {
  'use strict';

  // Fórmula exacta según reunión con cliente:
  // 1. Peso volumétrico = (largo_cm × ancho_cm × alto_cm) / 2500
  //    ó equivalente: (largo_m × ancho_m × alto_m) × 400
  // 2. Peso facturable por unidad = MAX(peso_real, peso_volumetrico)
  // 3. Para PAQUETEO: peso mínimo = 30 kg por unidad
  //    Si peso_facturable < 30 → usar 30
  // 4. Peso total = peso_facturable_und × número_unidades
  // 5. Tarifa = tarifario[destino][origen] → valor por kg
  // 6. Flete base = peso_total × tarifa
  // 7. Flete con markup 10% = flete_base × 1.10
  // 8. Flete mínimo nacional = $32.280 por unidad (× número unidades)
  // 9. Flete final = MAX(flete_con_markup, minimo × unidades)
  // 10. Seguro (costo de manejo) = MAX(valor_mercancia × 0.01, 5500)
  // 11. TOTAL = flete_final + seguro

  window.RNT_Cotizador = {

    calcular: function(params) {
      const { unidades, pesoPorUnidad, largoCm, anchoCm, altoCm, valorMercancia, origenId, destinoNombre } = params;

      // Validaciones
      if (!unidades || !pesoPorUnidad || !largoCm || !anchoCm || !altoCm || !valorMercancia || !origenId || !destinoNombre) {
        return { error: "Todos los campos son obligatorios" };
      }

      const T = window.RNT_TARIFARIO;
      if (!T) return { error: "Tarifario no cargado" };

      // 1. Resolver ciudad destino (homologadas)
      const destinoReal = T.homologadas[destinoNombre] || destinoNombre;
      const destinoData = T.destinos[destinoReal];
      if (!destinoData) return { error: "Ciudad destino no encontrada: " + destinoNombre };

      // 2. Resolver índice del origen
      const origenObj = T.origenes.find(o => o.id === origenId);
      if (!origenObj) return { error: "Origen no válido" };
      const origenIdx = origenObj.col;

      // 3. Obtener tarifa por kg
      const tarifaKg = destinoData.tarifas[origenIdx];
      if (!tarifaKg || tarifaKg === 0) return { error: "No hay tarifa disponible para esta ruta" };

      // 4. Calcular peso volumétrico por unidad
      const pesoVolUnd = (largoCm * anchoCm * altoCm) / 2500;

      // 5. Peso facturable por unidad (el mayor, mínimo 30 kg)
      const pesoFacturableUnd = Math.max(pesoPorUnidad, pesoVolUnd, 30);

      // 6. Peso total
      const pesoTotal = pesoFacturableUnd * unidades;

      // 7. Flete base y con markup 10%
      const fleteBase = pesoTotal * tarifaKg;
      const fleteConMarkup = fleteBase * 1.10;

      // 8. Mínimo (por unidad)
      const minimoUnd = T.minimos.nacional; // $32.280
      const fleteMinimo = minimoUnd * unidades;

      // 9. Flete final
      const fleteFinal = Math.max(fleteConMarkup, fleteMinimo);

      // 10. Seguro
      const seguro = Math.max(valorMercancia * 0.01, 5500);

      // 11. Total
      const total = fleteFinal + seguro;

      return {
        ok: true,
        // Inputs procesados
        unidades,
        pesoRealUnd: pesoPorUnidad,
        pesoVolUnd: Math.round(pesoVolUnd * 100) / 100,
        pesoFacturableUnd: Math.round(pesoFacturableUnd * 100) / 100,
        pesoTotal: Math.round(pesoTotal * 100) / 100,
        // Ruta
        origen: origenObj.label,
        destino: destinoNombre,
        destinoReal,
        departamento: destinoData.depto,
        // Cálculo
        tarifaKg,
        fleteBase: Math.round(fleteBase),
        fleteConMarkup: Math.round(fleteConMarkup),
        fleteMinimo,
        fleteFinal: Math.round(fleteFinal),
        seguro: Math.round(seguro),
        total: Math.round(total),
        // Info adicional
        nota: pesoVolUnd > pesoPorUnidad ? "Se cobró por peso volumétrico" : 
              pesoFacturableUnd === 30 && pesoPorUnidad < 30 ? "Se aplicó mínimo de 30 kg por unidad" : 
              "Se cobró por peso real"
      };
    },

    formatCOP: function(valor) {
      return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(valor);
    },

    getOpciones: function(tipo) {
      const T = window.RNT_TARIFARIO;
      if (!T) return [];
      if (tipo === 'origenes') return T.origenes;
      if (tipo === 'destinos') return Object.keys(T.destinos).sort();
      return [];
    }

  };

  // Auto-inicializar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cotizadorForm')) {
      RNT_Cotizador.iniciarFormulario();
    }
  });

  // Inicializar formulario interactivo
  window.RNT_Cotizador.iniciarFormulario = function() {
    const T = window.RNT_TARIFARIO;
    if (!T) { console.error('Tarifario no disponible'); return; }

    // Llenar select de origenes
    const selectOrigen = document.getElementById('rnt-origen');
    if (selectOrigen) {
      T.origenes.forEach(o => {
        const opt = document.createElement('option');
        opt.value = o.id;
        opt.textContent = o.label;
        selectOrigen.appendChild(opt);
      });
    }

    // Llenar datalist de destinos (búsqueda con autocomplete)
    const datalistDestinos = document.getElementById('rnt-destinos-list');
    if (datalistDestinos) {
      const todasLasCiudades = [
        ...Object.keys(T.destinos),
        ...Object.keys(T.homologadas)
      ].sort();
      
      todasLasCiudades.forEach(ciudad => {
        const opt = document.createElement('option');
        opt.value = ciudad;
        datalistDestinos.appendChild(opt);
      });
    }

    // Manejar submit del formulario
    const form = document.getElementById('cotizadorForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        RNT_Cotizador.ejecutarCotizacion();
      });
    }

    // Calcular en tiempo real cuando cambien los campos de peso/dimensiones
    ['rnt-unidades','rnt-peso','rnt-largo','rnt-ancho','rnt-alto'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', RNT_Cotizador.actualizarPesoFacturable);
    });
  };

  window.RNT_Cotizador.actualizarPesoFacturable = function() {
    const unidades = parseFloat(document.getElementById('rnt-unidades')?.value) || 1;
    const peso = parseFloat(document.getElementById('rnt-peso')?.value) || 0;
    const largo = parseFloat(document.getElementById('rnt-largo')?.value) || 0;
    const ancho = parseFloat(document.getElementById('rnt-ancho')?.value) || 0;
    const alto = parseFloat(document.getElementById('rnt-alto')?.value) || 0;

    if (peso > 0 && largo > 0 && ancho > 0 && alto > 0) {
      const pesoVol = (largo * ancho * alto) / 2500;
      const pesoFact = Math.max(peso, pesoVol, 30);
      const infoEl = document.getElementById('rnt-peso-info');
      if (infoEl) {
        const usandoVol = pesoVol > peso;
        const usandoMin = pesoFact === 30 && peso < 30;
        infoEl.innerHTML = `
          <small class="text-muted">
            📦 Vol. calculado: <strong>${pesoVol.toFixed(1)} kg</strong> | 
            Peso real: <strong>${peso} kg</strong> | 
            <span class="text-primary">Peso facturable por und: <strong>${pesoFact.toFixed(1)} kg</strong></span>
            ${usandoVol ? ' ⚠️ Se cobra por volumen' : ''}
            ${usandoMin ? ' ⚠️ Se aplica mínimo 30 kg' : ''}
          </small>`;
      }
    }
  };

  window.RNT_Cotizador.ejecutarCotizacion = function() {
    const params = {
      unidades: parseInt(document.getElementById('rnt-unidades')?.value) || 1,
      pesoPorUnidad: parseFloat(document.getElementById('rnt-peso')?.value) || 0,
      largoCm: parseFloat(document.getElementById('rnt-largo')?.value) || 0,
      anchoCm: parseFloat(document.getElementById('rnt-ancho')?.value) || 0,
      altoCm: parseFloat(document.getElementById('rnt-alto')?.value) || 0,
      valorMercancia: parseFloat(document.getElementById('rnt-valor')?.value?.replace(/\D/g,'')) || 0,
      origenId: document.getElementById('rnt-origen')?.value,
      destinoNombre: document.getElementById('rnt-destino')?.value?.trim()
    };

    const resultado = RNT_Cotizador.calcular(params);
    RNT_Cotizador.mostrarResultado(resultado);
  };

  window.RNT_Cotizador.mostrarResultado = function(res) {
    const contenedor = document.getElementById('rnt-resultado');
    if (!contenedor) return;

    if (res.error) {
      contenedor.innerHTML = `<div class="alert alert-warning"><i class="bi bi-exclamation-triangle"></i> ${res.error}</div>`;
      contenedor.style.display = 'block';
      return;
    }

    const fmt = RNT_Cotizador.formatCOP;
    contenedor.innerHTML = `
      <div class="cotizacion-resultado">
        <h5 class="resultado-titulo">
          <i class="bi bi-calculator"></i> Cotización Estimada
        </h5>
        <div class="resultado-ruta">
          <strong>${res.origen}</strong> → <strong>${res.destino}</strong>
          <span class="badge bg-secondary ms-2">${res.departamento}</span>
        </div>
        <div class="resultado-desglose">
          <div class="desglose-item">
            <span>Peso facturable (${res.unidades} ud × ${res.pesoFacturableUnd} kg)</span>
            <span>${res.pesoTotal} kg</span>
          </div>
          <div class="desglose-item">
            <span>Tarifa por kg (${res.origen} → ${res.destinoReal})</span>
            <span>${fmt(res.tarifaKg)}</span>
          </div>
          <div class="desglose-item">
            <span>Flete (incluye margen de negociación)</span>
            <span>${fmt(res.fleteFinal)}</span>
          </div>
          <div class="desglose-item">
            <span>Seguro / Costo de manejo (1% valor declarado, mín. $5.500)</span>
            <span>${fmt(res.seguro)}</span>
          </div>
          <div class="desglose-total">
            <span>TOTAL ESTIMADO</span>
            <span>${fmt(res.total)}</span>
          </div>
        </div>
        <p class="resultado-nota"><small>⚠️ ${res.nota}. Esta cotización es un estimado. El valor final puede variar según condiciones de empaque y verificación en punto de entrega. Tarifas vigentes 2024-2025.</small></p>
        <div class="resultado-cta">
          <a href="https://wa.me/573124376616?text=Hola%2C%20quiero%20confirmar%20una%20cotización%20de%20${encodeURIComponent(res.origen)}%20a%20${encodeURIComponent(res.destino)}%20por%20${fmt(res.total)}" 
             class="btn btn-success" target="_blank">
            <i class="bi bi-whatsapp"></i> Confirmar por WhatsApp
          </a>
          <a href="contact.html" class="btn btn-outline-primary ms-2">
            <i class="bi bi-envelope"></i> Solicitar recogida
          </a>
        </div>
      </div>`;
    contenedor.style.display = 'block';
    contenedor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

})();
```

=== PARTE 2: HTML DEL FORMULARIO ===

Actualiza el archivo get-a-quote.html. Reemplaza la sección del formulario de cotización con este HTML (mantén el header, hero y footer existentes — solo reemplaza el bloque de formulario):

El formulario debe tener esta estructura visual (acorde con el diseño Logis/Bootstrap 5):

```html
<!-- ======= Cotizador Section ======= -->
<section id="cotizador" class="get-a-quote">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Cotiza tu Envío</h2>
      <p>Calcula el costo de tu envío en segundos. Ingresa los datos de tu paquete y obtén una cotización inmediata.</p>
    </div>

    <div class="row g-5">
      <!-- Formulario de cotización -->
      <div class="col-lg-8">
        <form id="cotizadorForm" novalidate>
          
          <!-- Card: Datos del paquete -->
          <div class="card mb-4 shadow-sm">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0"><i class="bi bi-box"></i> Datos del Paquete</h5>
              <small>Se requiere báscula y flexómetro para datos exactos</small>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-2">
                  <label for="rnt-unidades" class="form-label fw-bold">Unidades *</label>
                  <div class="input-group">
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.nextElementSibling.stepDown();this.nextElementSibling.dispatchEvent(new Event('input'))">-</button>
                    <input type="number" class="form-control text-center" id="rnt-unidades" value="1" min="1" max="999" required>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.previousElementSibling.stepUp();this.previousElementSibling.dispatchEvent(new Event('input'))">+</button>
                  </div>
                </div>
                <div class="col-md-2">
                  <label for="rnt-peso" class="form-label fw-bold">Peso/und (kg) *</label>
                  <div class="input-group">
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.nextElementSibling.stepDown();this.nextElementSibling.dispatchEvent(new Event('input'))">-</button>
                    <input type="number" class="form-control text-center" id="rnt-peso" placeholder="0" min="0.1" step="0.1" required>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.previousElementSibling.stepUp();this.previousElementSibling.dispatchEvent(new Event('input'))">+</button>
                  </div>
                </div>
                <div class="col-md-2">
                  <label for="rnt-largo" class="form-label fw-bold">Largo (cm) *</label>
                  <div class="input-group">
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.nextElementSibling.stepDown();this.nextElementSibling.dispatchEvent(new Event('input'))">-</button>
                    <input type="number" class="form-control text-center" id="rnt-largo" placeholder="0" min="1" required>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.previousElementSibling.stepUp();this.previousElementSibling.dispatchEvent(new Event('input'))">+</button>
                  </div>
                </div>
                <div class="col-md-2">
                  <label for="rnt-ancho" class="form-label fw-bold">Ancho (cm) *</label>
                  <div class="input-group">
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.nextElementSibling.stepDown();this.nextElementSibling.dispatchEvent(new Event('input'))">-</button>
                    <input type="number" class="form-control text-center" id="rnt-ancho" placeholder="0" min="1" required>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.previousElementSibling.stepUp();this.previousElementSibling.dispatchEvent(new Event('input'))">+</button>
                  </div>
                </div>
                <div class="col-md-2">
                  <label for="rnt-alto" class="form-label fw-bold">Alto (cm) *</label>
                  <div class="input-group">
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.nextElementSibling.stepDown();this.nextElementSibling.dispatchEvent(new Event('input'))">-</button>
                    <input type="number" class="form-control text-center" id="rnt-alto" placeholder="0" min="1" required>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="this.previousElementSibling.stepUp();this.previousElementSibling.dispatchEvent(new Event('input'))">+</button>
                  </div>
                </div>
                <div class="col-md-2">
                  <label for="rnt-valor" class="form-label fw-bold">Valor mercancía *</label>
                  <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="number" class="form-control" id="rnt-valor" placeholder="0" min="0" required>
                  </div>
                </div>
              </div>
              <!-- Indicador de peso facturable en tiempo real -->
              <div id="rnt-peso-info" class="mt-2"></div>
            </div>
          </div>

          <!-- Card: Despacho -->
          <div class="card mb-4 shadow-sm">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0"><i class="bi bi-truck"></i> Despacho</h5>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="rnt-origen" class="form-label fw-bold">Ciudad Origen *</label>
                  <select class="form-select" id="rnt-origen" required>
                    <option value="">Seleccione ciudad origen...</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="rnt-destino" class="form-label fw-bold">Ciudad Destino *</label>
                  <input type="text" class="form-control" id="rnt-destino" 
                         list="rnt-destinos-list" placeholder="Escriba o busque la ciudad..."
                         autocomplete="off" required>
                  <datalist id="rnt-destinos-list"></datalist>
                  <small class="text-muted">Escriba el nombre de la ciudad destino</small>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg w-100">
            <i class="bi bi-calculator"></i> Calcular Envío
          </button>
        </form>

        <!-- Resultado de la cotización -->
        <div id="rnt-resultado" class="mt-4" style="display:none;"></div>
      </div>

      <!-- Sidebar informativo -->
      <div class="col-lg-4">
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h5 class="card-title text-primary"><i class="bi bi-info-circle"></i> ¿Cómo funciona?</h5>
            <ul class="list-unstyled">
              <li class="mb-2">📦 <strong>Paqueteo (0-30 kg):</strong> Mínimo 30 kg por unidad</li>
              <li class="mb-2">📏 <strong>Peso volumétrico:</strong> Largo × Ancho × Alto ÷ 2500</li>
              <li class="mb-2">⚖️ <strong>Se cobra el mayor</strong> entre peso real y volumétrico</li>
              <li class="mb-2">🛡️ <strong>Seguro:</strong> 1% del valor declarado (mín. $5.500)</li>
            </ul>
          </div>
        </div>
        <div class="card shadow-sm bg-light">
          <div class="card-body text-center">
            <h6 class="text-muted mb-3">¿Preguntas? Escríbenos</h6>
            <a href="https://wa.me/573124376616" class="btn btn-success w-100" target="_blank">
              <i class="bi bi-whatsapp"></i> WhatsApp: 312 437 6616
            </a>
            <p class="mt-2 mb-0"><small class="text-muted">PBX: (601) 272 6117</small></p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
```

=== PARTE 3: AGREGAR SCRIPTS AL HTML ===

En el archivo get-a-quote.html, ANTES del cierre </body>, agregar en este ORDEN EXACTO:
```html
<script src="assets/js/tarifario-rnt.js"></script>
<script src="assets/js/cotizador-motor.js"></script>
```

=== PARTE 4: CSS PARA EL RESULTADO ===

Agregar al final de assets/css/main.css:
```css
/* ===== COTIZADOR RNT ===== */
.cotizacion-resultado {
  background: #fff;
  border: 2px solid #0d6efd;
  border-radius: 12px;
  padding: 24px;
  animation: fadeInUp 0.3s ease;
}
.resultado-titulo { color: #0d6efd; margin-bottom: 12px; }
.resultado-ruta { font-size: 1.1rem; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #eee; }
.resultado-desglose { width: 100%; }
.desglose-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
.desglose-item span:first-child { color: #666; }
.desglose-item span:last-child { font-weight: 600; }
.desglose-total { display: flex; justify-content: space-between; padding: 14px 0; font-size: 1.3rem; font-weight: 700; color: #0d6efd; border-top: 2px solid #0d6efd; margin-top: 8px; }
.resultado-nota { margin-top: 12px; color: #888; font-size: 0.82rem; }
.resultado-cta { margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap; }
```

VALIDACIÓN FINAL ESPERADA:
1. Existe assets/js/tarifario-rnt.js con window.RNT_TARIFARIO definido
2. Existe assets/js/cotizador-motor.js con window.RNT_Cotizador definido
3. get-a-quote.html tiene el formulario nuevo y los dos script tags al final
4. main.css tiene los estilos del cotizador
5. Prueba manual: Origen=Bogotá, Destino=Medellín, 1 und, 30kg, 50×30×30cm, $800.000 → debe dar aprox. $43.000 flete + $8.000 seguro = ~$51.000 total
```

---

## ⚡ PROMPT #3 — PÁGINA DE RASTREO
### Tiempo estimado: 30 minutos

```
Eres un desarrollador frontend experto. Estás en el proyecto c3_rnt.

TAREA: Actualizar la sección de rastreo en index.html Y crear una página dedicada de rastreo.

CONTEXTO CRÍTICO:
- El sistema de rastreo ACTUAL de RNT funciona en: mail.rednacionaldetransportes.com/rastreo/lista_rastreo.php
- Este sistema recibe el número de guía y muestra la información del envío + estados + imagen de la guía
- La nueva web NO tiene backend propio de rastreo todavía
- Estrategia: mostrar el rastreo actual del cliente en un iframe + botón WhatsApp como alternativa

PASO 1: Actualizar sección hero de rastreo en index.html
Busca la sección que tiene el formulario de "Rastrea tu guía" (si existe) y actualízala. Si no existe, agrégala en index.html como una sección nueva con ID "rastreo":

```html
<!-- ======= Rastreo Section ======= -->
<section id="rastreo" class="rastreo-section bg-light py-5">
  <div class="container" data-aos="fade-up">
    <div class="row justify-content-center">
      <div class="col-lg-7 text-center mb-4">
        <h2 class="section-title">Rastrea tu Envío</h2>
        <p class="text-muted">Ingresa tu número de guía y conoce el estado de tu envío en tiempo real.</p>
      </div>
      <div class="col-lg-7">
        <div class="card shadow-sm border-0">
          <div class="card-body p-4">
            <div class="input-group input-group-lg mb-3">
              <span class="input-group-text bg-primary text-white">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" class="form-control" id="numeroGuia" 
                     placeholder="Ingresa tu número de guía (ej: 1002552)"
                     oninput="this.value=this.value.replace(/[^0-9]/g,'')">
              <button class="btn btn-primary px-4" type="button" onclick="RNT_Rastreo.buscar()">
                Rastrear
              </button>
            </div>
            <div id="rastreo-frame-container" style="display:none;">
              <iframe id="rastreo-iframe" style="width:100%; min-height:500px; border:none; border-radius:8px;" 
                      title="Estado del envío"></iframe>
            </div>
            <div id="rastreo-loading" style="display:none;" class="text-center py-4">
              <div class="spinner-border text-primary" role="status"></div>
              <p class="mt-2 text-muted">Consultando estado del envío...</p>
            </div>
            <div class="text-center mt-3">
              <small class="text-muted">
                ¿No encuentras tu guía? 
                <a href="https://wa.me/573124376616?text=Hola%2C%20quiero%20rastrear%20mi%20guía" target="_blank" class="text-success">
                  <i class="bi bi-whatsapp"></i> Escríbenos por WhatsApp
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

PASO 2: Agregar JS del rastreo

Crea assets/js/rastreo-rnt.js:

```javascript
// Rastreo RNT - Conecta con sistema actual en mail.rednacionaldetransportes.com
window.RNT_Rastreo = {
  
  baseUrl: 'https://mail.rednacionaldetransportes.com/rastreo/lista_rastreo.php',

  buscar: function() {
    const guia = document.getElementById('numeroGuia')?.value?.trim();
    if (!guia) {
      alert('Por favor ingresa un número de guía');
      return;
    }
    if (!/^\d+$/.test(guia)) {
      alert('El número de guía solo debe contener números');
      return;
    }

    const loading = document.getElementById('rastreo-loading');
    const container = document.getElementById('rastreo-frame-container');
    const iframe = document.getElementById('rastreo-iframe');

    // Mostrar loading
    if (loading) loading.style.display = 'block';
    if (container) container.style.display = 'none';

    // Intentar cargar en iframe
    // NOTA: Si el servidor del cliente no permite iframes (X-Frame-Options),
    // se abrirá en nueva pestaña automáticamente
    const url = `${this.baseUrl}?guia=${guia}`;
    
    setTimeout(() => {
      if (loading) loading.style.display = 'none';
      
      // Abrir en nueva pestaña (más confiable dado que el sistema es externo)
      window.open(url, '_blank', 'noopener,noreferrer');
      
      // Mostrar mensaje de confirmación
      if (container) {
        container.style.display = 'block';
        container.innerHTML = `
          <div class="alert alert-success">
            <i class="bi bi-check-circle"></i> 
            Se abrió el estado de tu guía <strong>${guia}</strong> en una nueva ventana.
            <br>
            <small>¿No se abrió? <a href="${url}" target="_blank">Haz clic aquí</a></small>
          </div>
          <div class="text-center mt-3">
            <a href="${url}" target="_blank" class="btn btn-outline-primary">
              <i class="bi bi-box-arrow-up-right"></i> Ver estado de guía ${guia}
            </a>
          </div>`;
      }
    }, 1000);
  }
};

// Enter key support
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('numeroGuia');
  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') RNT_Rastreo.buscar();
    });
  }
});
```

PASO 3: Agregar en index.html antes del cierre </body>:
```html
<script src="assets/js/rastreo-rnt.js"></script>
```

PASO 4: Actualizar navegación
En TODOS los archivos HTML, en el link del menú que corresponda a "Rastrear" o "Tracking" o similar, asegúrate que apunte a: index.html#rastreo

VALIDACIÓN: 
- Se puede ingresar un número en el campo
- Al hacer clic "Rastrear" se abre el sistema actual en nueva pestaña
- Se muestra mensaje de confirmación con link directo
```

---

## 📋 ORDEN DE EJECUCIÓN PARA HOY

```
PASO 1: Copia y pega PROMPT #1 en Copilot → Botón WhatsApp (15 min)
        → Haz push → Verifica en netlify que se ve el botón en verde

PASO 2: Copia y pega PROMPT #2A en Copilot → JSON Tarifario (45 min)
        → Verifica que el archivo assets/js/tarifario-rnt.js existe y no tiene errores JS

PASO 3: Copia y pega PROMPT #2B en Copilot → Motor + HTML (60 min)
        → Prueba manual: Bogotá→Medellín, 1und, 30kg, 50×30×30, $800.000 → ~$51.000
        → Haz push → Verifica en netlify

PASO 4: Copia y pega PROMPT #3 en Copilot → Rastreo (30 min)
        → Prueba: ingresa 1002552 → debe abrir en nueva pestaña el estado real

PASO 5: Push final → Llamas a Fabián → Le muestras el link de netlify
```

---

## 🎯 LO QUE LE MUESTRAS A FABIÁN

Cuando lo llames, di exactamente esto:
> "Fabián, avancé en el proyecto. Tengo desplegado: la nueva web con tu imagen corporativa, el cotizador funcionando con tus tarifas reales 2024, y el rastreo conectado con tu sistema actual. El link es [link netlify]. Lo que me falta para que quede 100% son: 1) Tus tarifas 2025 actualizadas en Excel, 2) La tabla de mensajería y paquetes Premier, y 3) Tu dominio para hacer el apuntamiento. ¿Cuándo nos reunimos para terminar esto?"

---

## 📌 NOTAS IMPORTANTES DEL ARQUITECTO

1. **El tarifario 2024 es suficiente para el MVP** — Fabián puede actualizar cuando tenga el 2025
2. **La mensajería diferencial (1-5kg) no se construye hoy** — no tenemos la tabla
3. **El panel admin de rastreo es Fase 3** — hoy solo conectamos con el sistema que ya existe
4. **Gelotra vs nuevo sistema**: el cliente está con Gelotra hasta agosto. La integración API es una negociación futura. No construir nada de eso hoy.
5. **Numero WhatsApp confirmado**: 312 437 6616 → formato internacional: +573124376616

---
*Generado por Claude Sonnet 4.6 | Arquitecto del proyecto RNT | 25 Feb 2026*
