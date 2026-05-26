# KAIZEN — GUIÓN Y DISEÑO DE DIAPOSITIVAS
**Defensa presencial · DAM 2 · STUCOM**

---

## ESTRUCTURA GENERAL

| Bloque | Tiempo |
|---|---|
| Presentación con slides | ~12 min |
| Demo en vivo (bloque separado) | ~12 min |
| **Total** | **~24 min** |

---

## PALETA DE COLORES (toda la presentación)

| Uso | Color | Hex |
|---|---|---|
| Fondo | Onyx | `#0B0A0F` |
| Contenedores / cards | Shadow Grey | `#242328` |
| Acento primario | Crayola Blue | `#2979FF` |
| Éxito / logros | Malachite | `#00E676` |
| Error / no logrado | Blazing Flame | `#FF3D00` |
| Texto general | Alabaster Grey | `#E5E5E7` |

**Tipografía:** Oswald Bold (títulos) · Inter Regular/Medium (cuerpo)

---

# BLOQUE 1 — PRESENTACIÓN CON SLIDES (~12 min)

## Timing por slide

| Slide | Contenido | Tiempo |
|---|---|---|
| 1 | Portada | 0:15 |
| 2 | El equipo | 0:45 |
| 3 | El problema | 0:45 |
| 4 | Solución + Features | 1:30 |
| 5 | Stack tecnológico | 1:15 |
| 6 | Arquitectura del sistema | 1:30 |
| 7 | Base de datos + Algoritmo | 1:15 |
| 8 | API REST | 1:00 |
| 9 | Pruebas técnicas | 1:30 |
| 10 | Conclusiones | 1:45 |
| 11 | V3 Roadmap | 0:30 |
| 12 | Cierre | 0:15 |
| **Total** | | **~11:15** |

---

## GUIÓN — SLIDES
*J = John · Z = Zyrl*
*Las frases entre comillas son anclas — decirlas más o menos exactamente.*
*El resto, con vuestras propias palabras siguiendo los puntos.*

---

### [SLIDE 1 — Portada] · ~15 seg

**Z:** Buenos días. Somos Zyrl y John, DAM 2 de STUCOM.
Hoy os presentamos Kaizen, nuestra app de seguimiento de entrenamiento.

---

### [SLIDE 2 — El equipo] · ~45 seg

**Z:** Yo soy Zyrl, me he centrado en el frontend. Kotlin, Jetpack Compose,
todo lo que veis en pantalla es mío.
Mi objetivo profesional es el desarrollo móvil con Flutter.

**J:** Y yo soy John, backend. La API, la base de datos, la seguridad.
También me interesa el desarrollo multiplataforma con Flutter.

*(pausa breve — dejar que el evaluador lea los LinkedIn si quiere)*

---

### [SLIDE 3 — El problema] · ~45 seg

**Z:** Para entender Kaizen hay que entender el problema.
Los que entrenáis en serio sabéis que llevar un registro preciso es un caos.
Hay gente que usa Excel, otros van de memoria,
y los que descargan apps se encuentran con dos problemas típicos.

*(señalar las tres cards)*

"O son demasiado simples y no tienen analíticas, o tienen tanta
funcionalidad que abrir la app es más cansado que entrenar.
Y Hevy, que es la más popular ahora mismo, ha añadido un feed social
que muchos usuarios consideran una distracción."

"El mercado tiene apps. Ninguna hace una sola cosa perfectamente."

---

### [SLIDE 4 — Solución + Features] · ~1 min 30 seg

**Z:** Kaizen es nuestra respuesta.
El nombre viene del concepto japonés de mejora continua.
Tres principios definen la app.

*(señalar cada pill)*

- Zero friction: "la interfaz desaparece cuando entrenas, solo ves los datos"
- Progressive overload: "siempre sabes cuánto cargaste la semana pasada"
- No social clutter: "sin feed, sin seguidores, sin gamificación"

*(señalar las seis cards)*

