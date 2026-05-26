# KAIZEN — GUIÓN DE PRESENTACIÓN
**DAM 2 · STUCOM Centre d'Estudis - Pelai · 2026**

> **Leyenda:**
> **Z** = Zyrl Justin Suárez Untalan
> **J** = John Henard Salango
> Las frases entre comillas son anclas — decirlas más o menos textualmente.
> El resto, con vuestras palabras siguiendo los puntos.

---

## Resumen de tiempos

| Slide | Título | Orador | Tiempo |
|-------|--------|--------|--------|
| 1 | Portada | Z | ~0:15 |
| 2 | El equipo | Z + J | ~0:45 |
| 3 | El problema | Z | ~0:45 |
| 4 | Solución + Features | Z | ~1:30 |
| 5 | Stack tecnológico | J | ~1:15 |
| 6 | Arquitectura del sistema | J | ~1:30 |
| 7 | Base de datos + Algoritmo | J | ~1:15 |
| 8 | API REST | J | ~1:00 |
| 9 | Pruebas técnicas | J | ~1:30 |
| 10 | Conclusiones | Z + J | ~1:45 |
| 11 | V3 Roadmap | Z | ~0:30 |
| 12 | Cierre | Z + J | ~0:15 |
| | **TOTAL** | | **~11:15** |

---

---

## SLIDE 1 — Portada
**Orador: Z · Tiempo: ~0:15**

---

**Z:** Buenos días. Somos Zyrl y John, DAM 2 de STUCOM.

"Hoy os presentamos **Kaizen**, nuestra aplicación de seguimiento de entrenamiento, el proyecto final de este ciclo."

> **Nota:** Breve. No hace falta más. El slide lo dice todo. Pasar rápido.

---

## SLIDE 2 — El equipo
**Orador: Z + J · Tiempo: ~0:45**

---

**Z:** "Yo soy Zyrl. Me he centrado en el **frontend**: Kotlin, Jetpack Compose, todo lo que el usuario ve en pantalla es mío."

Añadir: mi objetivo profesional es el desarrollo móvil, especialmente con Flutter.

---

**J:** "Yo soy John. Me he encargado del **backend**: la API REST, la base de datos, la autenticación y toda la lógica de negocio."

Añadir: a mí también me interesa el desarrollo multiplataforma con Flutter.

---

> **Nota:** Dejar una pausa breve para que el evaluador lea los LinkedIn si quiere. No hay prisa.

---

## SLIDE 3 — El problema
**Orador: Z · Tiempo: ~0:45**

---

**Z:** "Para entender Kaizen hay que entender el problema."

Los que entrenáis en serio sabéis que llevar un registro preciso es un caos. Hay gente que usa Excel, otros van de memoria, y los que descargan apps se encuentran con dos problemas típicos.

*(señalar las tres cards)*

"**O son demasiado simples** y no ofrecen analíticas reales, **o tienen tanta funcionalidad** que abrir la app es más cansado que entrenar."

"Hevy, que es la más popular ahora mismo, ha añadido un feed social que muchos usuarios consideran una distracción."

"**El mercado tiene apps. Ninguna hace una sola cosa perfectamente.**"

---

> **Nota:** La última frase es el cierre perfecto para pasar al slide siguiente. No añadir nada más después de ella.

---

## SLIDE 4 — Solución + Features
**Orador: Z · Tiempo: ~1:30**

---

**Z:** "Kaizen es nuestra respuesta."

"El nombre viene del concepto japonés de mejora continua. Tres principios definen la app."

*(señalar cada pill)*

- **Zero Friction:** "la interfaz desaparece cuando entrenas, solo ves los datos que necesitas en ese momento"
- **Progressive Overload:** "siempre sabes exactamente cuánto cargaste la semana pasada, y en qué ejercicio"
- **No Social Clutter:** "sin feed, sin seguidores, sin gamificación que te distraiga del objetivo"

---

*(señalar el mockup del teléfono)*

"Esto es el Dashboard real de la app."

---

*(señalar las seis cards de features)*

"Las funcionalidades principales son estas seis:

El **Workout Logger** con Zen Mode y detección automática de PRs.
El **Routine Builder** en tres pasos con drag-and-drop.
El **Analytics Lab** con más de diez gráficas distintas.
El **Dashboard personalizable** con widgets offline-first.
**Google OAuth** con Credential Manager y emails automáticos post-entreno.
Y como máximo académico, un **prototipo de IA en Flask** que genera rutinas desde lenguaje natural."

---

> **Nota:** No hace falta entrar en detalle técnico de cada feature aquí. Eso viene en los slides siguientes. Nombrar y seguir.

---

## SLIDE 5 — Stack tecnológico
**Orador: J · Tiempo: ~1:15**

