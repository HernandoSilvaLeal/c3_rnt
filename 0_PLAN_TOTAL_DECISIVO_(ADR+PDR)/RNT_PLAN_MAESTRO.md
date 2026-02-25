# 📋 PLAN MAESTRO — PROYECTO RNT
## Red Nacional de Transportes · Web Modernización 2026
### Arquitecto: Claude Sonnet 4.6 | Dev: Copilot Sonnet 4.5 | Orquestador: Hernando Silva (AppCors)

---

## 🗺️ VISIÓN GENERAL

**¿Qué es este proyecto?**
Modernizar completamente la presencia web de Red Nacional de Transportes (RNT), reemplazando una web de 15 años por un sitio moderno en HTML5/Bootstrap5, con cotizador funcional, rastreo de guías y presencia digital profesional. Todo desplegado en Netlify con CI/CD automático.

**¿Qué tiene el cliente hoy?**
- Web vieja (Dreamweaver ~2010): funcional pero obsoleta visualmente
- Cotizador en Gelotra (software externo): funciona pero está aislado
- Rastreo manual: una operaria actualiza estados consultando en transportadoras terceras
- Software Gelotra: licenciado hasta agosto 2026, gestiona guías y trazabilidad

**¿Qué entregamos nosotros?**
- Sitio web moderno multipágina, responsive, con imagen corporativa real
- Cotizador propio con tarifario real 2024-2025
- Rastreo conectado al sistema actual (puente inteligente)
- Presencia en WhatsApp, redes y contacto profesional
- Base técnica para integración futura de APIs (Gelotra / Exxe Logística)

---

## 📊 ESTADO DE COMPLETITUD ACTUAL

| Componente | Estado | % |
|---|---|---|
| Estructura HTML multipágina | COMPLETO | 100% |
| Diseño visual / plantilla Logis | COMPLETO | 100% |
| Responsive / Bootstrap 5 | COMPLETO | 100% |
| Contenido corporativo real integrado | PARCIAL | 40% |
| Botón WhatsApp flotante | PENDIENTE | 0% |
| Motor cotizador JS | PENDIENTE | 0% |
| Tarifario JSON real 2024 | PENDIENTE | 0% |
| Rastreo funcional | PENDIENTE | 0% |
| SEO / metatags reales | PARCIAL | 30% |
| Imágenes corporativas propias | PARCIAL | 40% |
| **TOTAL MVP** | | **~35%** |

---

## 🎯 CHECKPOINTS — PLAN DE TRABAJO COMPLETO

---

### CHECKPOINT 0 — BASE TÉCNICA
**Estado: COMPLETADO**

- [x] Repositorio GitHub conectado a Netlify
- [x] CI/CD activo: push → deploy automático
- [x] Plantilla Logis instalada y adaptada
- [x] 8 páginas HTML estructuradas
- [x] Bootstrap 5.3.3 + vendors (AOS, Swiper, GLightbox)
- [x] Dominio temporal: rednacionaldetransporte.netlify.app

**Criterio de salida:** El sitio se ve en Netlify y cada push actualiza producción ✅

---

### CHECKPOINT 1 — IDENTIDAD CORPORATIVA Y CONTENIDO REAL
**Estado: PENDIENTE**
**Tiempo estimado: 2-3 horas**
**Prioridad: ALTA — Es lo primero que ve Fabián**

**Objetivo:** Que la web "hable" como Red Nacional de Transportes, no como plantilla genérica. Eliminar 100% de textos en inglés y textos de plantilla.

**Tareas:**

1.1 Hero (index.html)
- Título: "Solución Integral en Transportes"
- Subtítulo: "Transporte de Carga Nacional e Internacional — Más de 15 años llevando tu mercancía a todo Colombia"
- CTAs: "Cotizar ahora" → get-a-quote.html | "Rastrear guía" → #rastreo

1.2 Sección Nosotros (about.html + sección index)
- Texto real: empresa con más de 15 años, cobertura nacional, 12 regionales
- NIT 901.040.715-7
- Stats animados: ciudades cubiertas, años de experiencia, clientes

1.3 Servicios (services.html + cards en index)
Los 5 servicios reales de RNT:
- Encomiendas y mensajería nacional (distribución puerta a puerta)
- Carga aérea (nacional e internacional, Miami Express)
- Importaciones y exportaciones (nacionalización, ingreso a puerto)
- Almacenamiento y bodegaje
- Servicios adicionales (rastreo, facturación, cumplidos en línea)