"Las funcionalidades principales son estas seis:
el Workout Logger con Zen Mode y detección automática de PRs,
el Routine Builder en tres pasos con drag-and-drop,
el Analytics Lab con más de diez gráficas,
el dashboard personalizable con widgets offline-first,
Google OAuth con Credential Manager,
y como máximo académico, un prototipo de IA en Flask
que genera rutinas desde lenguaje natural."

---

### [SLIDE 5 — Stack tecnológico] · ~1 min 15 seg

**J:** A nivel técnico, tenemos dos repositorios separados.

*(señalar columna frontend)*
"El frontend es Android nativo en Kotlin con Jetpack Compose.
Usamos Hilt para inyección de dependencias,
Retrofit para las llamadas a la API,
Room para la base de datos local,
y WorkManager para sincronización en background."

*(señalar columna backend)*
"El backend es Java 17 con Spring Boot 3.
Spring Security para la autenticación, JWT stateless,
BCrypt para las contraseñas, Google OAuth Client,
y JavaMailSender para los emails automáticos.
La base de datos es MySQL en TiDB Cloud,
y las fotos se guardan en DigitalOcean Spaces."

*(señalar footer)*
"Y aparte, como prototipo independiente, Python 3 con Flask para la IA."

---

### [SLIDE 6 — Arquitectura] · ~1 min 30 seg

**J:** La arquitectura sigue Clean Architecture en el frontend
y tres capas en el backend.

*(señalar diagrama frontend)*
"En el frontend: capa de presentación con los Composables y ViewModels,
capa de dominio con los UseCases y las interfaces de repositorio,
y capa de datos con Retrofit y Room.
Cada capa solo conoce la de abajo, nunca la de arriba.
En términos de clases esto significa que cada ViewModel
solo conoce su UseCase, y cada UseCase solo conoce el repositorio."

*(señalar flecha central)*
"La comunicación con el backend es completamente stateless.
Cada request lleva un JWT en el header.
El servidor lo verifica, extrae el userId, y responde.
No hay estado de sesión en el servidor."

*(señalar diagrama backend)*
"En el backend: controladores que reciben las requests,
servicios con la lógica de negocio,
y repositorios que abstraen la base de datos con Spring Data JPA."

*(señalar badges)*
"Y el dashboard tiene comportamiento offline-first:
los datos se cachean en Room y WorkManager
los sincroniza silenciosamente cuando hay conexión."

---

### [SLIDE 7 — Base de datos + Algoritmo] · ~1 min 15 seg

**J:** La base de datos tiene nueve tablas. La jerarquía es clara.

*(señalar ERD)*
"Un usuario crea Training Plans, que contienen Routines,
que se ejecutan como Workouts, que almacenan WorkoutSets."

*(señalar N:M)*
"La relación más interesante es la N:M entre Routines y Exercises.
Se resuelve con la tabla intermedia RoutineExercises,
que no es solo un puente: también guarda el orden de los ejercicios,
las series objetivo y el descanso entre series."

*(señalar card Epley)*
"Y cada vez que el usuario guarda una serie, el sistema calcula
el 1RM estimado con la fórmula de Epley.
Si supera el máximo histórico de ese ejercicio para ese usuario,
la serie se marca automáticamente como PR."

---

### [SLIDE 8 — API REST] · ~1 min

**J:** La API tiene treinta y ocho endpoints en diez grupos.

*(señalar tabla)*
"Las únicas rutas públicas son las de autenticación:
registro, login y Google OAuth.
Todo lo demás requiere el Bearer token en el header."

*(señalar badges)*
"Para validar que todo funciona, construimos una colección de Postman
con ciento veinte assertions automatizadas:
códigos de estado, tiempos de respuesta, esquemas de respuesta,
y que los endpoints protegidos devuelven 401 sin token."

---

### [SLIDE 9 — Pruebas técnicas] · ~1 min 30 seg

**J:** En cuanto a las pruebas técnicas, cubrimos tres áreas.

*(señalar Postman)*
"La colección de Postman ya la hemos mencionado.
Aquí podéis ver los tests en verde con sus assertions."

*(señalar validación)*
"La validación de formularios funciona en dos capas:
el frontend valida antes de hacer ninguna request,
y el backend aplica las mismas reglas con Spring Validation
y devuelve un 400 con mensaje de error si algo no es correcto."

