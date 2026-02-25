# ARQUITECTURA TÉCNICA - RED NACIONAL DE TRANSPORTES (RNT)

**Fecha:** 25 de febrero de 2026  
**Estado:** En Desarrollo - Fase 1 (Diseño) en progreso

---

## 1. STACK TECNOLÓGICO

### 1.1. Frontend
- **HTML5:** Estructura semántica y accesible
- **CSS3:** Estilos modernos con variables CSS y Flexbox/Grid
- **JavaScript ES6+:** Interactividad y lógica del lado del cliente
- **Bootstrap 5.3.3:** Framework CSS responsive

### 1.2. Librerías y Dependencias
- **Bootstrap Icons:** Sistema de iconografía
- **Font Awesome 6:** Iconos adicionales y sociales
- **AOS (Animate On Scroll):** Animaciones al hacer scroll
- **GLightbox:** Galería de imágenes lightbox
- **Swiper:** Carruseles y sliders responsive
- **PureCounter:** Contadores animados

### 1.3. Fuentes
- **Google Fonts:**
  - Roboto (pesos: 100-900, regular e itálica)
  - Poppins (pesos: 100-900, regular e itálica)

---

## 2. ESTRUCTURA DEL PROYECTO

```
rnt_project/
├── index.html                  # Página principal (769 líneas)
├── about.html                  # Página "Nosotros"
├── services.html               # Página de servicios
├── service-details.html        # Detalle de servicios
├── pricing.html                # Página de tarifas
├── get-a-quote.html           # Formulario de cotización (283 líneas)
├── contact.html                # Página de contacto
├── starter-page.html           # Plantilla base
├── content-rnt.md             # Contenido maestro (492 líneas)
├── Readme.txt                  # Documentación del template
│
├── assets/
│   ├── css/
│   │   └── main.css           # CSS principal personalizado
│   │
│   ├── js/
│   │   └── main.js            # JavaScript principal (145 líneas)
│   │
│   ├── img/
│   │   ├── logo_rect.png      # Logo principal (160x40px)
│   │   ├── favicon.png        # Favicon
│   │   ├── world-dotted-map.png  # Mapa de fondo hero
│   │   ├── page-title-bg.jpg  # Fondo títulos de página
│   │   ├── team/              # Imágenes del equipo
│   │   └── testimonials/      # Imágenes testimonios
│   │
│   ├── vendor/
│   │   ├── bootstrap/         # Bootstrap 5.3.3
│   │   ├── bootstrap-icons/   # Iconos Bootstrap
│   │   ├── fontawesome-free/  # Font Awesome 6
│   │   ├── aos/               # Animate On Scroll
│   │   ├── glightbox/         # Lightbox gallery
│   │   ├── purecounter/       # Contadores animados
│   │   ├── swiper/            # Carruseles
│   │   └── php-email-form/    # Validación formularios
│   │
│   └── scss/                   # Archivos SCSS (opcionales)
│
└── forms/
    ├── contact.php             # Procesamiento formulario contacto
    ├── get-a-quote.php        # Procesamiento formulario cotización
    └── Readme.txt              # Documentación formularios
```

---

## 3. PÁGINAS IMPLEMENTADAS

### 3.1. index.html (Página Principal)
**Líneas:** 769  
**Secciones implementadas:**

1. **Header** (líneas 41-89)
   - Logo responsive (160x40px)
   - Navegación desktop/mobile
   - Botón CTA "Solicitar cotización"
   - Menú dropdown multinivel
   - Mobile nav toggle

2. **Hero Section** (líneas 93-150)
   - Título: "Transporte de carga y encomiendas en todo Colombia"
   - Subtítulo con propuesta de valor
   - Botones CTA: "Empezar" y "Ver video"
   - Imagen de fondo: mapa punteado mundial
   - Animaciones AOS

3. **Featured Services** (líneas 152-191)
   - 3 servicios destacados con iconos
   - Grid responsive 3 columnas
   - Hover effects

4. **About Section** (líneas 193-239)
   - Información de la empresa
   - Imagen corporativa
   - Lista de beneficios con checkmarks
   - Botón "Más información"

5. **Services Section** (líneas 241-319)
   - Grid de servicios 3x2
   - Iconos Font Awesome
   - Descripciones breves
   - Links a detalles

6. **Call to Action** (líneas 321-338)
   - Fondo oscuro con overlay
   - Mensaje persuasivo
   - Botón CTA prominente

7. **Features Section** (líneas 340-416)
   - Lista de características clave
   - Tabs/acordeones
   - Iconos y descripciones

8. **Pricing Section** (líneas 418-496)
   - Cards de tarifas
   - 3 planes/categorías
   - Listas de características
   - Botones "Cotizar"

9. **Testimonials** (líneas 498-609)
   - Carrusel Swiper
   - Testimonios de clientes
   - Imágenes circulares
   - Navegación automática