---

**J:** "A nivel técnico, tenemos dos repositorios separados."

---

*(señalar columna FRONTEND)*

"El **frontend es Android nativo en Kotlin** con Jetpack Compose.
Usamos Hilt para inyección de dependencias, Retrofit para las llamadas a la API, Room para la base de datos local, y WorkManager para sincronización en background."

---

*(señalar columna BACKEND)*

"El **backend es Java 17 con Spring Boot 3**.
Spring Security para la autenticación, JWT stateless, BCrypt para las contraseñas, Google OAuth Client, y JavaMailSender para los emails automáticos.
La base de datos es **MySQL en TiDB Cloud**, y las fotos de perfil se guardan en **DigitalOcean Spaces**."

---

*(señalar columna INFRASTRUCTURE y el footer)*

"Y aparte, como prototipo completamente independiente, tenemos Python 3 con Flask para la IA."

---

> **Nota:** No es necesario explicar qué hace cada librería en detalle. Mencionar el nombre y el rol es suficiente. El evaluador ya conoce el stack.

---

## SLIDE 6 — Arquitectura del sistema
**Orador: J · Tiempo: ~1:30**

---

**J:** "La arquitectura sigue **Clean Architecture** en el frontend y **tres capas** en el backend."

---

*(señalar el bloque Android)*

"En el frontend tenemos cuatro capas:
La **capa de presentación** con los Composables y ViewModels.
La **capa de dominio** con los UseCases y las interfaces de repositorio.
La **capa de datos** con Retrofit y Room.
Y la **capa de red y base de datos local**.

La regla es simple: cada capa solo conoce la de abajo, nunca la de arriba."

---

*(señalar la flecha central)*

"La comunicación con el backend es completamente **stateless**.
Cada request lleva un JWT en el header. El servidor lo verifica, extrae el userId, y responde. No hay estado de sesión en el servidor."

---

*(señalar el bloque Spring Boot)*

"En el backend: **controladores** que reciben las requests, **servicios** con la lógica de negocio, y **repositorios** que abstraen la base de datos con Spring Data JPA."

---

*(señalar los badges del footer)*

"Y el dashboard tiene comportamiento **offline-first**: los datos se cachean en Room y WorkManager los sincroniza silenciosamente cuando hay conexión."

---

## SLIDE 7 — Base de datos + Algoritmo clave
**Orador: J · Tiempo: ~1:15**

---

**J:** "La base de datos tiene nueve tablas. La jerarquía es clara."

---

*(señalar el ERD)*

"Un usuario crea **Training Plans**, que contienen **Routines**, que se ejecutan como **Workouts**, que almacenan **WorkoutSets**."

---

*(señalar la relación N:M)*

"La relación más interesante es la **N:M entre Routines y Exercises**.
Se resuelve con la tabla intermedia RoutineExercises, que no es solo un puente: también guarda el **orden de los ejercicios**, las series objetivo y el descanso entre series."

---

*(señalar la card de Epley)*

"Y cada vez que el usuario guarda una serie, el sistema calcula el **1RM estimado con la fórmula de Epley**.

`1RM = weight × (1 + reps / 30)`

Si ese valor supera el máximo histórico del ejercicio para ese usuario, la serie se marca automáticamente como PR. Sin input manual, sin configuración. **Es automático.**"

---

> **Nota:** El ejemplo del slide lo dice todo — 100 kg × 8 reps → 126.7 kg. Señalarlo y dejar que el evaluador lo procese.

---

## SLIDE 8 — API REST
**Orador: J · Tiempo: ~1:00**

---

**J:** "La API tiene **treinta y ocho endpoints en diez grupos**."

---

*(señalar la tabla)*

"Las únicas rutas públicas son las de autenticación: registro, login y Google OAuth. **Todo lo demás requiere el Bearer token** en el header."

---

*(señalar los stats del footer)*

"Para validar que todo funciona correctamente, construimos una **colección de Postman con 120 assertions automatizadas**:
Códigos de estado, tiempos de respuesta, esquemas de respuesta, y que los endpoints protegidos devuelven 401 sin token."

---

> **Nota:** No hace falta leer toda la tabla. Mencionar los grupos más importantes si el evaluador pregunta: Auth, Training Plans, Routines, Workouts, Statistics.

---

## SLIDE 9 — Pruebas técnicas
**Orador: J · Tiempo: ~1:30**

---

**J:** "En cuanto a las pruebas técnicas, cubrimos tres áreas."

---

*(señalar columna API Testing)*

"La **colección de Postman** ya la hemos mencionado: 38 requests, 8 grupos, 120 assertions. El flujo completo de JWT está validado end-to-end."

---

*(señalar columna Form Validation)*