*(señalar seeding)*
"Y para testear las gráficas con datos realistas,
creamos un script SQL que genera tres perfiles de atleta distintos
con cuarenta y ocho entrenamientos de enero a mayo.
El script usa INSERT IGNORE, así que se puede ejecutar
varias veces sin romper nada."

---

### [SLIDE 10 — Conclusiones] · ~1 min 45 seg

**Z:** En cuanto a objetivos.

*(señalar columna verde)*
"Todos los mínimos completados:
el ciclo de entrenamiento completo,
JWT con BCrypt, base de datos relacional,
y multiidioma en inglés, español y catalán."

"De los máximos, hemos completado las analíticas avanzadas,
el dashboard personalizable, los seis tipos de series,
Google OAuth, los emails automáticos,
la colección de Postman, el seeding de datos,
y el prototipo de IA en Flask."

*(señalar columna roja)*
"Lo que no está en esta versión son los temas visuales,
el CI/CD, y la integración nativa de la IA.
Esta última fue una decisión consciente:
queríamos demostrar que el concepto funciona
sin añadir una funcionalidad a medias."

**J:** *(señalar problemas resueltos)*
"Los tres problemas más relevantes que resolvimos:
el rechazo de tokens de Google OAuth por un mismatch de client ID,
el dashboard que no se actualizaba al terminar un entreno
que solucionamos con WorkManager,
y la confusión de navegación en Workouts
que resolvimos con un empty state rediseñado."

---

### [SLIDE 11 — V3 Roadmap] · ~30 seg

**Z:** Para V3 tenemos cinco líneas claras.

*(señalar cada card rápidamente)*
"Integración nativa de la IA,
export a CSV del historial,
modo offline completo para el logger,
temas visuales alternativos,
y el pipeline de CI/CD con GitHub Actions.
La arquitectura del backend ya está preparada."

---

### [SLIDE 12 — Cierre] · ~15 seg

**J:** Aquí tenéis los QR con los repositorios y el vídeo.

**Z:** Gracias. Ahora pasamos a la demo.

---

---

# BLOQUE 2 — DEMO EN VIVO (~12 min)

*Sin slides. App abierta en el emulador.*
*El objetivo es mostrar cada pantalla y explicar qué hay detrás técnicamente,*
*sin entrar en líneas de código concretas.*

---

## Timing demo

| Pantalla | Tiempo |
|---|---|
| Start / Login / Register | 1:30 |
| Calibración (onboarding) | 0:45 |
| Dashboard | 1:30 |
| Workout Planning (Planes y Rutinas) | 2:30 |
| Active Workout — Zen Mode | 2:30 |
| Post-workout Summary + Email | 0:45 |
| Statistics | 1:30 |
| Settings | 0:30 |
| **Total** | **~11:30** |

---

## GUIÓN — DEMO

### Start / Login / Register · ~1 min 30 seg

*(Abrir app, mostrar Start screen)*

**Z:** "Esta es la pantalla de inicio. El usuario tiene dos opciones:
registrarse o hacer login.
Tanto el login como el registro soportan dos métodos:
email y contraseña, o Google Sign-In."

*(Ir a Register, mostrar formulario)*

**Z:** "El formulario de registro valida los inputs en dos capas.
Aquí en el frontend, antes de hacer ninguna llamada a la API,
Jetpack Compose comprueba que el email tiene formato válido,
que la contraseña tiene mínimo ocho caracteres,
y que los dos campos de contraseña coinciden."

*(Mostrar botón Google)*

**J:** "Si el usuario elige Google, el sistema usa el Credential Manager de Android
para presentar el selector de cuentas.
El ID Token que devuelve Google se envía al backend,
que lo verifica con GoogleIdTokenVerifier.
El endpoint maneja tres casos automáticamente:
cuenta nueva, cuenta existente que se vincula,
y bloqueo de login por contraseña si la cuenta fue creada con Google."

---

### Calibración · ~45 seg

*(Registrar cuenta nueva, llegar a Calibration screen)*

