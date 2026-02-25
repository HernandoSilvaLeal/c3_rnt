# 🚀 SUPER PROMPT DE IGNICIÓN — PROYECTO RNT
## Para: GitHub Copilot (Claude Sonnet 4.5)
## De: Arquitecto Claude Sonnet 4.6 + Hernando Silva (AppCors)
## Fecha: 25 Feb 2026 .

---
Asistente hemos preparado un pront para que tú puedas continuar y arrancar con todo este proyecto el arquitecto comandante es Claude en la web yo soy Hernando que soy el orquestador tú eres copailot Sonic en dentro de visual Studio code y eres quien va a hacer el desarrollador Y tenemos apoyo eventual de directores de operaciones que son conversaciones de en chat gpt web dicho todo esto te voy a aplicar el PROMPT de ignición ten en cuenta que tomamos las mayores y las mejores Decisiones Con el arquitecto comandante Claude tú tienes que no dañar nada de lo que hay y robustecer lo que ya lo que se te manda sí tratando de tener cierto margen de maniobra hasta donde consideres con las orientaciones que te están dando explícitamente pero no romper nada de lo que se está haciendo esto te lo estoy diciendo porque es la primera vez que estoy trabajando proyectos con Inteligencia artificial que renderizan en el frontend algo visual normalmente solo es algo lógico en backend pero necesitamos que esa esa parte visual esté bien esté funcional sea responsiva los colores pues son puede ser aproximados a los que ya hay no tenemos un figma cosas así como tan estrictas pero necesitamos la creatividad y la eficiencia tuya para cumplir lo que se te está mandando confiamos en que vas a hacer un excelente trabajo en que si se te quedas parado Hasta cierto. Vas a estar vamos a utilizar las documentaciones que vayas haciendo y nutriendo las carpetas respectivas y te agradezco Entonces por lo que estamos haciendo gracias por tomarte el tiempo de analizar los archivos habrán unos que son archivos de relleno hay otros que son archivos esenciales les traté de poner un nombre semántico a las carpetas para que estés estratégicamente revisando Qué es lo importante y que no y que Cuáles son las decisiones y por eso te damos este esta orientación rectificadora del plan ejecutivo para tener éxito Con los objetivos del cliente tanto en objetivos de negocio como en objetivos técnicos.

Yo Hernando voy a venir a revisar lo que tú hiciste me debe renderizar bien no deben estar cosas rotas sí Perdóname que te diga esto tan reiterativamente pero es la primera vez que estoy trabajando con un motor de Inteligencia artificial que renderiza en frontend sí Entonces te pido por favor que renderice bien y que la lógica de negocio se cumpla ahora a continuación te voy a compartir todas las indicaciones que vienen por parte del arquitecto comandante Claude para ti.


## ⚡ TU ROL EN ESTE PROYECTO

Eres el desarrollador senior del proyecto **Red Nacional de Transportes (RNT)**. Tu trabajo es implementar código de calidad profesional, bonito y funcional, siguiendo exactamente las instrucciones de este documento. Trabajas con **HTML5 + CSS3 + Vanilla JS puro** (sin frameworks de JS, sin React, sin Vue). El proyecto ya tiene Bootstrap 5.3.3 instalado y funcionando.

**Regla de oro: NO romper nada que ya funcione.** Solo agregar o modificar lo indicado. Cada cambio que hagas debe dejar el proyecto en estado funcional y desplegable.

---

## 📁 MAPA DEL PROYECTO — RUTAS ABSOLUTAS

### Archivos del sitio web (los que tocas):
```
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\index.html
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\about.html
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\services.html
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\service-details.html
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\pricing.html
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\contact.html
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\get-a-quote.html
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\assets\css\main.css
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\assets\js\main.js
```

### Archivos que CREAS tú (nuevos):
```
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\assets\js\tarifario-rnt.js
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\assets\js\cotizador-motor.js
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\rnt_project\assets\js\rastreo-rnt.js
```

### Documentos de contexto (LÉELOS antes de empezar):
```
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\0_PLAN_TOTAL_DECISIVO_(ADR+PDR)\RNT_PLAN_MAESTRO.md
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\0_PLAN_TOTAL_DECISIVO_(ADR+PDR)\RNT_PROMPTS_COPILOT.md
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\_BaseBuildAgentsIA_DRAFT\6_ContextCopilotCurrent\content-rnt-.md
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\_BaseBuildAgentsIA_DRAFT\6_ContextCopilotCurrent\01_ArquitecturaTecnica.md
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\_BaseBuildAgentsIA_DRAFT\4_ReuConCliente\DesgrabacionReuCliente.md
```

### Documento tarifario (FUENTE DE VERDAD para los precios):
```
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\_BaseBuildAgentsIA_DRAFT\7_DocsCliente\tarifas_2024.pdf
```

### Carpetas de OUTPUT por checkpoint:
```
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\2_CP2\   ← Resultado del CP2 (WhatsApp)
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\3_CP3\   ← Resultado del CP3 (Cotizador)
c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\4_CP4\   ← Resultado del CP4 (Rastreo)
```

---

## 🧠 CONTEXTO ESENCIAL DEL PROYECTO

**Cliente:** Red Nacional de Transportes S.A.S. — Fabián (representante)
**NIT:** 901.040.715-7
**Actividad:** Transporte de carga y encomiendas a nivel nacional e internacional en Colombia

**Contacto oficial:**
- WhatsApp y recogidas: +57 312 437 6616
- PBX: (601) 272 6117 / (601) 269 55 85
- Email: servicioalcliente@rednacionaldetransportes.com
- Sede Principal: Calle 14 Sur No. 18A-30, Barrio Restrepo, Bogotá
- Sede Carvajal: Carrera 69B No. 24-42 Sur, Bogotá

**Stack del proyecto:**
- HTML5 + CSS3 + Vanilla JS (SIN frameworks JS)
- Bootstrap 5.3.3 (ya instalado en vendor/)
- Bootstrap Icons (ya instalado en vendor/)
- AOS, Swiper, GLightbox, PureCounter (ya instalados)
- Deploy: Netlify CI/CD automático desde GitHub
- URL actual: rednacionaldetransporte.netlify.app

**Lógica de negocio cotizador (validada con cliente en reunión ago 2025):**
```
peso_vol = (largo_cm × ancho_cm × alto_cm) / 2500
peso_fact_und = MAX(peso_real, peso_vol, 30)     ← mínimo 30 kg paqueteo
peso_total = peso_fact_und × unidades
tarifa_kg = tarifario[destino][origen]
flete_markup = peso_total × tarifa_kg × 1.10     ← 10% margen negociación
flete_minimo = 32280 × unidades
flete_final = MAX(flete_markup, flete_minimo)
seguro = MAX(valor_mercancia × 0.01, 5500)       ← 1% mínimo $5.500
TOTAL = flete_final + seguro
```

