ES IMPORTANTE ALCARAR QUE ESTA DE ACONTINUACION ES LA PERSPECTIVA DE CHATGPT HASTA DONDE MAS AVANZO PERO LA DEFINITIVA FINAL LA TIENE HERNANDO EN LOS PROMOPTS QUE RECIBAS TU, CLAUDE WEB CON MODELO SONET 4.5 

# RNT_Web_V2 – Modernización web y lógica logística de Red Nacional de Transportes

## 1. Descripción general del proyecto

Este proyecto consiste en modernizar por completo la presencia web de **Red Nacional de Transportes**, una empresa colombiana de transporte de carga, encomiendas, mensajería, casillero internacional, carga aérea y almacenamiento, con más de 15 años de operación.

Actualmente el cliente tiene una **web antigua** (≈15 años) que incluye:

- Rastreo de guía  
- Cotizador de fletes  
- Información de servicios  
- Tarifas  
- Cobertura  
- Condiciones de transporte  
- Datos de contacto  

Esta web vieja está desactualizada tecnológica y visualmente, pero contiene la **lógica de negocio crítica** (base de liquidación de fletes, reglas de reexpedición, mínimos, etc.) que debe ser respetada y migrada.

La nueva web está montada sobre la plantilla **“Logis” de BootstrapMade** (versión free), un sitio multipágina responsivo basado en:

- **HTML5 + CSS3 + JS vanilla + Bootstrap 5.x**  

y ya se encuentra desplegada en **Netlify** con CI/CD (cada push a `main` actualiza producción).

### 1.1. Estructura principal del proyecto

Directorio base: `/rnt_project/` con las páginas:

- `index.html` – Inicio  
- `about.html` – Nosotros  
- `services.html` – Servicios  
- `service-details.html` – Detalle de servicio  
- `pricing.html` – Tarifas  
- `contact.html` – Contacto  
- `get-a-quote.html` – Cotización  
- `starter-page.html` – Plantilla base

Archivos y recursos clave:

- `assets/css/main.css` → estilos custom  
- `assets/js/main.js` → interacciones JS  
- `assets/img/` → imágenes (logo, banners, servicios, etc.)  
- `assets/vendor/` → Bootstrap, Swiper, AOS, Glightbox, etc.  

Backend básico de formularios en PHP:

- `forms/contact.php`  
- `forms/get-a-quote.php`  

### 1.2. Objetivo global

Que la **nueva web reemplace completamente a la antigua**, preservando y mejorando:

- Lógica de negocio (tarifas, rastreo, cotización)  
- Claridad de servicios, cobertura y condiciones  

y que ofrezca una **experiencia moderna, confiable y coherente con la marca**, sin que se perciba como una plantilla genérica.

---

## 2. Fases del proyecto

### 2.1. Fase 1 – Modernización de contenido (informativo, sin lógica compleja)

**Objetivo:** Dejar la web nueva en Netlify completamente actualizada a nivel de contenido, reflejando fielmente el negocio real de Red Nacional de Transportes.

#### 2.1.1. Reescritura de contenido

Reescribir **TODO el contenido visible** de la plantilla:

- Títulos (`<h1>…<h6>`)  
- Textos de párrafo  
- Bullets y listas  
- Labels de formularios  
- Placeholders  
- Mensajes de error  
- Meta tags (`<title>`, `<meta name="description">`, etc.)  

Todo en **español**, adaptado a la realidad de **Red Nacional de Transportes**, eliminando cualquier texto en inglés o genérico de la plantilla.

#### 2.1.2. Inyección de información real del negocio

- **Servicios principales**:  
  - Transporte de carga nacional  
  - Encomiendas y mensajería  
  - Casillero internacional  
  - Carga aérea nacional e internacional  
  - Almacenamiento y bodegaje  
  - Servicios adicionales (reexpediciones, manejo de valor declarado, etc.)

- **Cobertura**:  
  - Recogidas en Bogotá  
  - Cobertura a nivel nacional mediante rutas propias y aliados  
  - Posible casillero internacional y conexiones aéreas

- **Lógica de tarifas**:
  - **Componente fijo del flete**:  
    - Tomar el **mayor valor** entre:
      - Peso real  
      - Peso volumen  
    - Usando un factor de **400 kg/m³**  
    - Con mínimo de **30 kg facturables por unidad**
  - **Componente variable (manejo)**:  
    - **1 % del valor declarado**  
    - Con mínimo de **$5.500**
  - **Mínimos de referencia** (ejemplos):  
    - Flete mínimo urbano  
    - Flete mínimo regional  
    - Flete mínimo nacional  
    - Mensajería hasta 3 kg, etc.

- **Datos de contacto reales**:  
  - Teléfonos (línea principal, logística, servicio al cliente)  
  - Direcciones de sedes  
  - Correo de servicio al cliente  
  - Horarios de atención

- **Mensajes explicativos**:
  - Sección de **rastreo de guías**:  
    - Qué puede consultar el usuario  
    - Cómo ingresar su número de guía  
    - Mensajes claros para estados y errores  
  - Sección de **cotizador**:  
    - Qué datos se solicitan y por qué  
    - Explicar conceptualmente peso real, peso volumen y valor declarado  