**Z:** "Después del primer registro, el usuario llega aquí.
Esta pantalla recoge las preferencias iniciales:
sistema de unidades, KG o LB,
y método de esfuerzo, RPE o RIR."

**J:** "Estos datos se envían con un PUT a /api/users/me
y se persisten en la tabla Users de la base de datos.
A partir de aquí, toda la app respeta estas preferencias."

---

### Dashboard · ~1 min 30 seg

*(Llegar al Dashboard)*

**Z:** "Este es el Dashboard. Es el punto de entrada principal de la app.
Está construido sobre un sistema de widgets modulares.
Cada widget es un componente independiente que consume su propio endpoint."

*(Señalar los widgets)*

**Z:** "Tenemos ocho widgets disponibles: próximo entrenamiento,
calendario de entrenamiento, peso corporal, racha, volumen semanal,
PRs recientes, sesiones totales y duración media."

*(Entrar en Edit Mode)*

**Z:** "El usuario puede entrar en modo edición para añadir,
eliminar y reordenar los widgets con drag-and-drop.
El orden se guarda en el backend a través de
/api/preferences/dashboard."

**J:** "Y el layout se persiste localmente en Room,
lo que da un comportamiento offline-first:
si no hay conexión, el dashboard carga desde el cache local.
WorkManager se encarga de sincronizar con el servidor
en background cuando la conectividad se restaura."

---

### Workout Planning — Planes y Rutinas · ~2 min 30 seg

*(Ir a tab Workouts)*

**Z:** "Esta es la pantalla de Workouts.
La estructura de entrenamiento tiene dos niveles:
Training Plans y Routines.
Un plan es el contenedor, por ejemplo 'Push Pull Legs'.
Las rutinas son las sesiones individuales dentro del plan."

*(Mostrar empty state)*

**Z:** "Cuando la pantalla está vacía, mostramos este estado guiado.
Fue una decisión de UX directa: en las pruebas de usabilidad
los usuarios se perdían sin esta guía."

*(Crear un Training Plan)*

**Z:** "Crear un plan tiene dos pasos:
nombre y descripción, y tipo de scheduling.
El sistema soporta tres modos:
Weekly con días fijos de la semana,
Interval con frecuencia cada N días,
y Cycle con un bucle personalizado."

**J:** "A nivel de base de datos, el plan se guarda en TrainingPlans
con su PlanIntervalType como enum."

*(Crear una Routine dentro del plan)*

**Z:** "Crear una rutina sigue un flujo de tres pasos.
El primero es nombre y descripción,
el segundo el scheduling específico de esa rutina,
y el tercero añadir ejercicios desde el catálogo."

*(Abrir Exercise Catalog, mostrar filtros)*

**Z:** "El catálogo permite filtrar por grupo muscular y tipo de equipo.
El usuario también puede crear ejercicios personalizados.
Internamente, los ejercicios tienen dos tipos:
builtin, referenciados por una clave de texto,
y custom, referenciados por UUID.
Ambos coexisten en la misma tabla de RoutineExercises."

*(Añadir ejercicios, mostrar drag-and-drop)*

**Z:** "El orden se gestiona con un campo orderIndex en RoutineExercises,
que se actualiza con un PUT a /api/routines/{id}/exercises
reemplazando la lista completa."

---

### Active Workout — Zen Mode · ~2 min 30 seg

*(Iniciar entrenamiento desde la rutina)*

**Z:** "Al iniciar un entreno, se crea un registro Workout en la base de datos
con el timestamp de inicio.
Esta pantalla es lo que llamamos Zen Mode.
La barra de navegación inferior desaparece para eliminar distracciones."

*(Mostrar la pantalla de entrenamiento)*

**Z:** "Para cada ejercicio el usuario registra sets:
peso, repeticiones, y valor de esfuerzo con RPE o RIR
según la preferencia configurada en la calibración.
También puede seleccionar el tipo de serie:
Normal, Warmup, Drop Set, Super Set, Failure o Myo-Rep."

**J:** "Cada set que se guarda desencadena el cálculo del 1RM estimado
con la fórmula de Epley.
El sistema compara ese valor con el máximo histórico
del mismo ejercicio para ese usuario.
Si es mayor, el set se marca como PR automáticamente
con el flag isPR en WorkoutSets."