**Sistema de rastreo actual del cliente:**
- URL base: https://mail.rednacionaldetransportes.com/rastreo/lista_rastreo.php
- Parámetro: ?guia=NUMERO
- Ejemplo funcional: ?guia=1002552

---

## 📋 PLAN DE TRABAJO — SESIÓN DE HOY

Vas a ejecutar 3 checkpoints en orden. Completa uno antes de pasar al siguiente. Al finalizar cada uno, guarda los archivos modificados/creados en la carpeta de output correspondiente además de editarlos in-situ en rnt_project.

---

## ✅ CHECKPOINT 2 — BOTÓN WHATSAPP FLOTANTE
**Output:** `c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\2_CP2\`
**Tiempo estimado:** 15-20 minutos

### Objetivo
Agregar un botón flotante de WhatsApp visible en TODAS las páginas del sitio.

### Tarea 2.1 — CSS en main.css
Agrega al FINAL de `assets/css/main.css` esta sección completa:

```css
/* =============================
   WHATSAPP FLOTANTE — CP2
   ============================= */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
  z-index: 9999;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: whatsapp-pulse 3s ease-in-out infinite;
}

.whatsapp-float:hover {
  transform: scale(1.12);
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.7);
}

.whatsapp-float svg {
  width: 32px;
  height: 32px;
  fill: #ffffff;
}

.whatsapp-float .wa-tooltip {
  position: absolute;
  right: 70px;
  background: #333;
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.whatsapp-float:hover .wa-tooltip {
  opacity: 1;
}

@keyframes whatsapp-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5); }
  50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.85); }
}

@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
  }
  .whatsapp-float svg {
    width: 28px;
    height: 28px;
  }
}
```

### Tarea 2.2 — HTML en cada página
En los 7 archivos HTML: `index.html`, `about.html`, `services.html`, `service-details.html`, `pricing.html`, `contact.html`, `get-a-quote.html`

Agrega este bloque JUSTO ANTES del cierre `</body>` en CADA archivo:

```html
<!-- WhatsApp Float Button -->
<a href="https://wa.me/573124376616?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20transporte"
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Contactar por WhatsApp">
  <span class="wa-tooltip">¿Necesitas ayuda?</span>
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
```

### Tarea 2.3 — OUTPUT del CP2
Copia los 7 archivos HTML modificados y el main.css actualizado a:
`c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\2_CP2\`

### Criterio de aceptación CP2
- [ ] Los 7 HTML tienen el botón antes del cierre `</body>`
- [ ] El CSS está al final de main.css
- [ ] El botón verde aparece en esquina inferior derecha
- [ ] Al hover se ve el tooltip y el scale
- [ ] El número +573124376616 es correcto en todos los links

---

## ✅ CHECKPOINT 3 — COTIZADOR MVP COMPLETO
**Output:** `c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\3_CP3\`
**Tiempo estimado:** 2-3 horas

### Objetivo
Cotizador funcional con tarifario real 2024 que calcule fletes automáticamente.

---

### Tarea 3.1 — Crear tarifario-rnt.js

Crea el archivo `rnt_project/assets/js/tarifario-rnt.js`.

**LEE PRIMERO** el PDF en:
`c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\_BaseBuildAgentsIA_DRAFT\7_DocsCliente\tarifas_2024.pdf`

El archivo debe definir `window.RNT_TARIFARIO` con esta estructura:

```javascript
// Tarifario RNT 2024-2025 | Vigente hasta agosto 31 de 2025
// Fuente: tarifas_2024.pdf — Red Nacional de Transportes S.A.S.
// IMPORTANTE: Para actualizar tarifas, modifica los arrays "tarifas" en cada destino.
// El orden de tarifas es: [Barranquilla/StaMarta, Bogotá, Bucaramanga, Cali,
//                          Cartagena, Cúcuta, Ibagué, Medellín, Montería, Pasto, Pereira, Sincelejo]

