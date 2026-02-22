# Documento de Requisitos - Sitio Web CV Profesional

## Introducción

Este documento define los requisitos para un sitio web estático de una sola página que funcione como CV/perfil profesional para Cesar Fernando Ortiz Rocha. El sitio debe presentar información profesional de manera clara, moderna y accesible, utilizando únicamente tecnologías web estáticas (HTML, CSS, JavaScript).

## Glosario

- **CV_Website**: El sitio web estático de una sola página que presenta el perfil profesional
- **Visitor**: Usuario que accede al sitio web para visualizar el CV
- **Contact_Section**: Sección del sitio que muestra información de contacto
- **Projects_Section**: Sección del sitio que muestra los proyectos realizados
- **Skills_Section**: Sección del sitio que muestra las habilidades técnicas
- **Education_Section**: Sección del sitio que muestra la formación académica
- **Profile_Section**: Sección del sitio que muestra el resumen profesional
- **Navigation_Menu**: Menú de navegación para desplazarse entre secciones
- **Responsive_Layout**: Diseño que se adapta a diferentes tamaños de pantalla

## Requisitos

### Requisito 1: Visualización de Información Personal

**User Story:** Como visitante, quiero ver la información personal del profesional, para poder identificarlo y contactarlo.

#### Criterios de Aceptación

1. THE CV_Website SHALL display el nombre completo "Cesar Fernando Ortiz Rocha"
2. THE CV_Website SHALL display la edad "25 años"
3. THE Contact_Section SHALL display la dirección "Carrera 20B #13-50, Zipaquirá, Colombia"
4. THE Contact_Section SHALL display el email "cesarortiz2477@gmail.com" como enlace clickeable
5. THE Contact_Section SHALL display el perfil de LinkedIn como enlace clickeable
6. THE Contact_Section SHALL display el perfil de GitHub como enlace clickeable
7. THE Contact_Section SHALL display el teléfono "+57 301 5515012"

### Requisito 2: Presentación del Resumen Profesional

**User Story:** Como visitante, quiero leer un resumen profesional, para entender rápidamente el perfil y experiencia del candidato.

#### Criterios de Aceptación

1. THE Profile_Section SHALL display el texto del resumen profesional completo
2. THE Profile_Section SHALL appear en la parte superior del sitio después del encabezado
3. THE Profile_Section SHALL use un formato legible con espaciado adecuado

### Requisito 3: Visualización de Formación Académica

**User Story:** Como visitante, quiero ver la formación académica, para conocer el nivel educativo del profesional.

#### Criterios de Aceptación

1. THE Education_Section SHALL display "Escuela Colombiana de Ingenieria Julio Garavito" con el título "Ingeniería de Sistemas" y fecha "Septiembre 2022"
2. THE Education_Section SHALL display "Institución Educativa Municipal San Juan Bautista De La Salle" con el título "Bachiller Técnico con Especialidad en Informática" y fecha "Diciembre 2016"
3. THE Education_Section SHALL display las entradas educativas en orden cronológico inverso

### Requisito 4: Visualización de Habilidades Técnicas

**User Story:** Como visitante, quiero ver las habilidades técnicas, para evaluar las competencias tecnológicas del profesional.

#### Criterios de Aceptación

1. THE Skills_Section SHALL display todas las habilidades: Java, JavaScript, SQL, Python, Spring, React, HTML, CSS, Docker, Git, FastAPI, AWS
2. THE Skills_Section SHALL present las habilidades de manera visual y organizada
3. THE Skills_Section SHALL group las habilidades de forma lógica

### Requisito 5: Visualización de Proyectos

**User Story:** Como visitante, quiero ver los proyectos realizados, para evaluar la experiencia práctica del profesional.

#### Criterios de Aceptación

1. THE Projects_Section SHALL display el proyecto "AgroMarket" con su descripción completa
2. THE Projects_Section SHALL display el proyecto "DonkeyPop" con su descripción completa
3. THE Projects_Section SHALL display el proyecto "Lacman" con su descripción completa
4. THE Projects_Section SHALL present cada proyecto con título y descripción claramente diferenciados

### Requisito 6: Navegación entre Secciones

**User Story:** Como visitante, quiero navegar fácilmente entre las diferentes secciones, para acceder rápidamente a la información que me interesa.

#### Criterios de Aceptación

1. THE Navigation_Menu SHALL provide enlaces a todas las secciones principales
2. WHEN a Visitor clicks un enlace de navegación, THE CV_Website SHALL scroll suavemente a la sección correspondiente
3. THE Navigation_Menu SHALL remain visible o accesible mientras el Visitor navega por el sitio
4. THE Navigation_Menu SHALL highlight la sección actualmente visible

### Requisito 7: Diseño Responsivo

**User Story:** Como visitante, quiero que el sitio se vea bien en cualquier dispositivo, para poder acceder desde móvil, tablet o escritorio.

#### Criterios de Aceptación

1. WHEN el ancho de pantalla es menor a 768px, THE Responsive_Layout SHALL reorganizar el contenido en una sola columna
2. WHEN el ancho de pantalla es mayor o igual a 768px, THE Responsive_Layout SHALL display el contenido optimizado para pantallas grandes
3. THE CV_Website SHALL maintain legibilidad en todos los tamaños de pantalla
4. THE Navigation_Menu SHALL adapt su presentación según el tamaño de pantalla

### Requisito 8: Apariencia Profesional y Moderna

**User Story:** Como visitante, quiero que el sitio tenga una apariencia profesional y moderna, para tener una buena primera impresión del candidato.

#### Criterios de Aceptación

1. THE CV_Website SHALL use una paleta de colores profesional y consistente
2. THE CV_Website SHALL use tipografía legible y moderna
3. THE CV_Website SHALL maintain espaciado y alineación consistentes en todas las secciones
4. THE CV_Website SHALL use transiciones y animaciones sutiles para mejorar la experiencia

### Requisito 9: Rendimiento y Carga

**User Story:** Como visitante, quiero que el sitio cargue rápidamente, para no perder tiempo esperando.

#### Criterios de Aceptación

1. THE CV_Website SHALL load completamente en menos de 3 segundos en conexiones estándar
2. THE CV_Website SHALL use únicamente archivos estáticos (HTML, CSS, JavaScript)
3. THE CV_Website SHALL optimize imágenes y recursos para carga rápida
4. THE CV_Website SHALL function sin dependencias de servidores externos cuando sea posible

### Requisito 10: Accesibilidad

**User Story:** Como visitante con necesidades de accesibilidad, quiero poder navegar el sitio con tecnologías asistivas, para acceder a toda la información.

#### Criterios de Aceptación

1. THE CV_Website SHALL use etiquetas HTML semánticas apropiadas
2. THE CV_Website SHALL provide texto alternativo para elementos visuales
3. THE CV_Website SHALL maintain contraste de color suficiente entre texto y fondo
4. WHEN a Visitor uses navegación por teclado, THE CV_Website SHALL provide indicadores visuales claros de foco
5. THE CV_Website SHALL structure el contenido con encabezados jerárquicos apropiados