1.4 Contacto (contact.html) — Datos 100% reales:
- PBX: (601) 272 6117
- Recogidas: (57) 312 437 6616 / (601) 269 55 85
- Email: servicioalcliente@rednacionaldetransportes.com
- Sede Principal: Calle 14 Sur No. 18A-30, Barrio Restrepo, Bogotá
- Sede Carvajal: Carrera 69B No. 24-42 Sur, Bogotá
- Mapa embed de Google Maps ambas sedes

1.5 Condiciones de Transporte (nueva página o sección)
Migrar contenido legal de la web vieja:
- Responsabilidad
- Cumplimiento del contrato
- Mercancías no transportadas
- Empaque y embalaje
- Deberes del remitente
- Indemnizaciones

1.6 Cobertura (sección en index)
- "Cubrimos todo el territorio nacional"
- Ciudades principales con imagen del mapa de Colombia

1.7 Footer con datos reales
- Datos de contacto, links, Copyright 2026 Red Nacional de Transportes S.A.S., NIT 901.040.715-7

1.8 Limpieza general
- Eliminar toda imagen de stock genérica → reemplazar con logística/transporte
- Eliminar textos en inglés
- Eliminar menciones a la plantilla

**Criterio de aceptación del CP1:**
- Ningún texto en inglés visible
- Todos los datos de contacto son reales y correctos
- Sección servicios refleja exactamente lo que hace RNT
- Un visitante nuevo entiende qué hace RNT, dónde está y cómo contactar

---

### CHECKPOINT 2 — WHATSAPP Y CONVERSIÓN
**Estado: PENDIENTE**
**Tiempo estimado: 30 minutos**
**Prioridad: ALTA — Impacto inmediato, muy fácil**

**Objetivo:** Que cualquier visitante pueda contactar a RNT en 1 clic desde cualquier página.

**Tareas:**

2.1 Botón flotante WhatsApp
- Todas las páginas — esquina inferior derecha
- Círculo verde #25D366, 60px diámetro
- Número: +573124376616
- Mensaje pre-cargado: "Hola, me interesa información sobre sus servicios de transporte"
- Animación pulse cada 3 segundos
- Responsive (55px en móvil)

2.2 CTAs de WhatsApp inline
- Cotizador: botón "Confirmar por WhatsApp" en resultado
- Rastreo: link alternativo WhatsApp
- contact.html: botón WhatsApp prominente

2.3 Botón llamada en mobile
- href="tel:+5760127266117" visible en móvil

**Criterio de aceptación del CP2:**
- Botón verde visible en todas las páginas
- Al hacer clic abre WhatsApp con mensaje pre-cargado
- Número +573124376616 correcto

---

### CHECKPOINT 3 — COTIZADOR MVP
**Estado: PENDIENTE**
**Tiempo estimado: 3-4 horas**
**Prioridad: CRÍTICA — El requerimiento #1 del cliente**

**Objetivo:** Que un visitante pueda saber cuánto cuesta su envío de cualquier origen a cualquier destino en Colombia con las tarifas reales de RNT.

**Arquitectura:**
```
assets/js/tarifario-rnt.js   → JSON con tarifas (window.RNT_TARIFARIO)
assets/js/cotizador-motor.js → Lógica de cálculo (window.RNT_Cotizador)
get-a-quote.html             → Formulario interactivo
```

**Fórmula exacta validada con Fabián en reunión agosto 2025:**
```
1. peso_vol_und = (largo_cm × ancho_cm × alto_cm) / 2500
2. peso_fact_und = MAX(peso_real, peso_vol, 30 kg mínimo paqueteo)
3. peso_total = peso_fact_und × unidades
4. tarifa_kg = tarifario[destino][origen]
5. flete_base = peso_total × tarifa_kg
6. flete_markup = flete_base × 1.10  (10% margen negociación Fabián)
7. flete_minimo = $32.280 × unidades
8. flete_final = MAX(flete_markup, flete_minimo)
9. seguro = MAX(valor_mercancia × 0.01, $5.500)
10. TOTAL = flete_final + seguro
```

**Tareas:**

3.1 tarifario-rnt.js — extraído del PDF tarifas_2024.pdf:
- 12 origenes regionales
- Aprox 500 ciudades destino con sus 12 tarifas
- Poblaciones homologadas (Bello → Medellín, Soacha → Bogotá, etc.)
- Tarifas mínimas (nacional $32.280, regional $29.400, urbano $22.500)

3.2 cotizador-motor.js — motor con:
- Función calcular(params) con desglose completo
- Indicador en tiempo real del peso facturable
- Inicialización automática del formulario
- mostrarResultado con botón WhatsApp

