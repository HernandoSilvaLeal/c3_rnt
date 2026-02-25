# ROADMAP Y PRÓXIMOS PASOS - RED NACIONAL DE TRANSPORTES (RNT)

**Fecha:** 25 de febrero de 2026  
**Versión:** 1.0  
**Período covered:** Febrero 2026 - Junio 2026

---

## ÍNDICE RÁPIDO

1. [Roadmap General (4 Fases)](#1-roadmap-general)
2. [Sprint Plan (12 semanas)](#2-sprint-plan)
3. [Tareas Prioritarias](#3-tareas-prioritarias-por-categoría)
4. [Definición de Tareas Backend](#4-backend-implementation-plan)
5. [Cotizador - Implementación Detallada](#5-fase-2-cotizador---plan-de-implementación)
6. [Rastreo - Implementación Detallada](#6-fase-3-rastreo---plan-de-implementación)
7. [Checklist de Deployment](#7-deployment-checklist)

---

## 1. ROADMAP GENERAL

### FASE 1: DISEÑO ✅ 70% → 🎯 100%
**Duración:** 2 semanas (Feb 25 - Mar 8, 2026)  
**Inversión:** $1.500.000 COP

#### Objetivos:
- ✅ Sitio web responsivo funcional
- ⏳ Contenido completo integrado
- ⏳ Imágenes corporativas propias
- ⏳ Testing multi-dispositivo
- ⏳ Optimización de performance

#### Entregables:
1. ✅ 8 páginas HTML completas
2. ⏳ Diseño mobile/tablet/desktop testeado
3. ⏳ Lighthouse score >85
4. ⏳ Contenido de content-rnt.md integrado
5. ⏳ Galería de imágenes corporativas

---

### FASE 2: COTIZADOR ⏳ 15% → 🎯 100%
**Duración:** 4 semanas (Mar 9 - Abr 5, 2026)  
**Inversión:** $1.500.000 COP

#### Objetivos:
- 🎯 Cotizador automático en tiempo real
- 🎯 Base de datos de tarifas
- 🎯 Cálculo de peso volumétrico
- 🎯 Backend API funcional
- 🎯 Guardado de cotizaciones
- 🎯 Email de confirmación

#### Entregables:
1. ⏳ Backend PHP/Laravel o Node.js
2. ⏳ Base de datos con tarifario 2024
3. ⏳ API REST para cotizaciones
4. ⏳ JavaScript para cálculo instantáneo
5. ⏳ Panel admin para actualizar tarifas
6. ⏳ Sistema de emails automatizados

---

### FASE 3: RASTREO ⏳ 5% → 🎯 100%
**Duración:** 5 semanas (Abr 6 - May 10, 2026)  
**Inversión:** $2.000.000 COP

#### Objetivos:
- 🎯 Sistema de rastreo por guía
- 🎯 Estados automáticos
- 🎯 Integración API Exxe
- 🎯 Carga manual/automática de guías
- 🎯 Upload de imágenes de guías
- 🎯 Timeline visual de estados

#### Entregables:
1. ⏳ Interfaz de rastreo para cliente final
2. ⏳ Panel administrativo para carga de guías
3. ⏳ Base de datos de rastreo
4. ⏳ Integración con API externa (Exxe)
5. ⏳ Sistema de upload de imágenes
6. ⏳ Webhook para actualizaciones automáticas
7. ⏳ Notificaciones por email/SMS

---

### FASE 4: WHATSAPP Y REDES SOCIALES ❌ 0% → 🎯 100%
**Duración:** 3 semanas (May 11 - May 31, 2026)  
**Inversión:** Incluido en fases anteriores

#### Objetivos:
- 🎯 Botón flotante de WhatsApp
- 🎯 Integración WhatsApp Business
- 🎯 Enlaces a redes sociales
- 🎯 Chat widget
- 🎯 Compartir en redes
- 🎯 Pixels de tracking

#### Entregables:
1. ⏳ Botón WhatsApp con click-to-chat
2. ⏳ API WhatsApp Business (opcional)
3. ⏳ Footer con links sociales
4. ⏳ Widget de Facebook/Instagram
5. ⏳ Botones de compartir
6. ⏳ Facebook Pixel, Google Analytics

---

### FASE 5: LANZAMIENTO Y CAPACITACIÓN 🎯
**Duración:** 2 semanas (Jun 1 - Jun 14, 2026)

#### Objetivos:
- 🎯 Deployment a producción
- 🎯 Capacitación de equipo
- 🎯 Manual de operario
- 🎯 Bilingüe (inglés)
- 🎯 Monitoreo post-lanzamiento

---

## 2. SPRINT PLAN (12 Semanas)

### 📅 SPRINT 1 (Feb 25 - Mar 3) - Finalizar Fase 1
**Objetivo:** Completar diseño al 100%

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 25 | Integrar contenido de content-rnt.md a about.html | Frontend | 4h |
| M 26 | Integrar contenido a services.html y service-details.html | Frontend | 6h |
| X 27 | Integrar contenido a pricing.html | Frontend | 4h |
| J 28 | Optimizar imágenes existentes, preparar assets | Frontend | 4h |
| V 29 | Testing en Chrome, Firefox, Safari | QA | 6h |
| **Total** | **24 horas** | | |

**Entregable:** Fase 1 completa al 100%

---

### 📅 SPRINT 2 (Mar 4 - Mar 10) - Iniciar Backend
**Objetivo:** Configurar infraestructura backend y BD

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 04 | Diseñar esquema de base de datos (ERD) | Backend | 6h |
| M 05 | Configurar entorno Laravel/Node.js | Backend | 4h |
| X 06 | Crear base de datos y migraciones | Backend | 6h |
| J 07 | Implementar modelo de tarifas | Backend | 6h |
| V 08 | Crear API endpoint /api/cotizaciones | Backend | 8h |
| **Total** | **30 horas** | | |

**Entregable:** Backend básico funcional, BD creada

---

### 📅 SPRINT 3 (Mar 11 - Mar 17) - Cotizador Backend
**Objetivo:** API de cotización completa

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 11 | Implementar lógica de cálculo peso volumétrico | Backend | 4h |
| M 12 | Crear lógica de selección de tarifas por destino | Backend | 6h |
| X 13 | Implementar descuentos y recargos | Backend | 4h |
| J 14 | Sistema de guardado de cotizaciones en BD | Backend | 6h |
| V 15 | Email de confirmación de cotización | Backend | 6h |
| **Total** | **26 horas** | | |

**Entregable:** API de cotización funcional

---

### 📅 SPRINT 4 (Mar 18 - Mar 24) - Cotizador Frontend
**Objetivo:** Integrar cotizador en frontend

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 18 | JavaScript para cálculo automático en tiempo real | Frontend | 6h |
| M 19 | AJAX para envío a API sin recargar página | Frontend | 4h |
| X 20 | Mostrar resultado de cotización con desglose | Frontend | 6h |
| J 21 | Validación avanzada de formulario | Frontend | 4h |
| V 22 | Testing y ajustes finales | QA | 6h |
| **Total** | **26 horas** | | |

**Entregable:** Cotizador completo funcional

---

### 📅 SPRINT 5 (Mar 25 - Mar 31) - Panel Admin
**Objetivo:** Panel administrativo para gestión

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 25 | Diseño UI del panel admin | Frontend | 4h |
| M 26 | Sistema de login para administradores | Backend | 6h |
| X 27 | CRUD de tarifas (crear, editar, eliminar) | Full Stack | 8h |
| J 28 | CRUD de ciudades/cobertura | Full Stack | 6h |
| V 29 | Importación masiva de tarifas (CSV) | Backend | 6h |
| **Total** | **30 horas** | | |

**Entregable:** Panel admin básico funcional

---

### 📅 SPRINT 6 (Abr 1 - Abr 7) - Rastreo - Interfaz
**Objetivo:** Interfaz de rastreo para usuarios

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 01 | Diseñar UI de búsqueda de guía | Frontend | 4h |
| M 02 | Timeline visual de estados | Frontend | 6h |
| X 03 | Galería de imágenes de guía | Frontend | 4h |
| J 04 | Página de detalle de envío | Frontend | 6h |
| V 05 | Responsive design del tracker | Frontend | 4h |
| **Total** | **24 horas** | | |

**Entregable:** Interfaz de rastreo completa

---

### 📅 SPRINT 7 (Abr 8 - Abr 14) - Rastreo - Backend
**Objetivo:** Backend de rastreo y BD

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 08 | Crear tablas: guias, estados, imagenes | Backend | 6h |
| M 09 | API endpoint GET /api/rastreo/:numero_guia | Backend | 4h |
| X 10 | Sistema de estados configurable | Backend | 6h |
| J 11 | Upload de imágenes con compresión | Backend | 6h |
| V 12 | Vinculación de imágenes a guías | Backend | 4h |
| **Total** | **26 horas** | | |

**Entregable:** Backend de rastreo funcional

---

### 📅 SPRINT 8 (Abr 15 - Abr 21) - Panel Admin Rastreo
**Objetivo:** Administración de guías

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 15 | UI para crear guía manualmente | Frontend | 6h |
| M 16 | Actualizar estado de guía (dropdown) | Frontend | 4h |
| X 17 | Upload múltiple de imágenes | Frontend | 6h |
| J 18 | Importación masiva CSV de guías | Backend | 8h |
| V 19 | Búsqueda y filtros en panel admin | Full Stack | 6h |
| **Total** | **30 horas** | | |

**Entregable:** Panel admin de rastreo completo

---

### 📅 SPRINT 9 (Abr 22 - Abr 28) - Integración API Exxe
**Objetivo:** Rastreo automático con API externa

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 22 | Obtener documentación API Exxe | Backend | 2h |
| M 23 | Configurar credenciales y autenticación | Backend | 4h |
| X 24 | Implementar consumo de API (fetch estados) | Backend | 8h |
| J 25 | Webhook para actualizaciones automáticas | Backend | 8h |
| V 26 | Sincronización periódica (cron job) | Backend | 4h |
| **Total** | **26 horas** | | |

**Entregable:** Integración API Exxe funcional

---

### 📅 SPRINT 10 (Abr 29 - May 5) - Notificaciones
**Objetivo:** Sistema de notificaciones

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 29 | Email automático al crear cotización | Backend | 4h |
| M 30 | Email automático al cambiar estado de guía | Backend | 6h |
| X 01 | Plantillas de email responsivas | Frontend | 6h |
| J 02 | SMS notifications (Twilio/similar) - opcional | Backend | 6h |
| V 03 | Testing de notificaciones | QA | 4h |
| **Total** | **26 horas** | | |

**Entregable:** Sistema de notificaciones completo

---

### 📅 SPRINT 11 (May 6 - May 12) - WhatsApp y Redes
**Objetivo:** Integraciones sociales

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 06 | Botón flotante de WhatsApp con click-to-chat | Frontend | 3h |
| M 07 | Links a redes sociales en footer | Frontend | 2h |
| X 08 | Botones de compartir en páginas | Frontend | 4h |
| J 09 | Facebook Pixel y Google Analytics | Frontend | 4h |
| V 10 | WhatsApp Business API (investigación) | Backend | 4h |
| **Total** | **17 horas** | | |

**Entregable:** Integraciones sociales completas

---

### 📅 SPRINT 12 (May 13 - May 19) - Login y Bilingüe
**Objetivo:** Autenticación y multi-idioma

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 13 | Sistema de registro de usuarios | Backend | 6h |
| M 14 | Login/logout con sesiones | Backend | 6h |
| X 15 | Panel de usuario (mis cotizaciones, mis envíos) | Full Stack | 8h |
| J 16 | Traducción al inglés (archivo de idiomas) | Content | 8h |
| V 17 | Selector de idioma en header | Frontend | 4h |
| **Total** | **32 horas** | | |

**Entregable:** Login y bilingüe funcionales

---

### 📅 SPRINT 13 (May 20 - May 26) - Conexión Gelotra
**Objetivo:** Integración con Gelotra

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 20 | Reunión con Gelotra - requerimientos | PM | 2h |
| M 21 | Obtener documentación API Gelotra | Backend | 2h |
| X 22 | Implementar integración según specs | Backend | 8h |
| J 23 | Testing de integración | QA | 6h |
| V 24 | Ajustes y correcciones | Backend | 6h |
| **Total** | **24 horas** | | |

**Entregable:** Conexión Gelotra completa

---

### 📅 SPRINT 14 (May 27 - Jun 2) - Testing y Optimización
**Objetivo:** QA completo y optimización

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 27 | Testing funcional completo | QA | 8h |
| M 28 | Testing de performance (Lighthouse) | QA | 4h |
| X 29 | Optimización de imágenes y assets | Frontend | 6h |
| J 30 | Testing de seguridad (OWASP) | Backend | 6h |
| V 31 | Correcciones de bugs encontrados | Full Stack | 8h |
| **Total** | **32 horas** | | |

**Entregable:** Sitio optimizado y sin bugs críticos

---

### 📅 SPRINT 15 (Jun 3 - Jun 9) - Documentación y Manual
**Objetivo:** Documentación completa

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 03 | Manual de usuario final PDF | Docs | 8h |
| M 04 | Manual de administrador PDF | Docs | 8h |
| X 05 | Documentación técnica de API | Backend | 6h |
| J 06 | Video tutoriales (cotizador, rastreo) | Content | 8h |
| V 07 | FAQ operativa y troubleshooting | Docs | 4h |
| **Total** | **34 horas** | | |

**Entregable:** Manual para operario nuevo completo

---

### 📅 SPRINT 16 (Jun 10 - Jun 16) - Deployment y Capacitación
**Objetivo:** Puesta en producción

| Día | Tarea | Responsable | Horas |
|-----|-------|-------------|-------|
| L 10 | Configurar servidor de producción | DevOps | 6h |
| M 11 | Deploy a producción | DevOps | 4h |
| X 12 | Configurar dominio y SSL | DevOps | 3h |
| J 13 | Capacitación al equipo RNT | PM | 6h |
| V 14 | Monitoreo post-lanzamiento | Full Stack | 4h |
| **Total** | **23 horas** | | |

**Entregable:** Sitio en producción y equipo capacitado

---

## 3. TAREAS PRIORITARIAS POR CATEGORÍA

### 🔴 PRIORIDAD CRÍTICA (Hacer YA)

#### A. Completar Fase 1 (Esta semana)
1. ⏳ Integrar todo el contenido de content-rnt.md a las páginas HTML
2. ⏳ Reemplazar imágenes placeholder con temporales optimizadas
3. ⏳ Testing en Chrome, Firefox, Safari (desktop)
4. ⏳ Testing en móviles (Chrome Android, Safari iOS)
5. ⏳ Optimizar performance (Lighthouse >85)
6. ⏳ Validar HTML/CSS (W3C Validator)

#### B. Decisiones Técnicas (Esta semana)
1. 🎯 **DECISIÓN:** Elegir stack backend → Recomendación: Laravel (PHP)
2. 🎯 **DECISIÓN:** Servidor de hosting → Recomendación: VPS (DigitalOcean/Linode)
3. 🎯 **DECISIÓN:** Base de datos → Recomendación: MySQL 8.0
4. 🎯 **DECISIÓN:** Dominio definitivo → Comprar ya si no existe

#### C. Imágenes Corporativas (Urgente)
1. ⏳ Planificar sesión fotográfica profesional:
   - Instalaciones (bodega, oficinas)
   - Flota de vehículos (camiones, motos)
   - Equipo de trabajo
   - Proceso de logística
2. ⏳ Mientras tanto: Usar stock de calidad (Unsplash, Pexels)

---

### 🟡 PRIORIDAD ALTA (Próximas 2 semanas)

#### D. Backend Infrastructure
1. ⏳ Configurar entorno de desarrollo local (XAMPP/Laragon o Docker)
2. ⏳ Inicializar proyecto Laravel/Node.js
3. ⏳ Configurar Git y repositorio (GitHub/GitLab)
4. ⏳ Crear estructura de carpetas backend
5. ⏳ Configurar ESLint/PHP Code Sniffer
6. ⏳ Documentar setup de desarrollo

#### E. Base de Datos
1. ⏳ Diseñar ERD completo (ver sección 4)
2. ⏳ Crear migraciones para todas las tablas
3. ⏳ Seeders con datos de prueba
4. ⏳ Poblar tabla de ciudades con cobertura nacional
5. ⏳ Poblar tabla de tarifas con datos 2024 de content-rnt.md
6. ⏳ Crear usuario admin de prueba

#### F. API REST
1. ⏳ Definir estructura de endpoints (ver sección 4)
2. ⏳ Implementar autenticación JWT o sanctum
3. ⏳ Middleware de validación
4. ⏳ Manejo globalizado de errores
5. ⏳ Documentación de API (Swagger/Postman)

---

### 🟢 PRIORIDAD MEDIA (Próximas 4 semanas)

#### G. Cotizador Completo
1. ⏳ Página get-a-quote.html con cálculo en tiempo real
2. ⏳ JavaScript para peso volumétrico automático
3. ⏳ Fetch API para llamar a backend
4. ⏳ Mostrar desglose: flete base + seguro + extras
5. ⏳ Botón "Solicitar esta cotización"
6. ⏳ Guardado en BD con número único
7. ⏳ Email de confirmación con PDF

#### H. Panel Administrador MVP
1. ⏳ Login de administrador
2. ⏳ Dashboard con estadísticas básicas
3. ⏳ CRUD de tarifas
4. ⏳ CRUD de ciudades
5. ⏳ Listado de cotizaciones generadas
6. ⏳ Exportar cotizaciones a Excel

#### I. SEO y Optimización
1. ⏳ Generar sitemap.xml
2. ⏳ Crear robots.txt
3. ⏳ Implementar Schema.org markup (Organization, LocalBusiness)
4. ⏳ Open Graph tags completas
5. ⏳ Optimizar alt text de imágenes
6. ⏳ Minificar CSS/JS custom
7. ⏳ Configurar caché del navegador

---

### ⚪ PRIORIDAD BAJA (Próximos 2-3 meses)

#### J. Rastreo Completo
1. ⏳ (Ver Sprint 6-9 para detalles)

#### K. WhatsApp y Redes
1. ⏳ (Ver Sprint 11 para detalles)

#### L. Bilingüe
1. ⏳ (Ver Sprint 12 para detalles)

#### M. Conexión Gelotra
1. ⏳ (Ver Sprint 13 para detalles)

---

## 4. BACKEND IMPLEMENTATION PLAN

### 4.1. Stack Tecnológico Recomendado

```
OPCIÓN A (RECOMENDADA): PHP/Laravel Stack
├── Backend Framework: Laravel 10+
├── Base de Datos: MySQL 8.0+ o PostgreSQL 14+
├── ORM: Eloquent (incluido en Laravel)
├── Autenticación: Laravel Sanctum o Passport
├── Queue: Redis + Laravel Queue
├── Storage: AWS S3 o local
├── Email: Mailtrap (dev) → SendGrid/Mailgun (prod)
└── Testing: PHPUnit + Pest

Ventajas:
✅ Ya tienes PHP (forms/*.php)
✅ Ecosistema maduro y documentado
✅ Hosting económico disponible
✅ Comunidad grande en español
✅ Laravel Nova para panel admin (opcional)
```

```
OPCIÓN B (ALTERNATIVA): Node.js/Express Stack
├── Backend Framework: Express.js + TypeScript
├── Base de Datos: PostgreSQL 14+ o MongoDB
├── ORM: Sequelize (SQL) o Prisma
├── Autenticación: Passport.js o custom JWT
├── Queue: Bull + Redis
├── Storage: AWS S3 o Cloudinary
├── Email: NodeMailer + SendGrid
└── Testing: Jest + Supertest

Ventajas:
✅ JavaScript full-stack (mismo lenguaje)
✅ Moderno y escalable
✅ NPM ecosystem enorme
✅ Real-time fácil con Socket.io
```

### 4.2. Esquema de Base de Datos (ERD)

```sql
-- TABLA: usuarios
CREATE TABLE usuarios (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    empresa VARCHAR(100),
    tipo_usuario ENUM('cliente', 'admin', 'operador') DEFAULT 'cliente',
    activo BOOLEAN DEFAULT TRUE,
    email_verificado_en TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_tipo (tipo_usuario)
);

-- TABLA: ciudades
CREATE TABLE ciudades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(10) UNIQUE NOT NULL,
    departamento VARCHAR(100),
    zona ENUM('urbano', 'regional', 'nacional'),
    dias_entrega INT DEFAULT 3,
    activa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_codigo (codigo),
    INDEX idx_zona (zona)
);

-- TABLA: tarifas
CREATE TABLE tarifas (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    origen_id INT NOT NULL,
    destino_id INT NOT NULL,
    tipo_servicio ENUM('carga', 'encomienda', 'mensajeria', 'express'),
    peso_minimo_kg DECIMAL(10,2) DEFAULT 30.00,
    tarifa_base DECIMAL(10,2) NOT NULL,
    tarifa_por_kg DECIMAL(10,2),
    flete_minimo DECIMAL(10,2) DEFAULT 45000.00,
    recargo_zona_rural DECIMAL(5,2) DEFAULT 20.00, -- Porcentaje
    recargo_express DECIMAL(5,2) DEFAULT 40.00, -- Porcentaje
    fecha_vigencia_desde DATE NOT NULL,
    fecha_vigencia_hasta DATE NULL,
    activa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (origen_id) REFERENCES ciudades(id),
    FOREIGN KEY (destino_id) REFERENCES ciudades(id),
    INDEX idx_origen_destino (origen_id, destino_id),
    INDEX idx_tipo_servicio (tipo_servicio),
    INDEX idx_vigencia (fecha_vigencia_desde, fecha_vigencia_hasta)
);

-- TABLA: cotizaciones
CREATE TABLE cotizaciones (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    numero_cotizacion VARCHAR(20) UNIQUE NOT NULL, -- Ej: COT-2026-0001
    usuario_id BIGINT NULL, -- NULL si no está autenticado
    nombre_cliente VARCHAR(100) NOT NULL,
    email_cliente VARCHAR(100) NOT NULL,
    telefono_cliente VARCHAR(20),
    empresa_cliente VARCHAR(100),
    -- Datos del envío
    origen_id INT NOT NULL,
    destino_id INT NOT NULL,
    tipo_servicio ENUM('carga', 'encomienda', 'mensajeria', 'express'),
    descripcion_contenido TEXT,
    peso_real_kg DECIMAL(10,2) NOT NULL,
    largo_cm DECIMAL(10,2),
    ancho_cm DECIMAL(10,2),
    alto_cm DECIMAL(10,2),
    peso_volumetrico_kg DECIMAL(10,2), -- Calculado: (L*A*H)/400
    peso_cobrable_kg DECIMAL(10,2), -- MAX(peso_real, peso_volumetrico)
    valor_declarado DECIMAL(12,2),
    -- Cálculo de costos
    flete_base DECIMAL(10,2) NOT NULL,
    seguro DECIMAL(10,2) DEFAULT 0.00,
    recargos DECIMAL(10,2) DEFAULT 0.00,
    descuento DECIMAL(10,2) DEFAULT 0.00,
    total DECIMAL(12,2) NOT NULL,
    -- Metadatos
    estado ENUM('pendiente', 'enviada', 'aceptada', 'rechazada') DEFAULT 'pendiente',
    valida_hasta DATE,
    notas TEXT,
    ip_origen VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (origen_id) REFERENCES ciudades(id),
    FOREIGN KEY (destino_id) REFERENCES ciudades(id),
    INDEX idx_numero (numero_cotizacion),
    INDEX idx_cliente (email_cliente),
    INDEX idx_fecha (created_at),
    INDEX idx_estado (estado)
);

-- TABLA: guias_rastreo
CREATE TABLE guias_rastreo (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    numero_guia VARCHAR(50) UNIQUE NOT NULL, -- Ej: RNT-BOG-2026-00001
    cotizacion_id BIGINT NULL,
    usuario_id BIGINT NULL,
    -- Datos del remitente
    remitente_nombre VARCHAR(100) NOT NULL,
    remitente_telefono VARCHAR(20),
    remitente_direccion TEXT,
    remitente_ciudad_id INT,
    -- Datos del destinatario
    destinatario_nombre VARCHAR(100) NOT NULL,
    destinatario_telefono VARCHAR(20),
    destinatario_direccion TEXT NOT NULL,
    destinatario_ciudad_id INT NOT NULL,
    -- Datos del envío
    descripcion TEXT,
    peso_kg DECIMAL(10,2),
    valor_declarado DECIMAL(12,2),
    valor_flete DECIMAL(10,2),
    tipo_servicio ENUM('carga', 'encomienda', 'mensajeria', 'express'),
    -- Estado actual
    estado_actual ENUM(
        'creado', 
        'recogido', 
        'en_transito', 
        'en_bodega_origen',
        'en_bodega_destino',
        'en_reparto', 
        'entregado', 
        'devuelto',
        'incidencia'
    ) DEFAULT 'creado',
    fecha_recogida DATETIME NULL,
    fecha_entrega DATETIME NULL,
    recibido_por VARCHAR(100) NULL, -- Quien recibió el paquete
    firma_digital TEXT NULL, -- URL o base64 de firma
    -- Integración API externa
    id_externo VARCHAR(100) NULL, -- ID en sistema Exxe
    sincronizado BOOLEAN DEFAULT FALSE,
    ultima_sincronizacion DATETIME NULL,
    -- Metadatos
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (cotizacion_id) REFERENCES cotizaciones(id) ON DELETE SET NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (remitente_ciudad_id) REFERENCES ciudades(id),
    FOREIGN KEY (destinatario_ciudad_id) REFERENCES ciudades(id),
    INDEX idx_numero_guia (numero_guia),
    INDEX idx_estado (estado_actual),
    INDEX idx_fecha_entrega (fecha_entrega),
    INDEX idx_destinatario_ciudad (destinatario_ciudad_id),
    INDEX idx_id_externo (id_externo)
);

-- TABLA: estados_guia (historial de estados)
CREATE TABLE estados_guia (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    guia_id BIGINT NOT NULL,
    estado ENUM(
        'creado', 
        'recogido', 
        'en_transito', 
        'en_bodega_origen',
        'en_bodega_destino',
        'en_reparto', 
        'entregado', 
        'devuelto',
        'incidencia'
    ) NOT NULL,
    ubicacion VARCHAR(200), -- Ciudad o bodega actual
    latitud DECIMAL(10,8) NULL,
    longitud DECIMAL(11,8) NULL,
    notas TEXT,
    creado_por_usuario_id BIGINT NULL, -- Admin/operador que creó el estado
    origen ENUM('manual', 'automatico', 'api_externa') DEFAULT 'manual',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (guia_id) REFERENCES guias_rastreo(id) ON DELETE CASCADE,
    FOREIGN KEY (creado_por_usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    INDEX idx_guia (guia_id),
    INDEX idx_estado (estado),
    INDEX idx_fecha (created_at)
);

-- TABLA: imagenes_guia
CREATE TABLE imagenes_guia (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    guia_id BIGINT NOT NULL,
    nombre_archivo VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    tipo ENUM('guia_fisica', 'paquete', 'entrega', 'firma', 'incidencia'),
    tamano_bytes BIGINT,
    mime_type VARCHAR(50),
    orden INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (guia_id) REFERENCES guias_rastreo(id) ON DELETE CASCADE,
    INDEX idx_guia (guia_id),
    INDEX idx_tipo (tipo)
);

-- TABLA: configuracion (variables del sistema)
CREATE TABLE configuracion (
    clave VARCHAR(100) PRIMARY KEY,
    valor TEXT NOT NULL,
    tipo ENUM('string', 'number', 'boolean', 'json') DEFAULT 'string',
    descripcion TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- INSERT configuracion inicial
INSERT INTO configuracion (clave, valor, tipo, descripcion) VALUES
('factor_volumetrico', '400', 'number', 'Factor de conversión para peso volumétrico (cm³/kg)'),
('peso_minimo_liquidacion', '30', 'number', 'Peso mínimo en kg para liquidación'),
('porcentaje_seguro', '1', 'number', 'Porcentaje sobre valor declarado para seguro'),
('seguro_minimo', '5500', 'number', 'Valor mínimo de seguro en COP'),
('iva_porcentaje', '19', 'number', 'Porcentaje de IVA'),
('whatsapp_numero', '+573104567890', 'string', 'Número de WhatsApp para contacto'),
('email_contacto', 'info@rednacionaldetransportes.com', 'string', 'Email de contacto'),
('api_exxe_url', 'https://api.exxe.com/v1', 'string', 'URL base API Exxe'),
('api_exxe_key', '', 'string', 'API Key de Exxe');
```

### 4.3. Endpoints de API REST

```
BASE URL: https://rednacionaldetransportes.com/api/v1

==========================================
AUTENTICACIÓN
==========================================
POST   /auth/register          Registrar nuevo usuario
POST   /auth/login             Iniciar sesión
POST   /auth/logout            Cerrar sesión
POST   /auth/refresh           Refrescar token
POST   /auth/forgot-password   Recuperar contraseña
POST   /auth/reset-password    Resetear contraseña

==========================================
COTIZADOR
==========================================
GET    /ciudades               Listar ciudades con cobertura
GET    /ciudades/:id           Detalle de ciudad
POST   /cotizaciones/calcular  Calcular cotización (sin guardar)
POST   /cotizaciones           Crear y guardar cotización
GET    /cotizaciones/:numero   Consultar cotización por número
GET    /cotizaciones           Listar mis cotizaciones (auth)
DELETE /cotizaciones/:id       Eliminar cotización (auth)

Request calcular cotización:
{
  "origen_codigo": "BOG",
  "destino_codigo": "MED",
  "tipo_servicio": "encomienda",
  "peso_real_kg": 15.5,
  "largo_cm": 50,
  "ancho_cm": 40,
  "alto_cm": 30,
  "valor_declarado": 500000,
  "zona_rural": false,
  "express": false
}

Response:
{
  "success": true,
  "data": {
    "origen": "Bogotá",
    "destino": "Medellín",
    "peso_real_kg": 15.5,
    "peso_volumetrico_kg": 15.0,
    "peso_cobrable_kg": 15.5,
    "flete_base": 45000,
    "seguro": 5500,
    "recargos": 0,
    "descuento": 0,
    "subtotal": 50500,
    "iva": 9595,
    "total": 60095,
    "dias_entrega": 3,
    "valida_hasta": "2026-03-10"
  }
}

==========================================
RASTREO
==========================================
GET    /rastreo/:numero_guia   Rastrear guía (público)
GET    /guias                  Listar mis guías (auth)
GET    /guias/:id              Detalle de guía (auth)
GET    /guias/:id/estados      Historial de estados
GET    /guias/:id/imagenes     Imágenes de la guía

Response rastreo:
{
  "success": true,
  "data": {
    "numero_guia": "RNT-BOG-2026-00001",
    "estado_actual": "en_transito",
    "fecha_recogida": "2026-02-25 10:30:00",
    "fecha_entrega_estimada": "2026-02-28 18:00:00",
    "origen": "Bogotá",
    "destino": "Medellín",
    "destinatario": "Juan Pérez",
    "peso_kg": 15.5,
    "estados": [
      {
        "estado": "creado",
        "ubicacion": "Bogotá",
        "fecha": "2026-02-24 15:00:00",
        "notas": "Guía creada en el sistema"
      },
      {
        "estado": "recogido",
        "ubicacion": "Bogotá - Bodega Principal",
        "fecha": "2026-02-25 10:30:00",
        "notas": "Paquete recogido exitosamente"
      },
      {
        "estado": "en_transito",
        "ubicacion": "En ruta a Medellín",
        "fecha": "2026-02-25 18:00:00",
        "notas": "En tránsito hacia ciudad destino"
      }
    ],
    "imagenes": [
      {
        "tipo": "guia_fisica",
        "url": "https://cdn.rnt.com/guias/001.jpg",
        "fecha": "2026-02-25 10:30:00"
      }
    ]
  }
}

==========================================
PANEL ADMIN
==========================================
GET    /admin/tarifas          Listar tarifas (auth admin)
POST   /admin/tarifas          Crear tarifa (auth admin)
PUT    /admin/tarifas/:id      Actualizar tarifa (auth admin)
DELETE /admin/tarifas/:id      Eliminar tarifa (auth admin)
POST   /admin/tarifas/import   Importar tarifas CSV (auth admin)

GET    /admin/guias            Listar todas las guías (auth admin)
POST   /admin/guias            Crear guía manualmente (auth admin)
PUT    /admin/guias/:id        Actualizar guía (auth admin)
POST   /admin/guias/:id/estado Agregar nuevo estado (auth admin)
POST   /admin/guias/:id/imagen Subir imagen (auth admin)
POST   /admin/guias/import     Importar guías CSV (auth admin)

GET    /admin/cotizaciones     Listar todas las cotizaciones (auth admin)
GET    /admin/estadisticas     Dashboard de estadísticas (auth admin)

==========================================
CONFIGURACIÓN
==========================================
GET    /config                 Configuración pública (whatsapp, email contacto)
GET    /admin/config           Toda la configuración (auth admin)
PUT    /admin/config/:clave    Actualizar configuración (auth admin)

==========================================
INTEGRACIONES EXTERNAS
==========================================
POST   /webhook/exxe           Webhook para actualizaciones de Exxe
POST   /admin/sync/exxe        Sincronizar manualmente con API Exxe (auth admin)
```

### 4.4. Estructura de Carpetas Backend (Laravel)

```
backend/
├── app/
│   ├── Console/
│   │   └── Commands/
│   │       └── SyncExxeCommand.php       # Comando cron para sync
│   ├── Exceptions/
│   │── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── CotizacionController.php
│   │   │   │   ├── RastreoController.php
│   │   │   │   ├── CiudadController.php
│   │   │   │   └── ConfigController.php
│   │   │   └── Admin/
│   │   │       ├── TarifaController.php
│   │   │       ├── GuiaController.php
│   │   │       ├── UsuarioController.php
│   │   │       └── EstadisticaController.php
│   │   ├── Middleware/
│   │   │   ├── IsAdmin.php
│   │   │   └── LogApiRequests.php
│   │   ├── Requests/
│   │   │   ├── CalcularCotizacionRequest.php
│   │   │   ├── CrearGuiaRequest.php
│   │   │   └── ...
│   │   └── Resources/
│   │       ├── CotizacionResource.php
│   │       ├── GuiaResource.php
│   │       └── ...
│   ├── Jobs/
│   │   ├── SendCotizacionEmail.php
│   │   ├── SyncGuiaConExxe.php
│   │   └── ProcessImageUpload.php
│   ├── Models/
│   │   ├── Usuario.php
│   │   ├── Ciudad.php
│   │   ├── Tarifa.php
│   │   ├── Cotizacion.php
│   │   ├── GuiaRastreo.php
│   │   ├── EstadoGuia.php
│   │   ├── ImagenGuia.php
│   │   └── Configuracion.php
│   ├── Services/
│   │   ├── CotizadorService.php          # Lógica de negocio cotizaciones
│   │   ├── RastreoService.php            # Lógica de negocio rastreo
│   │   ├── ExxeApiService.php            # Integración API Exxe
│   │   ├── GelotraApiService.php         # Integración Gelotra
│   │   ├── EmailService.php              # Envío de emails
│   │   └── ImageService.php              # Procesamiento de imágenes
│   └── Traits/
│       └── GeneraNumeros.php             # Trait para generar números únicos
├── bootstrap/
├── config/
│   ├── database.php
│   ├── mail.php
│   ├── services.php                      # APIs externas
│   └── ...
├── database/
│   ├── migrations/
│   │   ├── 2026_02_01_create_usuarios_table.php
│   │   ├── 2026_02_02_create_ciudades_table.php
│   │   ├── 2026_02_03_create_tarifas_table.php
│   │   ├── 2026_02_04_create_cotizaciones_table.php
│   │   ├── 2026_02_05_create_guias_rastreo_table.php
│   │   ├── 2026_02_06_create_estados_guia_table.php
│   │   ├── 2026_02_07_create_imagenes_guia_table.php
│   │   └── 2026_02_08_create_configuracion_table.php
│   ├── seeders/
│   │   ├── CiudadesSeeder.php            # 50+ ciudades de Colombia
│   │   ├── TarifasSeeder.php             # Tarifas 2024 de content-rnt.md
│   │   ├── UsuariosSeeder.php            # Usuario admin inicial
│   │   ├── ConfiguracionSeeder.php
│   │   └── DatabaseSeeder.php
│   └── factories/
│       ├── CotizacionFactory.php
│       └── GuiaRastreoFactory.php
├── public/
│   ├── index.php
│   └── storage/                          # Symlink a storage/app/public
│       └── guias/                        # Imágenes de guías
├── resources/
│   ├── views/
│   │   └── emails/
│   │       ├── cotizacion_confirmacion.blade.php
│   │       └── guia_cambio_estado.blade.php
│   └── lang/
│       ├── es/
│       └── en/
├── routes/
│   ├── api.php                           # Rutas de API
│   ├── web.php                           # Rutas web (si hay frontend también)
│   └── console.php                       # Comandos artisan
├── storage/
│   ├── app/
│   │   ├── public/
│   │   │   └── guias/                    # Imágenes subidas
│   │   └── private/                      # Backups, exports
│ ├── logs/
│   └── framework/
├── tests/
│   ├── Feature/
│   │   ├── CotizacionTest.php
│   │   ├── RastreoTest.php
│   │   └── ...
│   └── Unit/
│       ├── CotizadorServiceTest.php
│       └── ...
├── .env.example
├── .env
├── artisan
├── composer.json
└── phpunit.xml
```

---

## 5. FASE 2: COTIZADOR - PLAN DE IMPLEMENTACIÓN

### 5.1. Funcionalidad del Cotizador

**Usuario ingresa:**
1. Ciudad de origen (dropdown)
2. Ciudad de destino (dropdown)
3. Tipo de servicio (radio buttons: Carga / Encomienda / Mensajería / Express)
4. Peso real en kg
5. Dimensiones: Largo, Ancho, Alto en cm
6. Valor declarado de la mercancía (opcional)
7. ¿Zona rural? (checkbox)

**Sistema calcula automáticamente:**
1. Peso volumétrico = (Largo × Ancho × Alto) ÷ 400
2. Peso conviene_cobrable = Math.max(peso_real, peso_volumétrico)
3. Se busca la tarifa en BD según origen, destino, tipo_servicio
4. Flete base = peso_cobrable × tarifa_por_kg (o flete_minimo si es menor)
5. Seguro = Math.max(valor_declarado × 0.01, 5500)
6. Recargos:
   - Si zona_rural: +20% sobre flete_base
   - Si express: +40% sobre flete_base
7. Subtotal = flete_base + seguro + recargos
8. IVA = subtotal × 0.19 (si aplica)
9. **TOTAL = subtotal + IVA**

**Sistema muestra:**
- Desglose detallado de costos
- Días de entrega estimados
- Opciones de servicios adicionales
- Botón "Solicitar esta cotización"

**Al solicitar:**
- Se guarda en BD con número único (COT-2026-XXXX)
- Se envía email de confirmación con PDF adjunto
- Se ofrece opción de crear cuenta para ver historial

### 5.2. Implementación JavaScript (Frontend)

**Archivo:** `assets/js/cotizador.js`

```javascript
// ===================================
// COTIZADOR EN TIEMPO REAL
// ===================================

const Cotizador = {
  API_URL: 'https://rednacionaldetransportes.com/api/v1',
  
  // Configuración (cargada desde API o config)
  config: {
    factorVolumetrico: 400,
    pesoMinimo: 30,
    porcentajeSeguro: 1,
    seguroMinimo: 5500,
    fleteMinimo: {
      urbano: 25000,
      regional: 35000,
      nacional: 45000
    },
    recargos: {
      zonaRural: 20, // %
      express: 40, // %
      mercancPeligrosa: 30 // %
    }
  },

  // Cargar ciudades al iniciar
  async cargarCiudades() {
    try {
      const response = await fetch(`${this.API_URL}/ciudades`);
      const data = await response.json();
      
      if (data.success) {
        this.llenarDropdowns(data.data);
      }
    } catch (error) {
      console.error('Error cargando ciudades:', error);
    }
  },

  llenarDropdowns(ciudades) {
    const selectOrigen = document.getElementById('origen');
    const selectDestino = document.getElementById('destino');
    
    ciudades.forEach(ciudad => {
      const option = `<option value="${ciudad.codigo}">${ciudad.nombre} - ${ciudad.departamento}</option>`;
      selectOrigen.insertAdjacentHTML('beforeend', option);
      selectDestino.insertAdjacentHTML('beforeend', option);
    });
  },

  // Calcular peso volumétrico
  calcularPesoVolumetrico(largo, ancho, alto) {
    return (largo * ancho * alto) / this.config.factorVolumetrico;
  },

  // Peso que se cobrará
  calcularPesoCobrable(pesoReal, largo, ancho, alto) {
    const pesoVolumetrico = this.calcularPesoVolumetrico(largo, ancho, alto);
    const pesoCobrable = Math.max(pesoReal, pesoVolumetrico);
    
    // Mínimo 30 kg
    return Math.max(pesoCobrable, this.config.pesoMinimo);
  },

  // Calcular cotización automáticamente
  async calcularCotizacion() {
    const formData = this.obtenerDatosFormulario();
    
    if (!this.validarFormulario(formData)) {
      return;
    }

    // Mostrar loader
    document.getElementById('loader-cotizacion').classList.remove('d-none');
    document.getElementById('resultado-cotizacion').classList.add('d-none');

    try {
      const response = await fetch(`${this.API_URL}/cotizaciones/calcular`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        this.mostrarResultado(data.data);
      } else {
        this.mostrarError(data.message || 'Error al calcular cotización');
      }
    } catch (error) {
      console.error('Error:', error);
      this.mostrarError('Error de conexión con el servidor');
    } finally {
      document.getElementById('loader-cotizacion').classList.add('d-none');
    }
  },

  obtenerDatosFormulario() {
    return {
      origen_codigo: document.getElementById('origen').value,
      destino_codigo: document.getElementById('destino').value,
      tipo_servicio: document.querySelector('input[name="tipo_servicio"]:checked').value,
      peso_real_kg: parseFloat(document.getElementById('peso').value),
      largo_cm: parseFloat(document.getElementById('largo').value),
      ancho_cm: parseFloat(document.getElementById('ancho').value),
      alto_cm: parseFloat(document.getElementById('alto').value),
      valor_declarado: parseFloat(document.getElementById('valor_declarado').value || 0),
      zona_rural: document.getElementById('zona_rural').checked,
      express: document.querySelector('input[name="tipo_servicio"]:checked').value === 'express'
    };
  },

  validarFormulario(data) {
    if (!data.origen_codigo || !data.destino_codigo) {
      alert('Por favor selecciona origen y destino');
      return false;
    }

    if (data.peso_real_kg <= 0) {
      alert('El peso debe ser mayor a 0');
      return false;
    }

    if (data.largo_cm <= 0 || data.ancho_cm <= 0 || data.alto_cm <= 0) {
      alert('Las dimensiones deben ser mayores a 0');
      return false;
    }

    return true;
  },

  mostrarResultado(data) {
    const resultadoDiv = document.getElementById('resultado-cotizacion');
    
    resultadoDiv.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Resultado de tu Cotización</h4>
          
          <div class="row">
            <div class="col-md-6">
              <p><strong>Origen:</strong> ${data.origen}</p>
              <p><strong>Destino:</strong> ${data.destino}</p>
              <p><strong>Peso real:</strong> ${data.peso_real_kg} kg</p>
              <p><strong>Peso volumétrico:</strong> ${data.peso_volumetrico_kg.toFixed(2)} kg</p>
              <p><strong>Peso cobrable:</strong> ${data.peso_cobrable_kg.toFixed(2)} kg</p>
            </div>
            <div class="col-md-6">
              <p><strong>Días de entrega:</strong> ${data.dias_entrega} días hábiles</p>
              <p><strong>Válida hasta:</strong> ${data.valida_hasta}</p>
            </div>
          </div>

          <hr>

          <div class="desglose-precios">
            <table class="table">
              <tbody>
                <tr>
                  <td>Flete base</td>
                  <td class="text-end">$${this.formatearPrecio(data.flete_base)}</td>
                </tr>
                <tr>
                  <td>Seguro (1% sobre valor declarado)</td>
                  <td class="text-end">$${this.formatearPrecio(data.seguro)}</td>
                </tr>
                ${data.recargos > 0 ? `
                <tr>
                  <td>Recargos adicionales</td>
                  <td class="text-end">$${this.formatearPrecio(data.recargos)}</td>
                </tr>
                ` : ''}
                ${data.descuento > 0 ? `
                <tr>
                  <td>Descuento</td>
                  <td class="text-end text-success">-$${this.formatearPrecio(data.descuento)}</td>
                </tr>
                ` : ''}
                <tr>
                  <td><strong>Subtotal</strong></td>
                  <td class="text-end"><strong>$${this.formatearPrecio(data.subtotal)}</strong></td>
                </tr>
                ${data.iva > 0 ? `
                <tr>
                  <td>IVA (19%)</td>
                  <td class="text-end">$${this.formatearPrecio(data.iva)}</td>
                </tr>
                ` : ''}
                <tr class="table-primary">
                  <td><h5>TOTAL</h5></td>
                  <td class="text-end"><h5>$${this.formatearPrecio(data.total)}</h5></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-center mt-4">
            <button type="button" class="btn btn-primary btn-lg" onclick="Cotizador.solicitarCotizacion()">
              <i class="bi bi-check-circle"></i> Solicitar esta Cotización
            </button>
          </div>
        </div>
      </div>
    `;

    resultadoDiv.classList.remove('d-none');

    // Guardar data para uso posterior
    this.ultimaCotizacion = data;
  },

  formatearPrecio(numero) {
    return new Intl.NumberFormat('es-CO').format(numero);
  },

  async solicitarCotizacion() {
    // Mostrar modal para datos de contacto si no está autenticado
    const modal = new bootstrap.Modal(document.getElementById('modal-solicitar-cotizacion'));
    modal.show();
  },

  async enviarSolicitud() {
    const formData = {
      ...this.obtenerDatosFormulario(),
      nombre_cliente: document.getElementById('nombre').value,
      email_cliente: document.getElementById('email').value,
      telefono_cliente: document.getElementById('telefono').value,
      empresa_cliente: document.getElementById('empresa').value
    };

    try {
      const response = await fetch(`${this.API_URL}/cotizaciones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        this.mostrarConfirmacion(data.data.numero_cotizacion);
      } else {
        alert('Error al guardar cotización: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    }
  },

  mostrarConfirmacion(numeroCotizacion) {
    alert(`
      ¡Cotización guardada exitosamente!
      
      Número de cotización: ${numeroCotizacion}
      
      Hemos enviado los detalles a tu correo electrónico.
      Nos pondremos en contacto contigo pronto.
    `);
    
    // Cerrar modal
    bootstrap.Modal.getInstance(document.getElementById('modal-solicitar-cotizacion')).hide();
    
    // Limpiar formulario
    document.getElementById('form-cotizador').reset();
    document.getElementById('resultado-cotizacion').classList.add('d-none');
  },

  mostrarError(mensaje) {
    alert(mensaje);
  },

  // Inicializar al cargar página
  init() {
    this.cargarCiudades();
    
    // Event listeners para cálculo automático
    const campos = ['origen', 'destino', 'peso', 'largo', 'ancho', 'alto', 'valor_declarado', 'zona_rural'];
    campos.forEach(campo => {
      const elemento = document.getElementById(campo);
      if (elemento) {
        elemento.addEventListener('change', () => this.calcularCotizacion());
        elemento.addEventListener('input', () => this.calcularCotizacion());
      }
    });

    // Event listener para tipo de servicio
    document.querySelectorAll('input[name="tipo_servicio"]').forEach(radio => {
      radio.addEventListener('change', () => this.calcularCotizacion());
    });

    // Calcular peso volumétrico en tiempo real (mostrar)
    ['largo', 'ancho', 'alto'].forEach(campo => {
      document.getElementById(campo).addEventListener('input', () => {
        this.mostrarPesoVolumetrico();
      });
    });
  },

  mostrarPesoVolumetrico() {
    const largo = parseFloat(document.getElementById('largo').value || 0);
    const ancho = parseFloat(document.getElementById('ancho').value ||0);
    const alto = parseFloat(document.getElementById('alto').value || 0);

    if (largo > 0 && ancho > 0 && alto > 0) {
      const pesoVol = this.calcularPesoVolumetrico(largo, ancho, alto);
      document.getElementById('peso-volumetrico-display').textContent = 
        `Peso volumétrico: ${pesoVol.toFixed(2)} kg`;
    }
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('form-cotizador')) {
    Cotizador.init();
  }
});
```

### 5.3. Implementación Backend (PHP/Laravel)

**Controlador:** `app/Http/Controllers/Api/CotizacionController.php`

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CalcularCotizacionRequest;
use App\Http\Requests\CrearCotizacionRequest;
use App\Services\CotizadorService;
use App\Models\Cotizacion;
use App\Jobs\SendCotizacionEmail;
use Illuminate\Http\JsonResponse;

class CotizacionController extends Controller
{
    protected $cotizadorService;

    public function __construct(CotizadorService $cotizadorService)
    {
        $this->cotizadorService = $cotizadorService;
    }

    /**
     * Calcular cotización sin guardar
     */
    public function calcular(CalcularCotizacionRequest $request): JsonResponse
    {
        try {
            $cotizacion = $this->cotizadorService->calcular($request->validated());

            return response()->json([
                'success' => true,
                'data' => $cotizacion
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Crear y guardar cotización
     */
    public function store(CrearCotizacionRequest $request): JsonResponse
    {
        try {
            $cotizacion = $this->cotizadorService->crear(
                $request->validated()
            );

            // Enviar email en background
            SendCotizacionEmail::dispatch($cotizacion);

            return response()->json([
                'success' => true,
                'data' => [
                    'numero_cotizacion' => $cotizacion->numero_cotizacion,
                    'total' => $cotizacion->total,
                    'valida_hasta' => $cotizacion->valida_hasta
                ],
                'message' => 'Cotización creada exitosamente'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Consultar cotización por número
     */
    public function show(string $numero): JsonResponse
    {
        $cotizacion = Cotizacion::where('numero_cotizacion', $numero)
            ->with(['origen', 'destino'])
            ->first();

        if (!$cotizacion) {
            return response()->json([
                'success' => false,
                'message' => 'Cotización no encontrada'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $cotizacion
        ]);
    }
}
```

**Servicio:** `app/Services/CotizadorService.php`

```php
<?php

namespace App\Services;

use App\Models\Cotizacion;
use App\Models\Ciudad;
use App\Models\Tarifa;
use App\Models\Configuracion;
use Carbon\Carbon;

class CotizadorService
{
    /**
     * Calcular cotización
     */
    public function calcular(array $datos): array
    {
        // 1. Obtener ciudades
        $origen = Ciudad::where('codigo', $datos['origen_codigo'])->firstOrFail();
        $destino = Ciudad::where('codigo', $datos['destino_codigo'])->firstOrFail();

        // 2. Calcular pesos
        $pesoReal = $datos['peso_real_kg'];
        $pesoVolumetrico = $this->calcularPesoVolumetrico(
            $datos['largo_cm'],
            $datos['ancho_cm'],
            $datos['alto_cm']
        );
        $pesoCobrable = max($pesoReal, $pesoVolumetrico);
        $pesoCobrable = max($pesoCobrable, 30); // Mínimo 30 kg

        // 3. Obtener tarifa
        $tarifa = $this->obtenerTarifa(
            $origen->id,
            $destino->id,
            $datos['tipo_servicio']
        );

        // 4. Calcular flete base
        $fleteBase = $this->calcularFleteBase($pesoCobrable, $tarifa, $destino->zona);

        // 5. Calcular seguro
        $seguro = $this->calcularSeguro($datos['valor_declarado'] ?? 0);

        // 6. Calcular recargos
        $recargos = 0;
        if ($datos['zona_rural'] ?? false) {
            $recargos += $fleteBase * 0.20; // 20%
        }
        if ($datos['express'] ?? ($datos['tipo_servicio'] === 'express')) {
            $recargos += $fleteBase * 0.40; // 40%
        }

        // 7. Calcular totales
        $subtotal = $fleteBase + $seguro + $recargos;
        $iva = 0; // O calcular según configuración
        $total = $subtotal + $iva;

        // 8. Días de entrega
        $diasEntrega = $destino->dias_entrega;
        if ($datos['express'] ?? false) {
            $diasEntrega = 1;
        }

        $validaHasta = Carbon::now()->addDays(7)->format('Y-m-d');

        return [
            'origen' => $origen->nombre,
            'destino' => $destino->nombre,
            'peso_real_kg' => $pesoReal,
            'peso_volumetrico_kg' => round($pesoVolumetrico, 2),
            'peso_cobrable_kg' => round($pesoCobrable, 2),
            'flete_base' => round($fleteBase, 2),
            'seguro' => round($seguro, 2),
            'recargos' => round($recargos, 2),
            'descuento' => 0,
            'subtotal' => round($subtotal, 2),
            'iva' => round($iva, 2),
            'total' => round($total, 2),
            'dias_entrega' => $diasEntrega,
            'valida_hasta' => $validaHasta
        ];
    }

    /**
     * Crear y guardar cotización
     */
    public function crear(array $datos): Cotizacion
    {
        // Calcular cotización
        $calculo = $this->calcular($datos);

        // Generar número de cotización
        $numeroCotizacion = $this->generarNumeroCotizacion();

        // Obtener IDs de ciudades
        $origen = Ciudad::where('codigo', $datos['origen_codigo'])->first();
        $destino = Ciudad::where('codigo', $datos['destino_codigo'])->first();

        // Crear cotización
        $cotizacion = Cotizacion::create([
            'numero_cotizacion' => $numeroCotizacion,
            'nombre_cliente' => $datos['nombre_cliente'],
            'email_cliente' => $datos['email_cliente'],
            'telefono_cliente' => $datos['telefono_cliente'] ?? null,
            'empresa_cliente' => $datos['empresa_cliente'] ?? null,
            'origen_id' => $origen->id,
            'destino_id' => $destino->id,
            'tipo_servicio' => $datos['tipo_servicio'],
            'descripcion_contenido' => $datos['descripcion_contenido'] ?? null,
            'peso_real_kg' => $datos['peso_real_kg'],
            'largo_cm' => $datos['largo_cm'],
            'ancho_cm' => $datos['ancho_cm'],
            'alto_cm' => $datos['alto_cm'],
            'peso_volumetrico_kg' => $calculo['peso_volumetrico_kg'],
            'peso_cobrable_kg' => $calculo['peso_cobrable_kg'],
            'valor_declarado' => $datos['valor_declarado'] ?? 0,
            'flete_base' => $calculo['flete_base'],
            'seguro' => $calculo['seguro'],
            'recargos' => $calculo['recargos'],
            'descuento' => 0,
            'total' => $calculo['total'],
            'estado' => 'pendiente',
            'valida_hasta' => Carbon::now()->addDays(7),
            'ip_origen' => request()->ip(),
            'user_agent' => request()->userAgent()
        ]);

        return $cotizacion;
    }

    private function calcularPesoVolumetrico(float $largo, float $ancho, float $alto): float
    {
        $factor = Configuracion::where('clave', 'factor_volumetrico')->value('valor') ?? 400;
        return ($largo * $ancho * $alto) / $factor;
    }

    private function calcularSeguro(float $valorDeclarado): float
    {
        if ($valorDeclarado == 0) {
            return 0;
        }

        $porcentaje = Configuracion::where('clave', 'porcentaje_seguro')->value('valor') ?? 1;
        $minimo = Configuracion::where('clave', 'seguro_minimo')->value('valor') ?? 5500;

        $seguro = $valorDeclarado * ($porcentaje / 100);
        return max($seguro, $minimo);
    }

    private function calcularFleteBase(float $pesoCobrable, Tarifa $tarifa, string $zona): float
    {
        $flete = $pesoCobrable * $tarifa->tarifa_por_kg;
        return max($flete, $tarifa->flete_minimo);
    }

    private function obtenerTarifa(int $origenId, int $destinoId, string $tipoServicio): Tarifa
    {
        $tarifa = Tarifa::where('origen_id', $origenId)
            ->where('destino_id', $destinoId)
            ->where('tipo_servicio', $tipoServicio)
            ->where('activa', true)
            ->whereDate('fecha_vigencia_desde', '<=', Carbon::now())
            ->where(function ($query) {
                $query->whereNull('fecha_vigencia_hasta')
                    ->orWhereDate('fecha_vigencia_hasta', '>=', Carbon::now());
            })
            ->first();

        if (!$tarifa) {
            throw new \Exception('No se encontró tarifa para esta ruta');
        }

        return $tarifa;
    }

    private function generarNumeroCotizacion(): string
    {
        $año = Carbon::now()->year;
        $ultimo = Cotizacion::whereYear('created_at', $año)->count() + 1;
        return sprintf('COT-%d-%04d', $año, $ultimo);
    }
}
```

---

## 6. FASE 3: RASTREO - PLAN DE IMPLEMENTACIÓN

### 6.1. Funcionalidad del Rastreo

1. **Búsqueda de Guía**
   - Input para número de guía (RNT-BOG-2026-00001)
   - Botón "Rastrear"
   - Búsqueda pública (sin login)

2. **Visualización de Estados**
   - Timeline vertical con estados históricos
   - Estado actual destacado
   - Fecha y hora de cada estado
   - Ubicación actual
   - Notas/observaciones

3. **Galería de Imágenes**
   - Imagen de guía física
   - Fotos del paquete
   - Foto de entrega
   - Firma digital

4. **Información del Envío**
   - Datos de remitente y destinatario
   - Descripción del contenido
   - Peso
   - Valor declarado (parcial)
   - Fecha de recogida
   - Fecha de entrega estimada/real

5. **Estados Posibles**
   - 🟡 Creado
   - 🔵 Recogido
   - 🟣 En tránsito
   - 🟠 En bodega origen
   - 🟠 En bodega destino
   - 🔄 En reparto
   - ✅ Entregado
   - 🔴 Devuelto
   - ⚠️ Incidencia

### 6.2. Panel Administrativo

1. **Crear Guía Manualmente**
   - Formulario completo
   - Asignar número único automático
   - Estado inicial: "Creado"

2. **Listar Todas las Guías**
   - Tabla paginada
   - Filtros: estado, fecha, ciudad
   - Búsqueda por número, remitente, destinatario

3. **Actualizar Estado**
   - Dropdown con estados disponibles
   - Campo ubicación
   - Campo notas
   - Timestamp automático

4. **Subir Imágenes**
   - Drag & drop
   - Múltiples imágenes
   - Compresión automática
   - Tipo de imagen (guía, paquete, entrega, etc.)

5. **Importación Masiva (CSV)**
   - Template descargable
   - Validación de datos
   - Creación masiva de guías
   - Reporte de errores

### 6.3. Integración API Exxe (Automática)

1. **Webhook de Exxe**
   - Endpoint: POST /api/v1/webhook/exxe
   - Autenticación por token
   - Procesamiento asíncrono (queue)
   - Validación de datos

2. **Sincronización Periódica**
   - Cron job cada 15 minutos
   - Fetch de actualizaciones de estado
   - Actualización en BD local
   - Log de sincronizaciones

3. **Mapeo de Estados**
   - Mapear estados de Exxe a estados RNT
   - Configurableen panel admin

4. **Notificaciones Automáticas**
   - Email al cliente al cambiar estado
   - SMS opcional (Twilio)
   - Push notifications (futuro)

### 6.4. Implementación Frontend (Rastreo)

**Página:** `rastreo.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rastrear Envío - Red Nacional de Transportes</title>
  <!-- ... CSS ... -->
</head>
<body>
  <!-- Header común -->
  
  <main class="main">
    <div class="page-title">
      <div class="container">
        <h1>Rastrear mi Envío</h1>
        <p>Ingresa el número de guía para conocer el estado actual de tu envío</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- Formulario de búsqueda -->
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow-lg">
              <div class="card-body p-5">
                <form id="form-rastreo">
                  <div class="input-group input-group-lg">
                    <input 
                      type="text" 
                      class="form-control" 
                      id="numero_guia" 
                      placeholder="Ej: RNT-BOG-2026-00001"
                      required
                      pattern="[A-Z0-9-]+"
                    >
                    <button class="btn btn-primary" type="submit">
                      <i class="bi bi-search"></i> Rastrear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Loader -->
        <div id="loader" class="text-center mt-5 d-none">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
          <p class="mt-3">Buscando tu envío...</p>
        </div>

        <!-- Resultado -->
        <div id="resultado-rastreo" class="mt-5 d-none">
          <!-- Se llenará dinámicamente con JavaScript -->
        </div>

        <!-- Error -->
        <div id="error-rastreo" class="alert alert-danger mt-5 d-none">
          <!-- Mensaje de error -->
        </div>
      </div>
    </section>
  </main>

  <!-- Footer común -->

  <script src="assets/js/rastreo.js"></script>
</body>
</html>
```

**JavaScript:** `assets/js/rastreo.js`

```javascript
const Rastreo = {
  API_URL: 'https://rednacionaldetransportes.com/api/v1',

  async buscarGuia(numeroGuia) {
    this.mostrarLoader();

    try {
      const response = await fetch(`${this.API_URL}/rastreo/${numeroGuia}`);
      const data = await response.json();

      if (data.success) {
        this.mostrarResultado(data.data);
      } else {
        this.mostrarError(data.message || 'Guía no encontrada');
      }
    } catch (error) {
      console.error('Error:', error);
      this.mostrarError('Error de conexión con el servidor');
    } finally {
      this.ocultarLoader();
    }
  },

  mostrarResultado(guia) {
    const resultadoDiv = document.getElementById('resultado-rastreo');
    
    resultadoDiv.innerHTML = `
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">
            <i class="bi bi-box-seam"></i> Guía #${guia.numero_guia}
          </h4>
        </div>
        <div class="card-body">
          <!-- Estado actual destacado -->
          <div class="alert alert-${this.getColorEstado(guia.estado_actual)} text-center">
            <h5 class="mb-0">
              ${this.getIconoEstado(guia.estado_actual)} 
              Estado actual: <strong>${this.getNombreEstado(guia.estado_actual)}</strong>
            </h5>
          </div>

          <div class="row">
            <!-- Información del envío -->
            <div class="col-md-6">
              <h6><i class="bi bi-info-circle"></i> Información del Envío</h6>
              <ul class="list-unstyled">
                <li><strong>Origen:</strong> ${guia.origen}</li>
                <li><strong>Destino:</strong> ${guia.destino}</li>
                <li><strong>Destinatario:</strong> ${guia.destinatario}</li>
                <li><strong>Peso:</strong> ${guia.peso_kg} kg</li>
                ${guia.fecha_recogida ? `
                <li><strong>Fecha recogida:</strong> ${this.formatearFecha(guia.fecha_recogida)}</li>
                ` : ''}
                ${guia.fecha_entrega_estimada ? `
                <li><strong>Entrega estimada:</strong> ${this.formatearFecha(guia.fecha_entrega_estimada)}</li>
                ` : ''}
              </ul>
            </div>

            <!-- Timeline de estados -->
            <div class="col-md-6">
              <h6><i class="bi bi-clock-history"></i> Historial de Estados</h6>
              <div class="timeline">
                ${this.generarTimeline(guia.estados)}
              </div>
            </div>
          </div>

          <!-- Galería de imágenes -->
          ${guia.imagenes && guia.imagenes.length > 0 ? `
          <hr>
          <h6><i class="bi bi-images"></i> Imágenes del Envío</h6>
          <div class="row g-2">
            ${guia.imagenes.map(img => `
              <div class="col-6 col-md-3">
                <a href="${img.url}" class="glightbox">
                  <img src="${img.url}" class="img-fluid rounded" alt="${img.tipo}">
                  <p class="text-center"><small>${this.getNombreTipoImagen(img.tipo)}</small></p>
                </a>
              </div>
            `).join('')}
          </div>
          ` : ''}
        </div>
      </div>
    `;

    resultadoDiv.classList.remove('d-none');
    document.getElementById('error-rastreo').classList.add('d-none');

    // Reinicializar GLightbox
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    }
  },

  generarTimeline(estados) {
    return estados.map((estado, index) => `
      <div class="timeline-item ${index === 0 ? 'active' : ''}">
        <div class="timeline-marker">
          ${this.getIconoEstado(estado.estado)}
        </div>
        <div class="timeline-content">
          <strong>${this.getNombreEstado(estado.estado)}</strong><br>
          <small class="text-muted">${this.formatearFecha(estado.fecha)}</small><br>
          ${estado.ubicacion ? `<small><i class="bi bi-geo-alt"></i> ${estado.ubicacion}</small><br>` : ''}
          ${estado.notas ? `<small>${estado.notas}</small>` : ''}
        </div>
      </div>
    `).join('');
  },

  getNombreEstado(estado) {
    const nombres = {
      'creado': 'Creado',
      'recogido': 'Recogido',
      'en_transito': 'En Tránsito',
      'en_bodega_origen': 'En Bodega de Origen',
      'en_bodega_destino': 'En Bodega de Destino',
      'en_reparto': 'En Reparto',
      'entregado': 'Entregado',
      'devuelto': 'Devuelto',
      'incidencia': 'Incidencia'
    };
    return nombres[estado] || estado;
  },

  getIconoEstado(estado) {
    const iconos = {
      'creado': '📝',
      'recogido': '📦',
      'en_transito': '🚚',
      'en_bodega_origen': '🏢',
      'en_bodega_destino': '🏢',
      'en_reparto': '🛵',
      'entregado': '✅',
      'devuelto': '↩️',
      'incidencia': '⚠️'
    };
    return iconos[estado] || '•';
  },

  getColorEstado(estado) {
    const colores = {
      'creado': 'secondary',
      'recogido': 'info',
      'en_transito': 'primary',
      'en_bodega_origen': 'warning',
      'en_bodega_destino': 'warning',
      'en_reparto': 'info',
      'entregado': 'success',
      'devuelto': 'danger',
      'incidencia': 'danger'
    };
    return colores[estado] || 'secondary';
  },

  getNombreTipoImagen(tipo) {
    const nombres = {
      'guia_fisica': 'Guía',
      'paquete': 'Paquete',
      'entrega': 'Entrega',
      'firma': 'Firma',
      'incidencia': 'Incidencia'
    };
    return nombres[tipo] || tipo;
  },

  formatearFecha(fecha) {
    return new Date(fecha).toLocaleString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  mostrarLoader() {
    document.getElementById('loader').classList.remove('d-none');
    document.getElementById('resultado-rastreo').classList.add('d-none');
    document.getElementById('error-rastreo').classList.add('d-none');
  },

  ocultarLoader() {
    document.getElementById('loader').classList.add('d-none');
  },

  mostrarError(mensaje) {
    const errorDiv = document.getElementById('error-rastreo');
    errorDiv.textContent = mensaje;
    errorDiv.classList.remove('d-none');
    document.getElementById('resultado-rastreo').classList.add('d-none');
  },

  init() {
    const form = document.getElementById('form-rastreo');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const numeroGuia = document.getElementById('numero_guia').value.trim().toUpperCase();
        if (numeroGuia) {
          this.buscarGuia(numeroGuia);
        }
      });
    }

    // Rastreo desde URL (?guia=RNT-BOG-2026-00001)
    const urlParams = new URLSearchParams(window.location.search);
    const guiaParam = urlParams.get('guia');
    if (guiaParam) {
      document.getElementById('numero_guia').value = guiaParam;
      this.buscarGuia(guiaParam);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Rastreo.init();
});
```

---

## 7. DEPLOYMENT CHECKLIST

### ✅ Pre-Deployment

- [ ] Todos los tests pasando (unitarios + integración)
- [ ] Lighthouse score >85 en todas las páginas
- [ ] Validación HTML/CSS sin errores críticos
- [ ] Imágenes optimizadas (WebP, compresión)
- [ ] CSS/JS minificados
- [ ] Caché configurado (.htaccess o nginx.conf)
- [ ] robots.txt y sitemap.xml generados
- [ ] Favicon y app icons listos
- [ ] 404 y 500 páginas de error personalizadas
- [ ] Base de datos con datos de producción
- [ ] Credenciales de APIs externas (Exxe, Gelotra)
- [ ] SMTP configurado para emails
- [ ] Backup estrategia definida

### ✅ Servidor

- [ ] Dominio registrado y apuntando
- [ ] Certificado SSL instalado (Let's Encrypt)
- [ ] PHP 8+ o Node.js 18+ instalado
- [ ] MySQL/PostgreSQL configurado
- [ ] Redis instalado (para queues y cache)
- [ ] Composer/npm dependencies instaladas
- [ ] Permisos de archivos correctos (755/644)
- [ ] Storage/uploads folders writable
- [ ] Cron jobs configurados (sync, backups)
- [ ]  Firewall configurado
- [ ] Logs rotados y monitoreados

### ✅ Post-Deployment

- [ ] Verificar todas las páginas cargan
- [ ] Probar formularios (contacto, cotización)
- [ ] Probar rastreo de guía
- [ ] Probar panel admin
- [ ] Verificar emails se envían correctamente
- [ ] Google Analytics conectado
- [ ] Search Console configurado
- [ ] Monitoreo de uptime activo
- [ ] Capacitación al equipo RNT
- [ ] Manual entregado
- [ ] Handoff completo

---

## 8. RESUMEN EJECUTIVO

### Estado Actual (25 Feb 2026)
- ✅ **Frontend:** 70% completo (template base, 8 páginas HTML)
- ⏳ **Backend:** 0% (por iniciar urgente)
- ⏳ **Cotizador:** 15% (formulario HTML listo, falta backend y lógica) 
- ⏳ **Rastreo:** 5% (estructura mínima)
- ❌ **WhatsApp/Redes:** 0%
- ❌ **Login:** 0%
- ❌ **Bilingüe:** 0%

### Próximos 30 Días (Marzo 2026)
1. **Semana 1-2:** Completar Fase 1 (Diseño)
2. **Semana 3-4:** Iniciar Backend + BD + Fase 2 (Cotizador)

### Próximos 90 Días (Feb-Mayo 2026)
- **Marzo:** Fase 1 + Inicio Fase 2
- **Abril:** Completar Fase 2 (Cotizador) + Inicio Fase 3 (Rastreo)
- **Mayo:** Completar Fase 3 (Rastreo) + Fase 4 (WhatsApp/Redes)

### Lanzamiento Estimado  
**Junio 15, 2026** 🚀

---

**FIN DEL ROADMAP**  
**Documento listo para ejecución inmediata** ✅