*(Marcar un set como completado, mostrar la detección de PR si aparece)*

**Z:** "El timer de descanso arranca automáticamente
cuando se completa un set.
El valor por defecto viene de la preferencia del usuario,
pero se puede ajustar en cualquier momento."

*(Finalizar el entreno)*

**J:** "Al finalizar, se envía el WorkoutRequest completo
con un POST a /api/workouts.
El backend guarda el Workout y todos los WorkoutSets
en una sola transacción."

---

### Post-workout Summary + Email · ~45 seg

*(Mostrar Summary screen)*

**Z:** "La pantalla de resumen muestra el volumen total en kg,
la duración de la sesión, los sets completados,
y los PRs nuevos conseguidos."

**J:** "Al mismo tiempo, el backend dispara un email automático
usando JavaMailSender con los datos de la sesión:
rutina, tonelaje, tiempo activo y series totales.
Aquí podéis ver un ejemplo del email recibido."

*(Mostrar el email si hay conexión, o la captura de pantalla)*

---

### Statistics · ~1 min 30 seg

*(Ir a tab Statistics)*

**J:** "La pantalla de estadísticas está organizada en cuatro secciones temáticas.
Todas las métricas las calcula el backend con JPQL queries
y las expone a través de endpoints dedicados.
El frontend renderiza los datos con la librería Vico Charts.
Todos los gráficos aceptan un filtro de rango de fechas."

*(Ir por cada sección rápidamente)*

**J:** "Strength & Health: tendencia de peso corporal y progresión de 1RM por ejercicio."

*(Mostrar el gráfico de 1RM)*

**J:** "Hypertrophy & Overload: volumen semanal en barras,
distribución de rep ranges entre fuerza, hipertrofia y resistencia,
y frecuencia muscular en un radar chart."

*(Mostrar brevemente)*

**J:** "Efficiency & Fatigue: correlación entre RPE y volumen por sesión,
eficiencia de sesión, y densidad de tiempos de descanso."

**J:** "Y Discipline & Habits: el activity heatmap estilo GitHub,
el PR heatmap, y el PR peak time
que muestra a qué hora del día el usuario tiende a batir récords."

---

### Settings · ~30 seg

*(Ir a Settings)*

**Z:** "La pantalla de Settings permite cambiar las preferencias de entrenamiento
en cualquier momento: unidades, método de esfuerzo y timer de descanso.
Y aquí está implementado el soporte multiidioma:
inglés, español y catalán,
gestionado con XML string resource files de Android."

*(Cambiar idioma para demostrarlo si hay tiempo)*

---

---

# INSTRUCCIONES DE DISEÑO POR DIAPOSITIVA

---

### SLIDE 1 — Portada

```
FONDO: #0B0A0F lleno

[Centrado vertical y horizontal]
  Logo dumbbell Kaizen — 100px
  "KAIZEN" — Oswald Bold 72px, blanco
  "Gym Tracking App" — Inter 18px, #E5E5E7
  espacio 20px
  "Software Architecture & Implementation Manual — V2"
  Inter 13px, #E5E5E7, opacidad 60%

[Footer izquierda]
  "DAM 2 · STUCOM · 2026" — Inter 12px, #E5E5E7, opacidad 50%

[Footer derecha]
  "John Henard Salango · Zyrl Justin Suárez Untalan"
  Inter 12px, #E5E5E7, opacidad 50%
```

---

### SLIDE 2 — El equipo

```
FONDO: #0B0A0F

[Header arriba izquierda]
  "THE TEAM" — Oswald Bold 40px, blanco

[Dos columnas iguales — línea vertical separadora #242328 1px]

COLUMNA IZQUIERDA — Zyrl:
  · Foto circular 90px
  · "ZYRL JUSTIN SUÁREZ UNTALAN" — Oswald Bold 20px
  · Badge "Frontend Focus" — fondo #2979FF, Inter 12px
  · Icono LinkedIn + URL — Inter 12px, #E5E5E7
  · "Passionate about clean UI and zero-friction mobile experiences."
    Inter 13px, italic

COLUMNA DERECHA — John:
  · Mismo formato
  · Badge "Backend Focus"
  · "I enjoy building reliable systems and solving complex logic problems."
```