#### 2.1.3. Asegurar consistencia página por página

Para cada página (`index`, `about`, `services`, `pricing`, `contact`, `get-a-quote`, etc.):

- Títulos coherentes con la empresa  
- Descripciones alineadas a la logística real del cliente  
- Textos de SEO básico:
  - `<title>` orientado a “transporte de carga y encomiendas en Colombia”  
  - `<meta name="description">` con foco en servicios y cobertura

#### 2.1.4. Resultado de éxito de Fase 1

- La web nueva en Netlify se ve como **la web corporativa oficial de Red Nacional**, no como plantilla.  
- No hay restos de inglés ni textos genéricos.  
- Los módulos de **rastreo** y **cotización** existen a nivel **UI y textos**:
  - Campos  
  - Instrucciones  
  - Mensajes de error/estado  
- Todo listo para que más adelante se conecte la **lógica real**.

---

### 2.2. Fase 2 – Funcionalidad de negocio (rastreo y cotizador reales, versión 2)

**Objetivo:** Pasar de una web solo informativa a una web con **módulos funcionales reales** de rastreo y cotización, usando la lógica de negocio de Red Nacional.

#### 2.2.1. Rastreo de guía

- **Frontend**:
  - Formulario para ingreso de número de guía  
  - Mensajes de estado claros (en tránsito, entregado, devuelto, etc.)  
  - Manejo de errores (guía no encontrada, formato inválido, etc.)

- **Backend**:
  - Integración con la fuente de datos disponible:
    - API propia  
    - Base de datos  
    - Sistema legado  
    - O al menos un **mock** inicial para pruebas  
  - Devolver y mostrar al usuario **estados básicos de la guía**.

#### 2.2.2. Cotizador de fletes

- **Campos de entrada**:
  - Origen  
  - Destino  
  - Tipo de servicio  
  - Peso real  
  - Dimensiones para volumen (largo, ancho, alto)  
  - Valor declarado  
  - Tipo de mercancía  
  - Datos de contacto (nombre, teléfono, correo)

- **Cálculo de fletes** basado en la lógica tarifaria de Red Nacional:
  - Peso vs volumen (factor 400 kg/m³)  
  - Mínimo 30 kg facturables  
  - 1 % del valor declarado  
  - Mínimos urbano/regional/nacional, mensajería, etc.

- **Representación programable de tarifas**:
  - Usar un formato como **JSON, CSV u otra estructura** para las tablas tarifarias.  
  - Objetivo: permitir la **edición futura** de tarifas sin modificar el código de cálculo.

#### 2.2.3. Migración técnica opcional

- Opcionalmente, migrar los formularios PHP (`contact.php`, `get-a-quote.php`) a:
  - **Funciones serverless** (Node/TypeScript)  
  - Ajustadas al entorno de despliegue (Netlify, Vercel, etc.)  

---

### 2.3. Fase 3 – Panel/configuración y refinamiento

**Objetivo:** Dar autonomía de operación y afinar calidad técnica.

- Diseñar un mecanismo de administración:
  - Puede ser un **panel administrativo básico** o  
  - Archivos de configuración bien estructurados (JSON/CSV, etc.)  
- Este mecanismo debe permitir **actualizar**:
  - Tarifas  
  - Rutas  
  - Parámetros clave (mínimos, porcentajes, factores)  
- Sin necesidad de que intervenga un desarrollador.

Mejoras adicionales:

- UX y mensajes al usuario  
- Estados de carga y feedback visual  
- Validaciones y accesibilidad  
- SEO técnico y performance:
  - Optimización de assets  
  - Mejora de métricas tipo Lighthouse  

---

## 3. Rol esperado de la IA (Claude) en este proyecto

La IA (Claude) debe:

1. **Leer y entender** la estructura del repo (`/rnt_project`) y los archivos:
   - HTML  
   - CSS  
   - JS  
   - PHP  

2. Actuar como:

   - **Arquitecto técnico**  
   - **Pair programmer**  
   - **Copywriter web**  

   Para:

   - Reescribir textos del sitio usando la información de negocio suministrada  
     - Contenido maestro: identidad de marca, servicios, tarifas, cobertura, contacto, etc.  
   - Asegurar **consistencia** entre todas las páginas:
     - Nombres de servicios  
     - Mensajes  
     - Tono de comunicación  
     - Datos de contacto  
   - Proponer mejoras textuales y de organización de secciones,  
     - Sin romper la estructura de la plantilla  
     - Sin romper el JS existente  
   - Diseñar e implementar, en fases posteriores:
     - La lógica del **rastreo de guía**  
     - La lógica del **cotizador**  
     - El **modelo de datos** para tarifarios editables

3. Trabajar siempre con estas ideas clave:

   - La **web antigua** es la **fuente original de la lógica de negocio**:
     - Tarifas  
     - Reglas  
     - Textos legales y operativos  

   - La **web nueva** es la **implementación moderna** que debe:
     - Absorber todo eso  
     - Organizarlo mejor  
     - Presentarlo con una experiencia de usuario actual y profesional  

---