window.RNT_TARIFARIO = {

  origenes: [
    { id: "barranquilla", label: "Barranquilla / Santa Marta", col: 0 },
    { id: "bogota",       label: "Bogotá",                    col: 1 },
    { id: "bucaramanga",  label: "Bucaramanga",               col: 2 },
    { id: "cali",         label: "Cali",                      col: 3 },
    { id: "cartagena",    label: "Cartagena",                 col: 4 },
    { id: "cucuta",       label: "Cúcuta",                    col: 5 },
    { id: "ibague",       label: "Ibagué",                    col: 6 },
    { id: "medellin",     label: "Medellín",                  col: 7 },
    { id: "monteria",     label: "Montería",                  col: 8 },
    { id: "pasto",        label: "Pasto",                     col: 9 },
    { id: "pereira",      label: "Pereira",                   col: 10 },
    { id: "sincelejo",    label: "Sincelejo",                 col: 11 }
  ],

  // COMPLETA TODOS LOS DESTINOS DEL PDF — NO omitas ninguno
  // Estructura: "NombreCiudad": { depto: "Departamento", tarifas: [12 valores en orden] }
  destinos: {
    // [COPILOT: Lee el PDF y completa TODOS los destinos aquí]
    // Ejemplo del formato:
    "Bogotá":        { depto: "Cundinamarca",    tarifas: [1706,555,855,1078,1656,1314,642,1066,1744,2121,893,1744] },
    "Medellín":      { depto: "Antioquia",       tarifas: [1013,1076,913,1053,945,1353,806,555,1047,2064,827,1047] },
    "Cali":          { depto: "Valle del Cauca", tarifas: [1706,1076,1499,549,1656,1877,806,1066,1777,1025,819,1777] },
    "Barranquilla":  { depto: "Atlántico",       tarifas: [539,1610,960,1587,629,1240,1841,1048,808,3042,1590,808] },
    "Cartagena":     { depto: "Bolívar",         tarifas: [608,1798,1446,1819,575,1448,1951,1047,757,2975,1708,757] },
    "Bucaramanga":   { depto: "Santander",       tarifas: [1183,1076,539,2106,1299,782,1720,1071,1163,4553,1790,1163] },
    "Cúcuta":        { depto: "N. Santander",    tarifas: [2013,1916,778,2452,2010,415,2082,1884,2108,3625,2257,2108] },
    "Ibagué":        { depto: "Tolima",          tarifas: [2141,1074,1730,1074,1892,1857,575,1068,2108,2056,811,2108] },
    "Montería":      { depto: "Córdoba",         tarifas: [819,2680,2129,2477,1517,2484,3271,1378,614,3943,2514,614] },
    "Pasto":         { depto: "Nariño",          tarifas: [2626,2192,2586,1022,2975,2303,2082,2141,3042,575,1890,3042] },
    "Pereira":       { depto: "Risaralda",       tarifas: [1767,1076,1561,1014,1746,1651,716,1042,1756,2070,539,1756] },
    "Sincelejo":     { depto: "Sucre",           tarifas: [819,2362,2150,2373,1207,2078,2455,1549,575,3707,2241,575] },
    "Armenia":       { depto: "Quindío",         tarifas: [2364,1222,1681,1219,2049,1540,821,1210,2283,2195,547,2283] },
    "Manizales":     { depto: "Caldas",          tarifas: [1789,1135,1653,1074,2010,1509,716,1081,1969,2177,519,1969] },
    "Neiva":         { depto: "Huila",           tarifas: [2558,1147,2095,1964,2912,2166,667,1974,2396,3048,1359,2396] },
    "Villavicencio": { depto: "Meta",            tarifas: [2595,1060,1792,2079,2727,2263,1997,1998,2776,3214,1936,2776] },
    "Popayán":       { depto: "Cauca",           tarifas: [2442,1972,2595,889,2545,2240,1816,2000,2501,1618,1661,2501] },
    "Santa Marta":   { depto: "Magdalena",       tarifas: [522,2441,1608,2290,1355,1731,2545,1638,1163,3384,2239,1163] },
    "Riohacha":      { depto: "Guajira",         tarifas: [1576,3148,2986,2896,2062,2404,3332,2812,1892,3384,3109,1892] },
    "Valledupar":    { depto: "Cesar",           tarifas: [980,3092,1561,2475,2121,1934,3332,2812,1718,3384,3109,1718] },
    "Tunja":         { depto: "Boyacá",          tarifas: [2596,2093,2588,917,2727,2404,1600,2006,2432,1618,1001,2432] },
    "Florencia":     { depto: "Caquetá",         tarifas: [3382,3107,2496,2552,3510,2484,1350,3214,3620,3553,2121,3382] },
    "Yopal":         { depto: "Casanare",        tarifas: [3043,2251,2824,2852,3643,2347,3065,2773,3258,3409,2824,3258] },
    "Quibdó":        { depto: "Chocó",           tarifas: [2575,2575,2575,2575,2575,2575,2575,2575,2575,2575,2575,2575] },
    "Girardot":      { depto: "Cundinamarca",    tarifas: [2611,1153,1979,2116,2912,2009,603,2141,2501,3300,1440,2501] },
    "Duitama":       { depto: "Boyacá",          tarifas: [2906,1124,1846,2478,2912,2078,2405,2454,3109,3325,2239,3109] },
    "Sogamoso":      { depto: "Boyacá",          tarifas: [2906,1124,2077,2432,2912,2078,2405,2509,3109,3325,2275,3109] },
    "Buga":          { depto: "Valle",           tarifas: [2516,2077,2160,907,2727,2307,1600,2169,2432,1618,1101,2432] },
    "Buenaventura":  { depto: "Valle",           tarifas: [2822,2259,2483,978,2727,2000,2455,2436,2776,1618,1990,2776] },
    "Ipiales":       { depto: "Nariño",          tarifas: [3384,2632,2391,1654,3510,2484,3065,2632,3620,2175,2511,3620] },
    "Rionegro":      { depto: "Antioquia",       tarifas: [1115,1179,1179,1178,1160,1626,806,654,1192,2765,994,1192] },
    "Barrancabermeja":{ depto: "Santander",      tarifas: [2051,2002,777,2785,1974,1133,2875,1915,2233,4704,2783,2233] },
    "San Gil":       { depto: "Santander",       tarifas: [2170,1913,900,2729,2142,1263,2796,2026,2233,4331,2899,2233] },
    "Acacias":       { depto: "Meta",            tarifas: [2861,2079,2331,2621,2727,1934,3007,2481,2786,3165,2467,2786] },
    "La Dorada":     { depto: "Caldas",          tarifas: [2834,2172,2328,2367,2727,2404,968,2290,2878,3240,1836,2878] },
    "Pitalito":      { depto: "Huila",           tarifas: [3237,2347,2986,2680,3510,2484,1351,3215,3464,3440,2208,3464] },
    "Zipaquirá":     { depto: "Cundinamarca",    tarifas: [1785,555,855,1078,1656,1313,642,1066,2544,2121,893,1743] },
    "Fusagasugá":    { depto: "Cundinamarca",    tarifas: [2668,1104,1977,2113,2912,2009,1966,2110,2501,3300,1631,2501] },
    "Espinal":       { depto: "Tolima",          tarifas: [2906,1133,2077,2295,2912,2005,603,2210,3109,3430,1787,3109] }
    // [COPILOT: CONTINÚA con TODAS las ciudades restantes del PDF]
    // El PDF tiene aprox 500 destinos — completa todos
  },

  // Ciudades cuya tarifa = capital de su regional
  homologadas: {
    // BARRANQUILLA
    "Soledad": "Barranquilla", "Galapa": "Barranquilla",
    "Puerto Colombia": "Barranquilla", "Malambo": "Barranquilla",
    // BOGOTÁ
    "Mosquera": "Bogotá", "Funza": "Bogotá", "Madrid": "Bogotá",
    "Tocancipá": "Bogotá", "Cota": "Bogotá", "Facatativá": "Bogotá",
    "Chía": "Bogotá", "Soacha": "Bogotá", "Cajicá": "Bogotá", "Sibaté": "Bogotá",
    // BUCARAMANGA
    "Floridablanca": "Bucaramanga", "Girón": "Bucaramanga", "Piedecuesta": "Bucaramanga",
    // CALI
    "Yumbo": "Cali", "Jamundí": "Cali", "Candelaria": "Cali", "Palmira": "Cali",
    // CARTAGENA
    "Turbaco": "Cartagena",
    // CÚCUTA
    "Villa Del Rosario": "Cúcuta", "Los Patios": "Cúcuta",
    // MEDELLÍN
    "Itagüí": "Medellín", "Envigado": "Medellín", "Bello": "Medellín",
    "Sabaneta": "Medellín", "La Estrella": "Medellín", "Caldas": "Medellín",
    "Copacabana": "Medellín", "Girardota": "Medellín",
    // MONTERÍA
    "Cereté": "Montería",
    // PEREIRA
    "Dosquebradas": "Pereira", "Santa Rosa De Cabal": "Pereira", "Cartago": "Pereira",
    // SANTA MARTA
    "Ciénaga": "Santa Marta",
    // SINCELEJO
    "Corozal": "Sincelejo", "Morroa": "Sincelejo", "Sampués": "Sincelejo",
    // ARMENIA
    "La Tebaida": "Armenia"
  },

  // Tarifas mínimas por unidad (antes del markup 10%)
  minimos: {
    nacional:      32280,
    regional:      29400,
    urbano:        22500,
    mensajeria3kg: 13500
  }
};
```

**INSTRUCCIÓN CRÍTICA:** Lee el PDF `tarifas_2024.pdf` y completa el objeto `destinos` con TODAS las ciudades que aparecen en la tabla. No es opcional — el cotizador necesita cubrir todo Colombia.

---

### Tarea 3.2 — Crear cotizador-motor.js

Crea `rnt_project/assets/js/cotizador-motor.js` con el motor completo:

```javascript
// =============================================
// COTIZADOR RNT — Motor de Cálculo
// Lógica validada con Fabián (RNT) en ago 2025
// =============================================
(function () {
  'use strict';

  window.RNT_Cotizador = {

    // ── FUNCIÓN PRINCIPAL ──────────────────────────────────
    calcular: function (p) {
      const T = window.RNT_TARIFARIO;
      if (!T) return { error: 'Tarifario no disponible. Recarga la página.' };

      // Validar campos
      if (!p.unidades || p.unidades < 1)   return { error: 'Ingresa el número de unidades.' };
      if (!p.peso || p.peso <= 0)           return { error: 'Ingresa el peso por unidad.' };
      if (!p.largo || p.largo <= 0)         return { error: 'Ingresa el largo en cm.' };
      if (!p.ancho || p.ancho <= 0)         return { error: 'Ingresa el ancho en cm.' };
      if (!p.alto || p.alto <= 0)           return { error: 'Ingresa el alto en cm.' };
      if (!p.valor || p.valor <= 0)         return { error: 'Ingresa el valor de la mercancía.' };
      if (!p.origenId)                      return { error: 'Selecciona la ciudad de origen.' };
      if (!p.destino || !p.destino.trim())  return { error: 'Ingresa la ciudad de destino.' };

      // Resolver destino (homologadas → capital)
      const nombreDestino = p.destino.trim();
      const destinoReal   = T.homologadas[nombreDestino] || nombreDestino;
      const destinoData   = T.destinos[destinoReal];
      if (!destinoData) {
        return {
          error: `Ciudad "${nombreDestino}" no encontrada. Verifica el nombre o consulta por WhatsApp.`
        };
      }

      // Resolver origen
      const origenObj = T.origenes.find(o => o.id === p.origenId);
      if (!origenObj) return { error: 'Origen no válido.' };
      const tarifaKg = destinoData.tarifas[origenObj.col];
      if (!tarifaKg || tarifaKg === 0) {
        return { error: 'Ruta sin tarifa disponible. Consulta por WhatsApp.' };
      }

      // Cálculos
      const pesoVol    = (p.largo * p.ancho * p.alto) / 2500;
      const pesoUnd    = Math.max(p.peso, pesoVol, 30);
      const pesoTotal  = pesoUnd * p.unidades;
      const fleteBase  = pesoTotal * tarifaKg;
      const fleteMarkup = fleteBase * 1.10;
      const fleteMin   = T.minimos.nacional * p.unidades;
      const fleteFinal = Math.max(fleteMarkup, fleteMin);
      const seguro     = Math.max(p.valor * 0.01, 5500);
      const total      = fleteFinal + seguro;

      const nota = pesoVol > p.peso
        ? `Peso volumétrico (${pesoVol.toFixed(1)} kg) mayor al real — se cobra por volumen`
        : pesoUnd === 30 && p.peso < 30
          ? `Peso real (${p.peso} kg) menor a 30 kg — se aplica mínimo de 30 kg por unidad`
          : `Se cobra por peso real (${p.peso} kg/und)`;

      return {
        ok: true,
        // Entrada
        unidades: p.unidades,
        pesoReal: p.peso,
        pesoVol: +pesoVol.toFixed(2),
        pesoUnd: +pesoUnd.toFixed(2),
        pesoTotal: +pesoTotal.toFixed(2),
        // Ruta
        origenLabel: origenObj.label,
        destinoInput: nombreDestino,
        destinoReal,
        depto: destinoData.depto,
        // Cálculo
        tarifaKg,
        fleteBase: Math.round(fleteBase),
        fleteMarkup: Math.round(fleteMarkup),
        fleteMin,
        fleteFinal: Math.round(fleteFinal),
        seguro: Math.round(seguro),
        total: Math.round(total),
        nota
      };
    },

    // ── FORMATEO COP ──────────────────────────────────────
    fmt: function (n) {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0
      }).format(n);
    },

    // ── INIT FORMULARIO ──────────────────────────────────
    init: function () {
      const T = window.RNT_TARIFARIO;
      if (!T || !document.getElementById('rntForm')) return;

      // Llenar select de orígenes
      const selOrigen = document.getElementById('rntOrigen');
      if (selOrigen) {
        T.origenes.forEach(o => {
          const opt = document.createElement('option');
          opt.value = o.id;
          opt.textContent = o.label;
          selOrigen.appendChild(opt);
        });
      }

      // Llenar datalist de destinos (ciudades + homologadas)
      const dl = document.getElementById('rntDestinosList');
      if (dl) {
        const ciudades = [
          ...Object.keys(T.destinos),
          ...Object.keys(T.homologadas)
        ].sort();
        ciudades.forEach(c => {
          const opt = document.createElement('option');
          opt.value = c;
          dl.appendChild(opt);
        });
      }

      // Submit
      document.getElementById('rntForm').addEventListener('submit', e => {
        e.preventDefault();
        RNT_Cotizador.ejecutar();
      });

      // Feedback en tiempo real
      ['rntUnidades','rntPeso','rntLargo','rntAncho','rntAlto'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', RNT_Cotizador.actualizarInfo);
      });
    },

    // ── FEEDBACK TIEMPO REAL ─────────────────────────────
    actualizarInfo: function () {
      const get = id => parseFloat(document.getElementById(id)?.value) || 0;
      const unds = get('rntUnidades') || 1;
      const p    = get('rntPeso');
      const l    = get('rntLargo');
      const a    = get('rntAncho');
      const h    = get('rntAlto');
      const info = document.getElementById('rntPesoInfo');
      if (!info) return;
      if (p > 0 && l > 0 && a > 0 && h > 0) {
        const vol  = (l * a * h) / 2500;
        const fact = Math.max(p, vol, 30);
        const tag  = vol > p ? '⚠️ Se cobra por volumen' : fact === 30 && p < 30 ? '⚠️ Mínimo 30 kg' : '✅ Peso real';
        info.innerHTML = `
          <small class="text-muted d-block mt-1">
            Vol: <strong>${vol.toFixed(1)} kg</strong> |
            Real: <strong>${p} kg</strong> |
            <span class="text-primary fw-bold">Facturable/und: ${fact.toFixed(1)} kg</span>
            &nbsp;${tag}
          </small>`;
      } else {
        info.innerHTML = '';
      }
    },

    // ── EJECUTAR COTIZACIÓN ──────────────────────────────
    ejecutar: function () {
      const get = id => parseFloat(document.getElementById(id)?.value) || 0;
      const params = {
        unidades: get('rntUnidades') || 1,
        peso:     get('rntPeso'),
        largo:    get('rntLargo'),
        ancho:    get('rntAncho'),
        alto:     get('rntAlto'),
        valor:    get('rntValor'),
        origenId: document.getElementById('rntOrigen')?.value,
        destino:  document.getElementById('rntDestino')?.value
      };
      const res = RNT_Cotizador.calcular(params);
      RNT_Cotizador.mostrar(res);
    },

    // ── MOSTRAR RESULTADO ────────────────────────────────
    mostrar: function (res) {
      const el = document.getElementById('rntResultado');
      if (!el) return;
      if (!res.ok) {
        el.innerHTML = `
          <div class="alert alert-warning d-flex align-items-center gap-2 mt-3">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <span>${res.error}</span>
          </div>`;
        el.style.display = 'block';
        return;
      }
      const f = RNT_Cotizador.fmt;
      const waMsg = encodeURIComponent(
        `Hola, quiero confirmar una cotización:\n` +
        `• Origen: ${res.origenLabel}\n• Destino: ${res.destinoInput}\n` +
        `• ${res.unidades} unidad(es) de ${res.pesoUnd} kg facturable\n` +
        `• Total estimado: ${f(res.total)}`
      );
      el.innerHTML = `
        <div class="card border-primary mt-4 shadow-sm">
          <div class="card-header bg-primary text-white d-flex align-items-center gap-2">
            <i class="bi bi-calculator-fill fs-5"></i>
            <strong>Cotización Estimada</strong>
          </div>
          <div class="card-body">
            <p class="fs-6 mb-3">
              <i class="bi bi-geo-alt-fill text-primary"></i>
              <strong>${res.origenLabel}</strong>
              &rarr;
              <strong>${res.destinoInput}</strong>
              <span class="badge bg-secondary ms-2">${res.depto}</span>
            </p>
            <table class="table table-sm mb-0">
              <tbody>
                <tr>
                  <td class="text-muted">Peso facturable</td>
                  <td class="text-end fw-semibold">${res.pesoTotal} kg (${res.unidades} und × ${res.pesoUnd} kg)</td>
                </tr>
                <tr>
                  <td class="text-muted">Tarifa por kg</td>
                  <td class="text-end fw-semibold">${f(res.tarifaKg)}</td>
                </tr>
                <tr>
                  <td class="text-muted">Flete (con margen)</td>
                  <td class="text-end fw-semibold">${f(res.fleteFinal)}</td>
                </tr>
                <tr>
                  <td class="text-muted">Seguro / Manejo</td>
                  <td class="text-end fw-semibold">${f(res.seguro)}</td>
                </tr>
                <tr class="table-primary fw-bold fs-5">
                  <td>TOTAL ESTIMADO</td>
                  <td class="text-end">${f(res.total)}</td>
                </tr>
              </tbody>
            </table>
            <p class="text-muted small mt-2 mb-3">
              <i class="bi bi-info-circle"></i> ${res.nota}. Valor orientativo.
              El precio final se confirma en punto de recepción.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <a href="https://wa.me/573124376616?text=${waMsg}"
                 class="btn btn-success"
                 target="_blank" rel="noopener">
                <i class="bi bi-whatsapp me-1"></i> Confirmar por WhatsApp
              </a>
              <a href="contact.html" class="btn btn-outline-primary">
                <i class="bi bi-truck me-1"></i> Solicitar recogida
              </a>
            </div>
          </div>
        </div>`;
      el.style.display = 'block';
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // Auto-init cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', RNT_Cotizador.init);
  } else {
    RNT_Cotizador.init();
  }

})();
```

---

### Tarea 3.3 — Actualizar get-a-quote.html

Reemplaza el bloque del formulario de cotización en `get-a-quote.html` con este HTML. Mantén intactos el `<head>`, nav y footer existentes — solo reemplaza el `<main>`:

```html
<main id="main">

  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Cotiza tu Envío</h1>
            <p class="mb-0">Calcula el costo de tu envío en segundos. Ingresa los datos del paquete y obtén tu cotización inmediata.</p>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><a href="index.html">Inicio</a></li>
          <li class="current">Cotizar</li>
        </ol>
      </div>
    </nav>
  </div><!-- /Page Title -->

  <!-- Cotizador Section -->
  <section id="cotizador" class="section">
    <div class="container" data-aos="fade-up">
      <div class="row g-5">

        <!-- FORMULARIO -->
        <div class="col-lg-8">
          <form id="rntForm" novalidate autocomplete="off">

            <!-- CARD: Datos del Paquete -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-header bg-primary text-white py-3">
                <h5 class="mb-0"><i class="bi bi-box-seam me-2"></i>Datos del Paquete</h5>
                <small class="opacity-75">Se recomienda báscula y flexómetro para datos exactos</small>
              </div>
              <div class="card-body">
                <div class="row g-3">

                  <div class="col-6 col-md-2">
                    <label for="rntUnidades" class="form-label fw-semibold">Unidades</label>
                    <div class="input-group input-group-sm">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntUnidades');el.value=Math.max(1,+el.value-1);el.dispatchEvent(new Event('input'))">−</button>
                      <input type="number" class="form-control text-center" id="rntUnidades" value="1" min="1">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntUnidades');el.value=+el.value+1;el.dispatchEvent(new Event('input'))">+</button>
                    </div>
                  </div>

                  <div class="col-6 col-md-2">
                    <label for="rntPeso" class="form-label fw-semibold">Peso/und (kg)</label>
                    <div class="input-group input-group-sm">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntPeso');el.value=Math.max(0,+el.value-1);el.dispatchEvent(new Event('input'))">−</button>
                      <input type="number" class="form-control text-center" id="rntPeso" placeholder="0" min="0.1" step="0.1">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntPeso');el.value=+el.value+1;el.dispatchEvent(new Event('input'))">+</button>
                    </div>
                  </div>

                  <div class="col-4 col-md-2">
                    <label for="rntLargo" class="form-label fw-semibold">Largo (cm)</label>
                    <div class="input-group input-group-sm">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntLargo');el.value=Math.max(0,+el.value-1);el.dispatchEvent(new Event('input'))">−</button>
                      <input type="number" class="form-control text-center" id="rntLargo" placeholder="0" min="1">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntLargo');el.value=+el.value+1;el.dispatchEvent(new Event('input'))">+</button>
                    </div>
                  </div>

                  <div class="col-4 col-md-2">
                    <label for="rntAncho" class="form-label fw-semibold">Ancho (cm)</label>
                    <div class="input-group input-group-sm">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntAncho');el.value=Math.max(0,+el.value-1);el.dispatchEvent(new Event('input'))">−</button>
                      <input type="number" class="form-control text-center" id="rntAncho" placeholder="0" min="1">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntAncho');el.value=+el.value+1;el.dispatchEvent(new Event('input'))">+</button>
                    </div>
                  </div>

                  <div class="col-4 col-md-2">
                    <label for="rntAlto" class="form-label fw-semibold">Alto (cm)</label>
                    <div class="input-group input-group-sm">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntAlto');el.value=Math.max(0,+el.value-1);el.dispatchEvent(new Event('input'))">−</button>
                      <input type="number" class="form-control text-center" id="rntAlto" placeholder="0" min="1">
                      <button type="button" class="btn btn-outline-secondary"
                        onclick="let el=document.getElementById('rntAlto');el.value=+el.value+1;el.dispatchEvent(new Event('input'))">+</button>
                    </div>
                  </div>

                  <div class="col-12 col-md-2">
                    <label for="rntValor" class="form-label fw-semibold">Valor mercancía</label>
                    <div class="input-group input-group-sm">
                      <span class="input-group-text">$</span>
                      <input type="number" class="form-control" id="rntValor" placeholder="0" min="0">
                    </div>
                  </div>

                </div>
                <!-- Feedback tiempo real -->
                <div id="rntPesoInfo"></div>
              </div>
            </div>

            <!-- CARD: Despacho -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-header bg-primary text-white py-3">
                <h5 class="mb-0"><i class="bi bi-truck me-2"></i>Despacho</h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="rntOrigen" class="form-label fw-semibold">Ciudad Origen</label>
                    <select class="form-select" id="rntOrigen">
                      <option value="">Seleccione ciudad origen...</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="rntDestino" class="form-label fw-semibold">Ciudad Destino</label>
                    <input type="text" class="form-control" id="rntDestino"
                      list="rntDestinosList"
                      placeholder="Escriba la ciudad destino..."
                      autocomplete="off">
                    <datalist id="rntDestinosList"></datalist>
                    <small class="text-muted">Escriba las primeras letras para filtrar</small>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg w-100 py-3">
              <i class="bi bi-calculator me-2"></i>Calcular Envío
            </button>

          </form>

          <!-- Resultado -->
          <div id="rntResultado" style="display:none;"></div>
        </div>

        <!-- SIDEBAR -->
        <div class="col-lg-4">
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
              <h5 class="text-primary mb-3"><i class="bi bi-info-circle me-2"></i>¿Cómo funciona?</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3 d-flex gap-2">
                  <span class="text-primary fs-5">📦</span>
                  <div><strong>Paqueteo (0 – 30 kg)</strong><br><small class="text-muted">Mínimo 30 kg por unidad</small></div>
                </li>
                <li class="mb-3 d-flex gap-2">
                  <span class="text-primary fs-5">📏</span>
                  <div><strong>Peso volumétrico</strong><br><small class="text-muted">Largo × Ancho × Alto ÷ 2500</small></div>
                </li>
                <li class="mb-3 d-flex gap-2">
                  <span class="text-primary fs-5">⚖️</span>
                  <div><strong>Se cobra el mayor</strong><br><small class="text-muted">Entre peso real y volumétrico</small></div>
                </li>
                <li class="d-flex gap-2">
                  <span class="text-primary fs-5">🛡️</span>
                  <div><strong>Seguro incluido</strong><br><small class="text-muted">1% del valor declarado (mín. $5.500)</small></div>
                </li>
              </ul>
            </div>
          </div>

          <div class="card border-0 shadow-sm bg-light">
            <div class="card-body text-center py-4">
              <i class="bi bi-headset text-primary fs-1 mb-2 d-block"></i>
              <h6 class="fw-bold mb-1">¿Necesitas ayuda?</h6>
              <p class="text-muted small mb-3">Nuestro equipo está listo para atenderte</p>
              <a href="https://wa.me/573124376616" class="btn btn-success w-100 mb-2" target="_blank">
                <i class="bi bi-whatsapp me-1"></i> WhatsApp: 312 437 6616
              </a>
              <a href="tel:+576012726117" class="btn btn-outline-primary w-100">
                <i class="bi bi-telephone me-1"></i> PBX: (601) 272 6117
              </a>
            </div>
          </div>

          <div class="card border-0 shadow-sm mt-4">
            <div class="card-body">
              <h6 class="fw-bold mb-2">Tarifas mínimas</h6>
              <table class="table table-sm mb-0">
                <tr><td class="text-muted">Nacional</td><td class="text-end fw-semibold">$32.280</td></tr>
                <tr><td class="text-muted">Regional</td><td class="text-end fw-semibold">$29.400</td></tr>
                <tr><td class="text-muted">Urbano Bogotá</td><td class="text-end fw-semibold">$22.500</td></tr>
                <tr><td class="text-muted">Mensajería hasta 3 kg</td><td class="text-end fw-semibold">$13.500</td></tr>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</main>
