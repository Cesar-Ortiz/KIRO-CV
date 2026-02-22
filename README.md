# CV Profesional - Cesar Fernando Ortiz Rocha

Sitio web estático de una sola página que funciona como CV profesional para Cesar Fernando Ortiz Rocha, Ingeniero de Sistemas.

## Descripción del Proyecto

Este proyecto es un CV profesional interactivo desarrollado como sitio web estático de una sola página. Presenta información profesional de manera clara, moderna y accesible, incluyendo perfil profesional, formación académica, habilidades técnicas, proyectos realizados e información de contacto.

El sitio está diseñado con un enfoque mobile-first, garantizando una experiencia óptima en dispositivos móviles, tablets y escritorio. Implementa las mejores prácticas de accesibilidad web (WCAG 2.1 AA) y no depende de frameworks o librerías externas, asegurando máxima portabilidad y rendimiento.

## URL del Sitio

🌐 **Sitio publicado:** https://kiro-cv.azurewebsites.net/

## Características

- HTML5 semántico
- CSS modular y responsivo
- JavaScript vanilla (sin frameworks)
- Diseño mobile-first
- Accesibilidad WCAG 2.1 AA
- Sin dependencias externas

## Estructura del Proyecto

```
cv-website/
├── index.html          # Documento HTML principal
├── styles/
│   ├── main.css       # Variables CSS y estilos base
│   ├── layout.css     # Grid, flexbox y estructura
│   ├── components.css # Estilos de componentes
│   └── responsive.css # Media queries
├── scripts/
│   ├── navigation.js  # Navegación y smooth scroll
│   └── interactions.js # Animaciones e interacciones
└── package.json       # Dependencias de testing
```

## Instalación

```bash
npm install
```

## Testing

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests de accesibilidad
npm run test:a11y

# Validar HTML
npm run lint:html

# Validar CSS
npm run lint:css

# Validar todo
npm run lint
```

## Uso

Simplemente abre `index.html` en un navegador web moderno.

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica del documento
- **CSS3**: Estilos modernos con Grid, Flexbox y Custom Properties (variables CSS)
- **JavaScript ES6+**: Interacciones y navegación (vanilla, sin frameworks)

### Herramientas de Desarrollo y Testing
- **Jest**: Framework de testing unitario
- **jsdom**: Simulación del DOM para tests
- **fast-check**: Property-based testing para validación exhaustiva
- **jest-axe**: Testing automatizado de accesibilidad
- **axe-core**: Motor de validación de accesibilidad WCAG 2.1
- **HTMLHint**: Validación y linting de HTML
- **Stylelint**: Validación y linting de CSS

### Hosting
- **Azure Web Apps**: Plataforma de hosting en la nube

## Autor

Cesar Fernando Ortiz Rocha