---

### SLIDE 3 — El problema

```
FONDO: #0B0A0F

[Header]
  "THE PROBLEM" — Oswald Bold 40px

[Cita centrada]
  "Most lifters plateau not from lack of effort, but from lack of data."
  Inter 20px italic, #E5E5E7

[3 cards horizontales — fondo #242328, border-radius 8px, padding 20px]

  CARD 1 — Icono spreadsheet
    "Manual Tracking" — Oswald 18px
    "Spreadsheets and memory are error-prone and slow." — Inter 13px

  CARD 2 — Icono feed
    "Social Clutter" — Oswald 18px
    "Apps like Hevy prioritize community over performance." — Inter 13px

  CARD 3 — Icono menú
    "Feature Bloat" — Oswald 18px
    "Tools like Jefit make starting a workout more tiring than training." — Inter 13px

[Footer centrado]
  "The market has apps. None of them does ONE thing perfectly."
  Inter 13px, #2979FF
```

---

### SLIDE 4 — Solución + Funcionalidades

```
FONDO: #0B0A0F

[MITAD SUPERIOR]
  Layout 35% izquierda / 65% derecha

  IZQUIERDA:
    Logo 70px
    "KAIZEN" — Oswald Bold 44px, blanco
    "Your personal strength tracker" — Inter 15px, #E5E5E7
    3 pills — fondo #2979FF, blanco, Inter 13px:
      · "Zero Friction"
      · "Progressive Overload"
      · "No Social Clutter"

  DERECHA:
    Screenshot real del Dashboard
    Border-radius 12px

[Separador horizontal #242328 1px]

[MITAD INFERIOR]
  "CORE FEATURES" — Oswald Bold 24px, izquierda

  Grid 2×3 de cards — fondo #242328, borde izquierdo #2979FF 3px
  Título Oswald 16px / descripción Inter 12px

  · "Workout Logger" — "Zen Mode with live timer and PR detection"
  · "Routine & Plan Builder" — "3-step guided creation, drag-and-drop"
  · "Analytics Lab" — "10+ charts: 1RM, volume, muscle frequency"
  · "Custom Dashboard" — "Widget grid with offline-first WorkManager sync"
  · "Google OAuth + Emails" — "Credential Manager + post-workout email"
  · "AI Prototype (Flask PoC)" — "Natural language → structured workout plan"
```

---

### SLIDE 5 — Stack tecnológico

```
FONDO: #0B0A0F

[Header]
  "TECH STACK" — Oswald Bold 40px

[3 columnas — fondo #242328, border-radius 8px]

  COL 1 — Badge "FRONTEND" (#2979FF)
    Kotlin + Jetpack Compose · Hilt (DI)
    Retrofit + OkHttp · Room Database
    WorkManager · Vico Charts · Credential Manager

  COL 2 — Badge "BACKEND" (#2979FF)
    Java 17 · Spring Boot 3
    Spring Security + JWT · BCrypt
    Google OAuth Client · JavaMailSender
    MySQL / TiDB Cloud

  COL 3 — Badge "INFRASTRUCTURE" (#2979FF)
    TiDB Cloud (MySQL)
    DigitalOcean Spaces (S3)
    Jira + GitHub · Postman

[Footer pill — fondo #242328]
  "AI Prototype: Python 3 + Flask — Standalone PoC"
```

---

### SLIDE 6 — Arquitectura del sistema

