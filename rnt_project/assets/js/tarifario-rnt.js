// =============================================
// TARIFARIO RNT 2024-2025
// Vigente hasta agosto 31 de 2025
// Fuente: tarifas_2024.pdf — Red Nacional de Transportes S.A.S.
// =============================================
// IMPORTANTE: Para actualizar tarifas, modifica los arrays "tarifas" en cada destino.
// El orden de tarifas es: [Barranquilla/StaMarta, Bogotá, Bucaramanga, Cali,
//                          Cartagena, Cúcuta, Ibagué, Medellín, Montería, Pasto, Pereira, Sincelejo]

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
    "Neiva": { depto: "Huila", tarifas: [2558,1147,2095,1964,2912,2166,667,1974,2396,3048,1359,2396] },
    "Pamplona": { depto: "Norte de Santander", tarifas: [2765,2803,1243,2871,2727,2033,3332,2901,2678,4467,3109,2678] },
    "Pasto": { depto: "Nariño", tarifas: [2626,2192,2586,1022,2975,2303,2082,2141,3042,575,1890,3042] },
    "Pereira": { depto: "Risaralda", tarifas: [1767,1076,1561,1014,1746,1651,716,1042,1756,2070,539,1756] },
    "Pitalito": { depto: "Huila", tarifas: [3237,2347,2986,2680,3510,2484,1351,3215,3464,3440,2208,3464] },
    "Popayán": { depto: "Cauca", tarifas: [2442,1972,2595,889,2545,2240,1816,2000,2501,1618,1661,2501] },
    "Pradera": { depto: "Valle", tarifas: [2624,2298,2160,794,2501,2352,1305,1931,2501,1261,1004,2501] },
    "Quibdó": { depto: "Chocó", tarifas: [2575,2575,2575,2575,2575,2575,2575,2575,2575,2575,2575,2575] },
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
    // BARRANQUILLA
    "Soledad": "Barranquilla",
    "Galapa": "Barranquilla",
    "Puerto Colombia": "Barranquilla",
    "Malambo": "Barranquilla",
    "Sabana Larga": "Barranquilla",
    // BUCARAMANGA
    "Floridablanca": "Bucaramanga",
    "Girón": "Bucaramanga",
    "Piedecuesta": "Bucaramanga",
    // BOGOTÁ
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
    // CALI
    "Yumbo": "Cali",
    "Jamundí": "Cali",
    "Candelaria": "Cali",
    "Palmira": "Cali",
    // CARTAGENA
    "Turbaco": "Cartagena",
    // CÚCUTA
    "Villa Del Rosario": "Cúcuta",
    "Los Patios": "Cúcuta",
    // MEDELLÍN
    "Itagüí": "Medellín",
    "Envigado": "Medellín",
    "Bello": "Medellín",
    "Sabaneta": "Medellín",
    "La Estrella": "Medellín",
    "Caldas": "Medellín",
    "Copacabana": "Medellín",
    "Girardota": "Medellín",
    // MONTERÍA
    "Cereté": "Montería",
    // ARMENIA
    "La Tebaida": "Armenia",
    // PEREIRA
    "Dosquebradas": "Pereira",
    "Santa Rosa De Cabal": "Pereira",
    "Cartago": "Pereira",
    // SANTA MARTA
    "Ciénaga": "Santa Marta",
    // SINCELEJO
    "Corozal": "Sincelejo",
    "Morroa": "Sincelejo",
    "Sampués": "Sincelejo"
  },

  // Tarifas mínimas por unidad (antes del markup 10%)
  minimos: {
    nacional: 32280,
    regional: 29400,
    urbano: 22500,
    mensajeria3kg: 13500
  }

};

// TODO: Para actualizar tarifas en el futuro, modificar los arrays "tarifas" en cada destino
// Cada array tiene 12 valores en el orden especificado en el comentario inicial