10. **FAQ Section** (líneas 611-765)
    - Acordeón Bootstrap
    - Preguntas frecuentes colapsables
    - Iconos animados

11. **Footer** (líneas 767-769)
    - Información de contacto
    - Links de navegación
    - Redes sociales
    - Copyright

### 3.2. get-a-quote.html (Cotizador)
**Líneas:** 283  
**Características:**

- **Header común** con navegación
- **Page Title** con breadcrumbs
- **Formulario de cotización** (líneas 97-250):
  - Campos de origen/destino
  - Dimensiones (largo, ancho, alto)
  - Peso real
  - Valor declarado
  - Tipo de servicio (dropdown)
  - Descripción del contenido
  - Datos de contacto (nombre, email, teléfono)
  - Checkbox términos y condiciones
  - Validación HTML5
  - Mensaje de confirmación
  - Procesamiento vía PHP (forms/get-a-quote.php)

### 3.3. Otras Páginas
- **about.html:** Página institucional "Nosotros"
- **services.html:** Listado completo de servicios
- **service-details.html:** Detalles de servicios individuales
- **pricing.html:** Tabla de tarifas detallada
- **contact.html:** Formulario de contacto y mapa
- **starter-page.html:** Plantilla limpia para nuevas páginas

---

## 4. COMPONENTES REUTILIZABLES

### 4.1. Header (Común en todas las páginas)
```html
<header id="header" class="header d-flex align-items-center fixed-top">
  - Logo con alt text optimizado
  - Navegación responsive
  - Mobile nav toggle
  - Botón CTA principal
```

### 4.2. Footer (Común en todas las páginas)
```html
<footer id="footer" class="footer dark-background">
  - 4 columnas de información
  - Links rápidos
  - Datos de contacto
  - Redes sociales
  - Newsletter (opcional)
```

### 4.3. Page Title (Páginas internas)
```html
<div class="page-title dark-background">
  - Título H1 de página
  - Descripción breve
  - Breadcrumbs de navegación
  - Fondo decorativo
```

### 4.4. Navegación
- **Desktop:** Menú horizontal con dropdowns
- **Mobile:** Menú hamburguesa lateral
- **Toggle:** Iconos bi-list / bi-x
- **Smooth scroll:** Enlaces internos animados

---

## 5. FUNCIONALIDADES JAVASCRIPT (main.js)

### 5.1. Scroll Effects
- **toggleScrolled()** (líneas 16-22)
  - Añade clase `.scrolled` al body después de 100px
  - Cambia estilo del header al hacer scroll

### 5.2. Mobile Navigation
- **mobileNavToggle()** (líneas 29-42)
  - Toggle del menú móvil
  - Cambio de icono hamburguesa/cerrar
  - Cierre automático al clic en enlaces

### 5.3. Dropdown Menus
- **Dropdowns toggle** (líneas 48-60)
  - Apertura/cierre de submenús
  - Soporte multinivel
  - Mobile/desktop compatible

### 5.4. Preloader
- **window.load** (líneas 62-70)
  - Oculta preloader al cargar página
  - Fadeout animado

### 5.5. Animaciones AOS
- **AOS.init()** (líneas 76-82)
  - Inicializa animaciones on-scroll
  - Duración: 600ms
  - Easing: ease-in-out
  - Offset: 100px

### 5.6. Carruseles Swiper
- **Configuración global** (líneas 95-110)
  - Autoplay habilitado
  - Loop infinito
  - Navegación por flechas
  - Paginación por bullets
  - Responsive breakpoints

### 5.7. Counter Animation
- **PureCounter** (líneas 115-120)
  - Contadores animados en estadísticas
  - Trigger al scroll

### 5.8. GLightbox
- **Galería lightbox** (líneas 125-130)
  - Lightbox para imágenes y videos
  - Soporte YouTube/Vimeo

### 5.9. FAQ Accordion
- **Acordeón toggle** (líneas 135-145)
  - Expandir/colapsar preguntas
  - Iconos animados
  - Solo uno abierto a la vez

---

## 6. ESTILO Y DISEÑO (CSS)

### 6.1. Variables CSS
```css
:root {
  --background-color: #ffffff;
  --default-color: #212529;
  --heading-color: #0b1419;
  --accent-color: #0dcaf0;
  --surface-color: #ffffff;
  --contrast-color: #ffffff;
}
```

### 6.2. Tipografía
- **Headings:** Poppins, bold
- **Body:** Roboto, regular
- **Tamaños responsive:** clamp() para fluidez

### 6.3. Grid System
- Bootstrap 5 grid (12 columnas)
- Breakpoints: xs, sm, md, lg, xl, xxl
- Gutters personalizados