```

### Tarea 3.4 — Agregar scripts en get-a-quote.html

Justo ANTES del cierre `</body>` en `get-a-quote.html`, después del botón de WhatsApp, agrega:

```html
<script src="assets/js/tarifario-rnt.js"></script>
<script src="assets/js/cotizador-motor.js"></script>
```

### Tarea 3.5 — CSS adicional para cotizador en main.css

Agrega al final de `assets/css/main.css`:

```css
/* =============================
   COTIZADOR RNT — CP3
   ============================= */
#rntResultado .card {
  animation: fadeInUp 0.35s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

#rntForm .input-group .btn {
  min-width: 32px;
  padding: 0 8px;
}

.card-header.bg-primary small {
  font-size: 0.78rem;
}

@media (max-width: 576px) {
  #rntForm .col-4.col-md-2 {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
}
```

### Tarea 3.6 — Casos de prueba obligatorios

Antes de marcar el CP3 como terminado, prueba estos dos casos en el navegador:

```
CASO 1:
  Unidades: 1 | Peso: 30 kg | Largo: 50 cm | Ancho: 30 cm | Alto: 30 cm
  Valor mercancía: $800.000
  Origen: Bogotá | Destino: Medellín
  RESULTADO ESPERADO:
    Peso volumétrico: 18 kg → se aplica mínimo 30 kg
    Tarifa Bogotá→Medellín: $1.205/kg
    Flete: 30 × 1205 × 1.10 = $39.765
    Seguro: $8.000
    TOTAL ≈ $47.765