3.3 get-a-quote.html — formulario con:
- Campos: unidades (+/-), peso/und (+/-), largo+ancho+alto (+/-), valor mercancía
- Origen: select 12 regionales
- Destino: input + datalist con todas las ciudades
- Resultado con desglose: peso facturable, tarifa, flete, seguro, TOTAL
- Botón "Confirmar por WhatsApp" con valores pre-llenados

**Casos de prueba para validación:**
```
Caso 1: Bogotá → Medellín | 1 und | 30kg | 50×30×30cm | $800.000
  Vol: (50×30×30)/2500 = 18kg → mínimo 30kg aplicado
  Flete: 30 × 1205 × 1.10 = $39.765
  Seguro: $8.000 → TOTAL ≈ $47.765

Caso 2: Bogotá → Medellín | 1 und | 60kg | 120×70×80cm | $800.000
  Vol: (120×70×80)/2500 = 268.8kg → mayor que 60kg
  Flete: 268.8 × 1205 × 1.10 = $356.294
  Seguro: $8.000 → TOTAL ≈ $364.294
```

**Pendiente del cliente (NO bloquea MVP):**
- Tabla mensajería 1-5 kg: se agrega en CP5
- Tabla paquetes Premier 5-15 kg: se agrega en CP5

**Criterio de aceptación del CP3:**
- Los dos casos de prueba dan valores correctos
- Funciona en Chrome, Firefox, Safari y móvil
- Sin errores en consola del navegador
- Tarifario cubre todas las ciudades del PDF

---

### CHECKPOINT 4 — RASTREO PUENTE (SIN BACKEND)
**Estado: PENDIENTE**
**Tiempo estimado: 1 hora**
**Prioridad: ALTA — Lo ven los clientes finales**

**Objetivo:** Que los clientes finales puedan consultar el estado de sus envíos desde la nueva web.

**Estrategia:** La nueva web actúa como puente hacia el sistema actual de Fabián. Sin backend nuevo todavía.

**Sistema actual de Fabián:**
- URL: mail.rednacionaldetransportes.com/rastreo/lista_rastreo.php
- Parámetro: ?guia=NUMERO
- Ejemplo funcional: guía 1002552 → muestra 5 estados reales + imagen de guía

**Tareas:**

4.1 Sección rastreo prominente en index.html
- Barra de búsqueda grande (campo numérico + botón "Rastrear")
- Al buscar: abre en nueva pestaña + confirmación con link directo
- Alternativa WhatsApp siempre visible

4.2 rastreo-rnt.js
- Función buscar() con validación numérica
- Apertura nueva pestaña al sistema actual con la guía
- Enter key support
- Mensaje de confirmación en pantalla

4.3 Timeline visual informativo (estados posibles)
- Guía creada → Asignada a planilla → En tránsito → En bodega → Entregado

**Criterio de aceptación del CP4:**
- Número 1002552 → abre estado real del envío
- Funciona en móvil
- Si no tiene número, puede ir a WhatsApp en 1 clic

---

### CHECKPOINT 5 — COTIZADOR COMPLETO (MENSAJERÍA + PAQUETES)
**Estado: PENDIENTE — Bloqueado hasta recibir tabla de Fabián**
**Tiempo estimado: 2 horas**
**Prioridad: MEDIA**

**Bloqueante:** Fabián debe enviar la tabla diferencial de mensajería y paquetes Premier.

**Lógica a implementar:**
```
Peso menor o igual a 5 kg   → Tipo Mensajería → tarifa tabla diferencial
Peso entre 5 y 15 kg        → Tipo Paquetes Premier → tarifa tabla diferencial
Peso mayor a 15 kg          → Tipo Paqueteo → tarifa tabla principal (ya en CP3)
```

**Tareas:**
- Agregar secciones mensajeria y paquetesPremier al tarifario JSON
- Actualizar motor con selector de tipo
- Formulario con detección automática o selector manual
- Actualizar pricing.html con tarifas mínimas reales

**Criterio de aceptación del CP5:**
- Cotizador diferencia correctamente los tres tipos de envío
- pricing.html muestra tarifas reales de RNT

---

### CHECKPOINT 6 — SEO, PERFORMANCE Y PULIDO
**Estado: PENDIENTE**
**Tiempo estimado: 2 horas**
**Prioridad: MEDIA**

**Objetivo:** Web encontrable en Google, que cargue rápido y con botón de traducción.

**Tareas:**

6.1 Metatags únicos por página (title, description, keywords, og:image)

6.2 Schema.org LocalBusiness (nombre, teléfono, dirección, NIT)

6.3 Performance:
- Lazy loading en imágenes
- Lighthouse score meta: mayor o igual a 80 en mobile