### 6.4. Colores Corporativos
- **Primario:** Azul/Cyan (#0dcaf0)
- **Secundario:** Gris oscuro (#0b1419)
- **Acentos:** Naranja/Rojo para CTAs
- **Fondo oscuro:** Dark backgrounds con overlays

### 6.5. Componentes Estilizados
- Botones con hover effects
- Cards con sombras sutiles
- Iconos con backgrounds circulares
- Transiciones suaves (0.3s ease)

---

## 7. RESPONSIVE DESIGN

### 7.1. Breakpoints
- **Mobile:** < 576px
- **Tablet:** 576px - 991px
- **Desktop:** ≥ 992px
- **Large Desktop:** ≥ 1200px

### 7.2. Estrategia Mobile-First
- Diseño base para móviles
- Media queries para pantallas mayores
- Menú hamburguesa en mobile
- Grid colapsable

### 7.3. Imágenes Responsive
- `srcset` para múltiples resoluciones
- `loading="lazy"` para carga diferida
- Alt text descriptivos
- Tamaños optimizados

---

## 8. SEO Y ACCESIBILIDAD

### 8.1. Meta Tags (Implementados)
```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<meta name="keywords" content="...">
<title>Red Nacional de Transportes - ...</title>
```

### 8.2. Semántica HTML5
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Headings jerárquicos (h1, h2, h3)
- `<article>` para contenido independiente
- `<aside>` para contenido relacionado

### 8.3. Accesibilidad
- Alt text en todas las imágenes
- Labels en formularios
- ARIA labels donde necesario
- Contraste suficiente (WCAG AA)
- Navegación por teclado funcional

### 8.4. Performance
- CSS/JS minificados en vendor/
- Lazy loading de imágenes
- Preload de fuentes críticas
- AOS para animaciones eficientes

---

## 9. INTEGRACIONES ACTUALES

### 9.1. Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:...&family=Poppins:...&display=swap" rel="stylesheet">
```

### 9.2. Formularios PHP
- **contact.php:** Procesa formulario de contacto
- **get-a-quote.php:** Procesa solicitudes de cotización
- **Validación:** HTML5 + servidor
- **Spam protection:** Pendiente (reCAPTCHA)

### 9.3. Librerías CDN
- Bootstrap 5.3.3 (local)
- Font Awesome (local)
- Google Fonts (CDN)

---

## 10. TEMPLATE BASE

**Template usado:** Logis by BootstrapMade  
**URL:** https://bootstrapmade.com/logis-bootstrap-logistics-website-template/  
**Versión Bootstrap:** 5.3.3  
**Fecha actualización:** Agosto 2024  
**Licencia:** https://bootstrapmade.com/license/

### 10.1. Personalización Realizada
- ✅ Contenido adaptado a Red Nacional de Transportes
- ✅ Logo corporativo implementado (logo_rect.png)
- ✅ Textos en español
- ✅ Meta tags SEO personalizados
- ✅ Estructura de navegación ajustada
- ✅ Servicios específicos de transporte
- ✅ Formulario de cotización personalizado
- ⏳ Colores corporativos (parcial)
- ⏳ Imágenes propias (pendiente mayoría)
- ⏳ Contenido final (en proceso)

---

## 11. COMPATIBILIDAD DE NAVEGADORES

### 11.1. Navegadores Soportados
- ✅ Chrome 90+ (desktop/mobile)
- ✅ Firefox 88+ (desktop/mobile)
- ✅ Safari 14+ (macOS/iOS)
- ✅ Edge 90+ (desktop)
- ✅ Opera 76+
- ⚠️ IE 11 (no soportado - deprecado)

### 11.2. Testing Realizado
- ⏳ Chrome Desktop (pendiente test completo)
- ⏳ Mobile responsive (pendiente test dispositivos)
- ⏳ Cross-browser (pendiente)

---

## 12. SEGURIDAD

### 12.1. Prácticas Implementadas
- ✅ HTTPS ready (sin URLs hardcoded http://)
- ✅ Validación HTML5 en formularios
- ⏳ Sanitización server-side en PHP
- ⏳ CSRF tokens (pendiente)
- ⏳ reCAPTCHA (pendiente)
- ⏳ Rate limiting (pendiente)

### 12.2. Headers de Seguridad (Pendientes)
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

---

## 13. DEPLOYMENT

### 13.1. Requisitos del Servidor
- **Servidor web:** Apache 2.4+ o Nginx
- **PHP:** 7.4+ (para formularios)
- **SSL:** Certificado válido (Let's Encrypt recomendado)
- **Espacio:** ~50 MB (assets + código)

### 13.2. Estructura de Deploy
```
/public_html/ o /www/
├── index.html
├── *.html (páginas)
├── assets/
├── forms/
└── .htaccess (Apache)
```

### 13.3. Optimizaciones Pre-Deploy
- ⏳ Minificar CSS custom
- ⏳ Minificar JavaScript custom
- ⏳ Comprimir imágenes (WebP/optimización)
- ⏳ Configurar caché del navegador
- ⏳ Habilitar compresión Gzip/Brotli

---

**FIN DEL DOCUMENTO TÉCNICO**