CASO 2:
  Unidades: 1 | Peso: 60 kg | Largo: 120 cm | Ancho: 70 cm | Alto: 80 cm
  Valor mercancía: $800.000
  Origen: Bogotá | Destino: Bello
  RESULTADO ESPERADO:
    Peso volumétrico: (120×70×80)/2500 = 268.8 kg → mayor que 60 kg real
    Bello es homologado → usa tarifa de Medellín: $1.205/kg
    Flete: 268.8 × 1205 × 1.10 = $356.294
    Seguro: $8.000
    TOTAL ≈ $364.294
```

### Tarea 3.7 — OUTPUT del CP3

Copia a `c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\3_CP3\`:
- `get-a-quote.html` (modificado)
- `assets/js/tarifario-rnt.js` (nuevo)
- `assets/js/cotizador-motor.js` (nuevo)
- `assets/css/main.css` (actualizado)

### Criterio de aceptación CP3
- [ ] Los 2 casos de prueba dan valores correctos
- [ ] El indicador de peso facturable aparece en tiempo real mientras escribes
- [ ] El select de origen tiene las 12 regionales
- [ ] El datalist de destino tiene todas las ciudades del PDF
- [ ] El botón "Confirmar por WhatsApp" abre WhatsApp con los datos de la cotización
- [ ] Sin errores en la consola del navegador

---

## ✅ CHECKPOINT 4 — RASTREO PUENTE
**Output:** `c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\4_CP4\`
**Tiempo estimado:** 30-45 minutos

### Objetivo
Que los clientes finales puedan consultar el estado de sus envíos desde la nueva web, conectando al sistema actual de Fabián.

### Tarea 4.1 — Crear rastreo-rnt.js

Crea `rnt_project/assets/js/rastreo-rnt.js`:

```javascript
// =============================================
// RASTREO RNT — Puente al sistema actual
// Sistema actual: mail.rednacionaldetransportes.com
// =============================================
(function () {
  'use strict';

  window.RNT_Rastreo = {

    BASE_URL: 'https://mail.rednacionaldetransportes.com/rastreo/lista_rastreo.php',

    buscar: function () {
      const input = document.getElementById('rntGuia');
      const guia  = (input?.value || '').trim().replace(/\D/g, '');

      if (!guia) {
        RNT_Rastreo.mostrarMensaje('warning', 'Ingresa el número de guía para continuar.');
        return;
      }

      const url = `${this.BASE_URL}?guia=${guia}`;

      // Mostrar loading
      RNT_Rastreo.mostrarMensaje('loading', 'Consultando estado del envío...');

      // Abrir en nueva pestaña (sistema externo)
      const ventana = window.open(url, '_blank', 'noopener,noreferrer');

      setTimeout(() => {
        if (!ventana || ventana.closed) {
          // El popup fue bloqueado — mostrar link directo
          RNT_Rastreo.mostrarMensaje('link', guia, url);
        } else {
          RNT_Rastreo.mostrarMensaje('success', guia, url);
        }
      }, 800);
    },

    mostrarMensaje: function (tipo, guia, url) {
      const el = document.getElementById('rntRastreoMensaje');
      if (!el) return;

      if (tipo === 'loading') {
        el.innerHTML = `
          <div class="d-flex align-items-center gap-2 text-muted py-2">
            <div class="spinner-border spinner-border-sm text-primary"></div>
            <span>${guia}</span>
          </div>`;
      } else if (tipo === 'warning') {
        el.innerHTML = `
          <div class="alert alert-warning d-flex gap-2 mb-0">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <span>${guia}</span>
          </div>`;
      } else if (tipo === 'success') {
        el.innerHTML = `
          <div class="alert alert-success mb-0">
            <i class="bi bi-check-circle-fill me-2"></i>
            Se abrió el estado de la guía <strong>${guia}</strong> en una nueva ventana.
            <br><small>¿No se abrió? <a href="${url}" target="_blank" rel="noopener">Haz clic aquí</a></small>
          </div>`;
      } else if (tipo === 'link') {
        el.innerHTML = `
          <div class="alert alert-info mb-0">
            <i class="bi bi-box-arrow-up-right me-2"></i>
            <a href="${url}" target="_blank" rel="noopener" class="fw-bold">
              Ver estado de la guía ${guia}
            </a>
            <br><small class="text-muted">Se abrirá en una nueva pestaña</small>
          </div>`;
      }
      el.style.display = 'block';
    }
  };

  // Activar al cargar el DOM
  document.addEventListener('DOMContentLoaded', function () {
    // Enter key en el input de guía
    const input = document.getElementById('rntGuia');
    if (input) {
      input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); RNT_Rastreo.buscar(); }
      });
      // Solo números
      input.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
      });
    }
    // Botón de búsqueda
    const btn = document.getElementById('rntRastreoBtn');
    if (btn) btn.addEventListener('click', RNT_Rastreo.buscar);
  });

})();
```

### Tarea 4.2 — Sección de rastreo en index.html

En `index.html`, después de la sección hero (o donde mejor encaje según el diseño actual), agrega esta sección:

```html
<!-- ======= Rastreo Section ======= -->
<section id="rastreo" class="rastreo-section section bg-light">
  <div class="container" data-aos="fade-up">
    <div class="row justify-content-center">
      <div class="col-lg-7 text-center mb-4">
        <h2 class="section-title">Rastrea tu Envío</h2>
        <p class="text-muted">Ingresa tu número de guía y conoce el estado de tu mercancía en tiempo real.</p>
      </div>
      <div class="col-lg-7">
        <div class="card border-0 shadow">
          <div class="card-body p-4">
            <div class="input-group input-group-lg mb-2">
              <span class="input-group-text bg-primary text-white border-primary">
                <i class="bi bi-search"></i>
              </span>
              <input type="text"
                     class="form-control form-control-lg"
                     id="rntGuia"
                     placeholder="Ej: 1002552"
                     inputmode="numeric"
                     maxlength="20">
              <button class="btn btn-primary px-4"
                      type="button"
                      id="rntRastreoBtn">
                Rastrear
              </button>
            </div>
            <div id="rntRastreoMensaje" style="display:none;"></div>
            <div class="text-center mt-3">
              <small class="text-muted">
                <i class="bi bi-whatsapp text-success"></i>
                ¿No tienes tu número de guía?
                <a href="https://wa.me/573124376616?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20mi%20env%C3%ADo"
                   target="_blank" rel="noopener" class="text-success fw-semibold">
                  Escríbenos al 312 437 6616
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline de estados -->
    <div class="row justify-content-center mt-5">
      <div class="col-lg-10">
        <h5 class="text-center text-muted mb-4">Estados del envío</h5>
        <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 text-center">
          <div class="flex-fill">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                 style="width:50px;height:50px;font-size:1.3rem;">
              <i class="bi bi-file-earmark-check"></i>
            </div>
            <small class="fw-semibold d-block">Guía Creada</small>
            <small class="text-muted">Sistema registra el envío</small>
          </div>
          <div class="flex-fill d-none d-md-block align-self-start pt-3 text-muted">→</div>
          <div class="flex-fill">
            <div class="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                 style="width:50px;height:50px;font-size:1.3rem;">
              <i class="bi bi-clipboard2-check"></i>
            </div>
            <small class="fw-semibold d-block">En Planilla</small>
            <small class="text-muted">Asignado al despacho</small>
          </div>
          <div class="flex-fill d-none d-md-block align-self-start pt-3 text-muted">→</div>
          <div class="flex-fill">
            <div class="bg-info text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                 style="width:50px;height:50px;font-size:1.3rem;">
              <i class="bi bi-truck"></i>
            </div>
            <small class="fw-semibold d-block">En Tránsito</small>
            <small class="text-muted">En camino al destino</small>
          </div>
          <div class="flex-fill d-none d-md-block align-self-start pt-3 text-muted">→</div>
          <div class="flex-fill">
            <div class="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                 style="width:50px;height:50px;font-size:1.3rem;">
              <i class="bi bi-building"></i>
            </div>
            <small class="fw-semibold d-block">En Bodega</small>
            <small class="text-muted">Llegó a la regional</small>
          </div>
          <div class="flex-fill d-none d-md-block align-self-start pt-3 text-muted">→</div>
          <div class="flex-fill">
            <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
                 style="width:50px;height:50px;font-size:1.3rem;">
              <i class="bi bi-check2-circle"></i>
            </div>
            <small class="fw-semibold d-block">Entregado</small>
            <small class="text-muted">Envío completado</small>
          </div>
        </div>
      </div>
    </div>

  </div>