```
FONDO: #0B0A0F

[Header]
  "SYSTEM ARCHITECTURE" — Oswald Bold 40px

[3 bloques horizontales]

BLOQUE IZQ — "ANDROID APP" (label #2979FF)
  Fondo #242328, 4 capas con flechas ↓:
  ┌─────────────────────────────┐
  │ Presentation Layer          │  Compose + ViewModels
  ├─────────────────────────────┤
  │ Domain Layer                │  UseCases + Repository Interfaces
  ├─────────────────────────────┤
  │ Data Layer                  │  Retrofit + Room + Repo Impl
  ├─────────────────────────────┤
  │ Network / Local DB          │  API + Room Database
  └─────────────────────────────┘

FLECHA CENTRAL ↔ — #2979FF, grosor 3px
  Label: "REST API"
  Sub-label: "Authorization: Bearer <token>"

BLOQUE DER — "SPRING BOOT API" (label #2979FF)
  Fondo #242328, 3 capas:
  ┌─────────────────────────────┐
  │ Controller Layer            │  REST Endpoints
  ├─────────────────────────────┤
  │ Service Layer               │  Business Logic
  ├─────────────────────────────┤
  │ Repository Layer            │  Spring Data JPA
  └─────────────────────────────┘
  ↓ flecha hacia pill "MySQL / TiDB Cloud" (#2979FF)

[Footer — 3 badges #242328]
  "Stateless JWT Auth" · "Feature-sliced Clean Arch" · "Offline-first Dashboard"
```

---

### SLIDE 7 — Base de datos + Algoritmo

```
FONDO: #0B0A0F

[Header]
  "DATABASE & KEY ALGORITHM" — Oswald Bold 40px

[Layout: 62% izquierda / 38% derecha]

IZQUIERDA — ERD simplificado
  Nodos fondo #242328, Oswald 14px
  Líneas conexión #E5E5E7

  USER
    ├─ TRAINING PLAN
    │       └─ ROUTINE ──[N:M]── ROUTINE EXERCISE ──── EXERCISE
    └─ WORKOUT
              └─ WORKOUT SET
                       └─ [isPR ★] — #00E676

  Label "N:M via RoutineExercises" — Inter 12px, #2979FF

DERECHA — Card Epley
  Fondo #242328, borde #2979FF 2px, border-radius 8px

  "1RM ESTIMATION" — Oswald 18px, #2979FF, centrado

  Fórmula monospace 22px, blanco:
  1RM = weight × (1 + reps / 30)

  Ejemplo Inter 14px:
  "100 kg × 8 reps"
  "→ estimated 1RM: 126.7 kg" — #00E676

  "Used for real-time PR detection" — Inter 12px, italic
```

---

### SLIDE 8 — API REST

```
FONDO: #0B0A0F

[Header]
  "REST API — 38 ENDPOINTS" — Oswald Bold 40px
  Badge inline "JWT Protected" — fondo #2979FF

[Tabla 2 columnas — fondo #242328]
  Header fila: fondo #2979FF, Oswald 14px bold
  Filas alternas: #242328 / #1e1d22, Inter 13px

  Grupo                  | Qué cubre
  Auth (public)          | /register · /login · /google
  User Profile           | GET · PUT /users/me
  Exercises              | GET · POST · GET by ID
  Training Plans         | Full CRUD (5 endpoints)
  Routines               | Full CRUD + exercise replace (6)
  Workouts               | POST · GET · GET by ID
  Body Measurements      | POST · GET
  Dashboard              | Summary · PR History
  Statistics             | 11 analytics endpoints
  Widget Preferences     | GET · PUT

[Footer — 3 badges]
  "38 requests" · "120+ automated assertions" · "Postman Collection"
  Oswald 16px, #2979FF
```

---

### SLIDE 9 — Pruebas técnicas

```
FONDO: #0B0A0F

[Header]
  "TECHNICAL TESTING" — Oswald Bold 40px

[3 columnas iguales]

  COL 1 — "API Testing" — Oswald 18px, #2979FF
    Screenshot Postman tests en verde
    Caption Inter 13px:
    "38 requests · 8 groups
     120+ assertions
     JWT flow validation"

  COL 2 — "Form Validation" — Oswald 18px, #2979FF
    Screenshot Sign Up con error de email
    Caption:
    "2-layer strategy:
     Frontend (Jetpack Compose)
     + Backend (Spring Validation)"

  COL 3 — "DB Stress Test" — Oswald 18px, #2979FF
    Screenshot MySQL Workbench
    Caption:
    "3 user profiles
     48 workouts · ~96 sets
     Jan–May 2026 data"
```

---

### SLIDE 10 — Conclusiones