6.4 Netlify configuración:
- _redirects: URLs antiguas apuntan a nuevas
- Headers de cache para assets estáticos

6.5 Botón traducción Español / English
- Para mercado casillero Miami y envíos internacionales
- Data attributes en HTML, toggle JS sin librerías

**Criterio de aceptación del CP6:**
- Lighthouse Performance mayor o igual a 80, Accessibility mayor o igual a 85 en móvil
- Todas las páginas con title y description únicos
- Botón EN/ES funcional

---

### CHECKPOINT 7 — DOMINIO PROPIO Y CIERRE FASE COMERCIAL
**Estado: PENDIENTE — Bloqueado por acceso DNS de Fabián**
**Tiempo estimado: 30 min técnicos**
**Prioridad: ALTA para cierre comercial**

**Bloqueante:** Acceso al panel DNS del dominio de Fabián.

**Tareas:**
- Configurar custom domain en Netlify
- Actualizar registros DNS (A record + CNAME)
- SSL automático (Let's Encrypt vía Netlify)
- Redirecciones de URLs antiguas (servicios.html → services.html etc.)

**COBRO DEL SEGUNDO PAGO: $1.500.000 al completar CP1-CP7**

**Criterio de aceptación del CP7:**
- rednacionaldetransportes.com apunta a la nueva web con HTTPS
- URLs antiguas redirigen correctamente
- Segundo pago confirmado

---

### CHECKPOINT 8 — PANEL ADMIN DE RASTREO (FASE 3)
**Estado: FUTURO — Post cobro segundo pago**
**Tiempo estimado: 5-8 horas**
**Prioridad: MEDIA (tercer pago)**

**Objetivo:** Que Fabián y su operaria puedan actualizar estados de guías desde la nueva web.

**Arquitectura (sin servidor dedicado, costo cero):**
```
Panel Admin HTML + JS → Netlify Functions → Google Sheets
Web pública rastreo  → Netlify Functions → Google Sheets (solo lectura)
```

**Datos gestionados:**
- Tabla guías: id_guia_rnt, id_guia_operadora, nombre_operadora, remitente, destinatario, ciudades, valor_declarado, fecha
- Tabla estados: id_guia_rnt, estado, ciudad, fecha, imagen_url

**Vistas del panel admin:**
- Login simple (usuario + contraseña)
- Lista de guías con buscador y filtros por estado y fecha
- Formulario insertar guía nueva
- Formulario actualizar estado (igual al formulario actual de Fabián)
- Upload imagen cumplido

**Vista pública mejorada:**
- Timeline visual con íconos por estado
- Imagen del cumplido si está disponible
- Botón WhatsApp con número de guía pre-llenado

**Criterio de aceptación del CP8:**
- Operaria inserta una guía nueva en menos de 2 minutos
- Cliente final ve el timeline actualizado en tiempo real
- Imagen del cumplido visible en consulta pública

---

### CHECKPOINT 9 — INTEGRACIÓN API EXXE LOGÍSTICA
**Estado: FUTURO — Requiere coordinación con Exxe**
**Tiempo estimado: 4-8 horas**
**Prioridad: ALTA para diferenciación del producto**

**Objetivo:** Automatizar consulta de trazabilidad para envíos por Exxe, eliminando trabajo manual de la operaria.

**Flujo:**
```
Guía RNT → tiene guía_exxe asociada → Netlify Function → API Exxe → estados automáticos → panel
```

**Pasos previos necesarios:**
1. Fabián coordina reunión con ingeniero de Exxe
2. Exxe comparte documentación del API REST
3. Hernando implementa consumidor en Netlify Functions
4. Prueba con guías reales

**Nota estratégica de producto:**
Este patrón es replicable para TCC, Coordinadora, Servientrega, Deprisa. Cada transportadora es un módulo. Este es el producto de software replicable para otras empresas de transporte en Colombia — el negocio escalable de AppCors.

**Criterio de aceptación del CP9:**
- Envíos de Exxe se actualizan automáticamente sin intervención manual
- La operaria solo interviene para empresas sin API disponible

---

### CHECKPOINT 10 — EXPANSIÓN
**Estado: FUTURO**
**Prioridad: BAJA**

**Incluye:**
- Traducción completa EN/ES refinada y completa
- Integración Goliat Software si Fabián migra en agosto 2026
- Casillero Internacional Miami Express: sección propia con formulario
- Carga aérea: cotizador específico internacional
- Panel estadísticas básico para Fabián

**COBRO DEL TERCER PAGO: $2.000.000 al completar CP5+CP6+CP8+CP9**

---

## 📅 CRONOGRAMA DE EJECUCIÓN

### HOY — Objetivo: algo concreto para mostrar a Fabián

| Tarea | Tiempo |
|---|---|
| CP2: Botón WhatsApp flotante | 15 min |
| CP3: JSON Tarifario 2024 completo | 45 min |
| CP3: Motor cotizador + HTML formulario | 60 min |
| Push + verificación en Netlify | 10 min |
| CP4: Rastreo puente | 30 min |
| **Total hoy** | **~2.5h** |

### ESTA SEMANA

| Tarea | Depende de |
|---|---|
| CP1: Contenido corporativo completo | Claude genera prompts |
| CP1: Limpieza imágenes genéricas | Copilot |
| CP5: Mensajería + Paquetes Premier | **Tabla de Fabián pendiente** |
| Llamada a Fabián + solicitar insumos | Hernando |

### PRÓXIMAS 2 SEMANAS

| Tarea | Depende de |
|---|---|
| CP6: SEO + Performance + EN/ES | — |
| CP7: Dominio propio | Acceso DNS de Fabián |
| **COBRAR segundo pago $1.500.000** | CP1 a CP7 completos |

### MEDIANO PLAZO (Mar-Jun 2026)

| Tarea | Depende de |
|---|---|
| CP8: Panel admin rastreo | — |
| CP9: API Exxe | Reunión con ingeniero Exxe |
| **COBRAR tercer pago $2.000.000** | CP8 completo |

---

## 💰 RELACIÓN CON PAGOS ACORDADOS

| Pago | Monto | Estado | Entregable |
|---|---|---|---|
| Pago 1 | $1.500.000 | RECIBIDO ago 2025 | CP0: Estructura base |
| Pago 2 | $1.500.000 | PENDIENTE | CP1+CP2+CP3+CP4+CP7 |
| Pago 3 | $2.000.000 | PENDIENTE | CP5+CP6+CP8+CP9 |

---

## 📌 INSUMOS PENDIENTES DEL CLIENTE

| Insumo | Para qué | Urgencia |
|---|---|---|
| Tabla mensajería y paquetes Premier | CP5: cotizador completo | ALTA |
| Acceso DNS del dominio | CP7: apuntamiento dominio | ALTA |
| Logo en alta resolución | CP1: imágenes corporativas | ALTA |
| Tarifas 2025 Excel actualizado | Actualizar JSON post-MVP | MEDIA |
| Fotos propias de operaciones | CP1: imágenes reales | MEDIA |
| Credenciales redes sociales | Links en footer | MEDIA |
| Reunión con ingeniero Exxe | CP9: API automatización | BAJA |

---

## 🔧 STACK TÉCNICO CONFIRMADO

```
Frontend:     HTML5 + CSS3 + Vanilla JS (sin frameworks — definitivo)
CSS:          Bootstrap 5.3.3 + main.css custom
Vendors:      AOS, Swiper, GLightbox, PureCounter
Cotizador:    JSON estático + Vanilla JS puro (sin backend CP3)
Rastreo MVP:  Redirección a sistema actual de Fabián (sin backend CP4)
Rastreo V2:   Netlify Functions + Google Sheets (CP8)
Deploy:       Netlify con CI/CD GitHub
Dominio:      rednacionaldetransportes.com (pendiente DNS)
WhatsApp:     +573124376616
```

---

## 🚨 RIESGOS Y CONTINGENCIAS

| Riesgo | Plan B |
|---|---|
| Fabián no manda tabla mensajería | "Próximamente" en esa sección |
| DNS del dominio no disponible | Entregar en Netlify temporal |
| Exxe no disponibiliza API | Panel admin manual como solución definitiva |
| Tarifas 2024 desactualizadas | Nota: "Tarifas orientativas sujetas a verificación" |

---

## CRITERIOS DE ÉXITO MVP (CP0 a CP7)

Al terminar el MVP, Fabián debe poder:

1. Entrar a rednacionaldetransportes.com y ver la nueva web profesional
2. Cotizar un envío de Bogotá a cualquier ciudad con precio desglosado
3. Ingresar un número de guía y ver el estado del envío
4. Contactar a RNT por WhatsApp desde cualquier página en 1 clic
5. Ver servicios, cobertura, condiciones y datos de contacto reales
6. La web se ve perfecta en celular, tablet y computador
7. Google encuentra la empresa cuando buscan "transporte carga Bogotá"

---

*Versión 1.0 | Claude Sonnet 4.6 | 25 Feb 2026 | Proyecto RNT — AppCors S.A.S.*