</section><!-- /Rastreo Section -->
```

### Tarea 4.3 — Agregar script en index.html

Justo ANTES del cierre `</body>` en `index.html` (después del botón de WhatsApp), agrega:

```html
<script src="assets/js/rastreo-rnt.js"></script>
```

### Tarea 4.4 — Actualizar link de rastreo en navegación

En TODOS los HTML, en el link de navegación "Cotizar" o "Get a Quote" o cualquiera que apunte al formulario de rastreo, asegúrate que quede:
- "Cotizar" → `get-a-quote.html`
- "Rastrear" o "Rastreo" → `index.html#rastreo`

### Tarea 4.5 — OUTPUT del CP4

Copia a `c:\Users\PC-AORUS\Desktop\_ACSx\c3_rnt\4_CP4\`:
- `index.html` (con nueva sección rastreo)
- `assets/js/rastreo-rnt.js` (nuevo)

### Criterio de aceptación CP4
- [ ] El campo de rastreo acepta solo números
- [ ] Al ingresar `1002552` y hacer clic en "Rastrear" se abre el estado real del envío
- [ ] Se muestra confirmación en pantalla con link directo
- [ ] El timeline de estados se ve bien en móvil y desktop
- [ ] Botón WhatsApp alternativo funciona

---

## 🏁 AL FINALIZAR LOS 3 CHECKPOINTS

Cuando hayas completado CP2, CP3 y CP4:

1. **Verifica** que los 3 checkpoints pasaron sus criterios de aceptación
2. **Copia** los archivos a sus carpetas de output (2_CP2, 3_CP3, 4_CP4)
3. **Haz git push** al repositorio para que Netlify despliegue automáticamente
4. **Reporta** a Hernando con:
   - Lista de archivos modificados
   - Lista de archivos creados
   - Resultado de los casos de prueba del cotizador
   - Cualquier problema encontrado o decisión que tuviste que tomar

---

## ⚠️ REGLAS DE ORO (NO NEGOCIABLES)

1. **NUNCA** elimines secciones del HTML existente — solo agrega o modifica
2. **NUNCA** cambies la estructura de carpetas de `assets/vendor/`
3. **NUNCA** uses frameworks JS externos (no CDN de React, Vue, Angular, etc.)
4. **SIEMPRE** prueba en el navegador antes de reportar como terminado
5. Si tienes una duda sobre diseño o lógica, **revisa primero** los archivos de contexto antes de decidir por tu cuenta
6. Si encuentras un error o inconsistencia en el diseño existente, **nótalo** en tu reporte pero no lo corrijas a menos que esté en el scope del checkpoint

---

## 📞 CONTEXTO DE NEGOCIO — POR SI NECESITAS TOMAR UNA DECISIÓN

- **¿Qué tipo de empresa es?** Transportadora colombiana B2B/B2C — envíos nacionales de carga
- **¿A quiénes les habla?** Empresas y personas naturales que necesitan enviar mercancía
- **¿Cuál es el tono?** Profesional, confiable, ágil — "tu mejor opción en transporte"
- **¿Colores corporativos?** Azul oscuro (#0d42ff aprox) + Amarillo/dorado como acento
- **¿La competencia?** TCC, Coordinadora, Servientrega, Envía — RNT compite en precio y servicio personalizado

---

*Generado por: Claude Sonnet 4.6 | Arquitecto del proyecto*
*Para uso exclusivo de: GitHub Copilot (Sonnet 4.5) en el proyecto c3_rnt*
*Fecha: 25 Feb 2026*