```
FONDO: #0B0A0F

[Header]
  "CONCLUSIONS" — Oswald Bold 40px

[Layout: 50% izquierda / 50% derecha]

IZQUIERDA — "✅ ACHIEVED" — Oswald 22px, #00E676
  Cards fondo #242328, borde izquierdo #00E676 3px, Inter 13px:
  · Core training loop (plans, routines, Zen Mode)
  · JWT Auth + BCrypt + Multilingual (EN/ES/CA)
  · Advanced analytics (10+ charts)
  · Customizable dashboard (offline-first)
  · Google OAuth + Post-workout emails
  · Postman (38 req / 120+ assertions)
  · SQL dummy data seeding
  · AI Flask PoC

DERECHA — "❌ NOT ACHIEVED" — Oswald 22px, #FF3D00
  Cards fondo #242328, borde izquierdo #FF3D00 3px:
  · CI/CD Pipeline (replaced by Postman)
  · Customizable themes
  · Native AI integration (intentional — V3)

  [Separador #242328]

  "PROBLEMS SOLVED" — Oswald 16px, #2979FF
  · Google OAuth client ID mismatch → fixed
  · Dashboard stale data → WorkManager sync
  · Workouts nav confusion → empty state redesign
```

---

### SLIDE 11 — V3 Roadmap

```
FONDO: #0B0A0F

[Header]
  "WHAT'S NEXT — V3 ROADMAP" — Oswald Bold 40px

[5 cards horizontales]
  Fondo #242328, borde superior #2979FF 3px, border-radius 8px

  · "Native AI" — "Flask PoC integrated into the app"
  · "CSV Export" — "Backend queries already in place"
  · "Full Offline" — "Extend Room cache to workout logger"
  · "Themes" — "Alternative visual themes"
  · "CI/CD" — "GitHub Actions pipeline"

  Título Oswald 18px / descripción Inter 12px
```

---

### SLIDE 12 — Cierre

```
FONDO: #0B0A0F

[Centro]
  Logo Kaizen 90px
  "Thank you." — Oswald Bold 56px, blanco
  espacio 20px

[3 QR codes en fila — labels Inter 13px debajo]
  QR 1: GitHub Frontend
  QR 2: GitHub Backend
  QR 3: YouTube Demo

[Footer]
  "Questions?" — Inter 18px, #E5E5E7, opacidad 50%
```

---

## REPARTO ENTRE LOS DOS

| Bloque | Zyrl | John |
|---|---|---|
| Slide 1 — Portada | ✅ | |
| Slide 2 — Equipo | ✅ (su parte) | ✅ (su parte) |
| Slide 3 — Problema | ✅ | |
| Slide 4 — Solución + Features | ✅ | |
| Slide 5 — Stack | | ✅ |
| Slide 6 — Arquitectura | | ✅ |
| Slide 7 — BD + Algoritmo | | ✅ |
| Slide 8 — API REST | | ✅ |
| Slide 9 — Pruebas | | ✅ |
| Slide 10 — Conclusiones logros | ✅ | |
| Slide 10 — Problemas resueltos | | ✅ |
| Slide 11 — Roadmap | ✅ | |
| Slide 12 — Cierre | ✅ | ✅ |
| **Demo — Start/Login/Register** | ✅ | ✅ |
| **Demo — Calibración** | ✅ | ✅ |
| **Demo — Dashboard** | ✅ | ✅ (backend) |
| **Demo — Workout Planning** | ✅ | ✅ (backend) |
| **Demo — Zen Mode** | ✅ | ✅ (PR/Epley) |
| **Demo — Summary + Email** | | ✅ |
| **Demo — Statistics** | | ✅ |
| **Demo — Settings** | ✅ | |

---

## CONSEJOS PARA LA DEMO

- El emulador debe estar encendido y en la Start screen antes de empezar
- Tened los datos del seeding cargados para que Statistics tenga gráficas con contenido
- Si algo falla técnicamente, no os paréis: seguir y comentarlo como "en condiciones normales..."
- La demo no tiene que ser perfecta, tiene que ser fluida
- Ensayadla al menos tres veces en voz alta contra el reloj