"La **validación de formularios** funciona en dos capas.
El frontend valida antes de hacer ninguna request — Jetpack Compose comprueba el formato del email, la fortaleza de la contraseña, y que los dos campos de contraseña coinciden.
El backend aplica las mismas reglas con **Spring Validation** y devuelve un `400 Bad Request` si algo no es correcto."

---

*(señalar columna DB Stress Test)*

"Para testear las gráficas con datos realistas, creamos un **script SQL que genera tres perfiles de atleta** distintos con 48 entrenamientos de enero a mayo.

El script usa `INSERT IGNORE`, así que **se puede ejecutar varias veces sin romper nada**."

---

## SLIDE 10 — Conclusiones
**Orador: Z (logros) + J (problemas resueltos) · Tiempo: ~1:45**

---

**Z:** "En cuanto a objetivos."

*(señalar columna verde)*

"Todos los **mínimos completados**:
el ciclo de entrenamiento completo, JWT con BCrypt, base de datos relacional, y multiidioma en inglés, español y catalán."

"De los **máximos**, hemos completado las analíticas avanzadas, el dashboard personalizable, Google OAuth, los emails automáticos, la colección de Postman, el seeding de datos, y el prototipo de IA en Flask."

---

*(señalar columna roja)*

"Lo que **no está en esta versión**: los temas visuales, el CI/CD, y la integración nativa de la IA.

Esta última fue una **decisión consciente**: queríamos demostrar que el concepto funciona sin añadir una funcionalidad a medias. El PoC en Flask prueba la idea; la integración nativa es V3."

---

**J:** *(señalar sección Problems Solved)*

"Los tres problemas más relevantes que tuvimos que resolver:

El **rechazo de tokens de Google OAuth** por un mismatch de Client ID — solucionado usando el Web Client ID correcto en el Credential Manager de Android.

El **dashboard que no se actualizaba** al terminar un entreno — solucionado con WorkManager para sincronización en background.

Y la **confusión de navegación en Workouts** — solucionada con un empty state completamente rediseñado con guía paso a paso."

---

## SLIDE 11 — V3 Roadmap
**Orador: Z · Tiempo: ~0:30**

---

**Z:** "Para V3 tenemos cinco líneas claras."

*(señalar cada card rápidamente)*

"**Integración nativa de la IA** — el PoC de Flask directamente en la app.
**Export a CSV** — las queries del backend ya están.
**Modo offline completo** — extender Room al logger completo.
**Temas visuales** — alternativas manteniendo el alto contraste.
Y el **pipeline de CI/CD** con GitHub Actions."

"**La arquitectura del backend ya está preparada para todo esto.**"

---

> **Nota:** Este slide es de cierre rápido. No entrar en detalles. El objetivo es transmitir que hay visión de producto más allá de este ciclo.

---

## SLIDE 12 — Cierre
**Orador: J + Z · Tiempo: ~0:15**

---

**J:** "Aquí tenéis los links a los dos repositorios y al vídeo de demo."

---

**Z:** "Gracias. Ahora pasamos a la demo en vivo."

---

> **Nota:** Breve y limpio. No añadir nada más. Dejar que el evaluador haga preguntas si quiere antes de la demo.

---

---

## CONSEJOS GENERALES

### Ritmo
- Hablar más despacio de lo que creéis necesario. La velocidad nerviosa hace que se pierda el hilo.
- Las pausas entre slides de un orador a otro son naturales — no hay que apresurarse a hablar.

### Señalar los slides
- Cuando el guion dice "señalar X", hacerlo físicamente con el ratón o con la mano. Guía la atención del evaluador.
- No leer el slide en voz alta. El evaluador puede leer. Comentar, añadir contexto, explicar el por qué.

### Preguntas técnicas probables
- "¿Por qué JWT stateless y no sesiones?" → Sin estado en servidor, escala mejor, compatible con mobile.
- "¿Por qué TiDB Cloud y no AWS RDS?" → MySQL-compatible, tier gratuito generoso, latencia aceptable para un proyecto académico.
- "¿Por qué no integrasteis la IA directamente?" → Decisión consciente de scope. Un PoC que funciona vale más que una integración incompleta.
- "¿Habéis hecho tests unitarios?" → Postman cubre los tests de integración de la API. Tests unitarios son V3 junto con el CI/CD.
- "¿Cómo funciona el offline-first?" → Room cachea los datos del dashboard. WorkManager tiene un PeriodicWorkRequest que sincroniza cuando hay conectividad.

### Si algo falla en la demo
No parar. Seguir con: *"En condiciones normales esto haría X..."* y continuar. El evaluador sabe que los demos en vivo tienen imprevistos.

---

*Documento generado para la defensa presencial · DAM 2 · STUCOM Centre d'Estudis - Pelai · 2026*
