# CV Profesional - Cesar Fernando Ortiz Rocha

Sitio web estático de una sola página que funciona como CV profesional.

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

## Tecnologías

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript ES6+
- Jest (testing)
- fast-check (property-based testing)
- axe-core (accesibilidad)
- HTMLHint (validación HTML)
- Stylelint (validación CSS)

## Autor

Cesar Fernando Ortiz Rocha
