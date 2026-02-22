# Documento de Diseño Técnico - Sitio Web CV Profesional

## Overview

Este documento describe el diseño técnico para un sitio web estático de una sola página que funciona como CV profesional para Cesar Fernando Ortiz Rocha. El sitio utiliza únicamente tecnologías web estáticas (HTML, CSS, JavaScript vanilla) sin frameworks ni dependencias externas, garantizando máxima portabilidad, rendimiento y facilidad de despliegue.

El diseño sigue una arquitectura de componentes modulares donde cada sección del CV es independiente pero visualmente cohesiva. La navegación se implementa mediante smooth scrolling nativo del navegador, y la responsividad se logra con CSS Grid y Flexbox junto con media queries.

## Architecture

### Arquitectura General

El sitio sigue una arquitectura de **Single Page Application (SPA) estática** con tres capas claramente separadas:

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (HTML Structure + CSS Styling)         │
└─────────────────────────────────────────┘
                  │
┌─────────────────────────────────────────┐
│         Interaction Layer               │
│  (JavaScript - Navigation & UX)         │
└─────────────────────────────────────────┘
                  │
┌─────────────────────────────────────────┐
│         Content Layer                   │
│  (Static Data in HTML)                  │
└─────────────────────────────────────────┘
```

### Estructura de Archivos

```
cv-website/
├── index.html          # Documento HTML principal con toda la estructura
├── styles/
│   ├── main.css       # Estilos base y variables CSS
│   ├── layout.css     # Grid, flexbox y estructura de layout
│   ├── components.css # Estilos de componentes individuales
│   └── responsive.css # Media queries y adaptaciones móviles
└── scripts/
    ├── navigation.js  # Lógica de navegación y smooth scroll
    └── interactions.js # Animaciones y efectos interactivos
```

### Principios de Diseño

1. **Mobile-First**: El diseño base es para móviles, con mejoras progresivas para pantallas grandes
2. **Semantic HTML**: Uso de etiquetas HTML5 semánticas para mejor accesibilidad y SEO
3. **Progressive Enhancement**: Funcionalidad básica sin JavaScript, mejoras con JS habilitado
4. **Performance-First**: Minimizar recursos, optimizar carga, evitar dependencias externas
5. **Accessibility-First**: WCAG 2.1 AA compliance desde el diseño

## Components and Interfaces

### 1. Header Component

**Propósito**: Contiene el nombre, título profesional y navegación principal.

**Estructura HTML**:
```html
<header class="site-header">
  <div class="header-content">
    <h1 class="name">Cesar Fernando Ortiz Rocha</h1>
    <p class="tagline">Ingeniero de Sistemas</p>
  </div>
  <nav class="main-nav" aria-label="Navegación principal">
    <ul class="nav-list">
      <li><a href="#profile">Perfil</a></li>
      <li><a href="#education">Educación</a></li>
      <li><a href="#skills">Habilidades</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
</header>
```

**Comportamiento**:
- En móvil: navegación colapsada en menú hamburguesa
- En escritorio: navegación horizontal visible
- Sticky header opcional con JavaScript

### 2. Profile Section Component

**Propósito**: Muestra el resumen profesional del candidato.

**Estructura HTML**:
```html
<section id="profile" class="section profile-section">
  <h2 class="section-title">Perfil Profesional</h2>
  <div class="profile-content">
    <p class="profile-text">[Texto del resumen profesional]</p>
  </div>
</section>
```

### 3. Education Section Component

**Propósito**: Lista la formación académica en orden cronológico inverso.

**Estructura HTML**:
```html
<section id="education" class="section education-section">
  <h2 class="section-title">Formación Académica</h2>
  <div class="education-list">
    <article class="education-item">
      <h3 class="institution">Escuela Colombiana de Ingenieria Julio Garavito</h3>
      <p class="degree">Ingeniería de Sistemas</p>
      <time class="date" datetime="2022-09">Septiembre 2022</time>
    </article>
    <!-- Más items -->
  </div>
</section>
```

### 4. Skills Section Component

**Propósito**: Muestra las habilidades técnicas organizadas por categorías.

**Estructura HTML**:
```html
<section id="skills" class="section skills-section">
  <h2 class="section-title">Habilidades Técnicas</h2>
  <div class="skills-grid">
    <div class="skill-category">
      <h3 class="category-title">Lenguajes</h3>
      <ul class="skill-list">
        <li class="skill-item">Java</li>
        <li class="skill-item">JavaScript</li>
        <li class="skill-item">Python</li>
        <li class="skill-item">SQL</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3 class="category-title">Frameworks & Librerías</h3>
      <ul class="skill-list">
        <li class="skill-item">Spring</li>
        <li class="skill-item">React</li>
        <li class="skill-item">FastAPI</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3 class="category-title">Tecnologías Web</h3>
      <ul class="skill-list">
        <li class="skill-item">HTML</li>
        <li class="skill-item">CSS</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3 class="category-title">Herramientas & DevOps</h3>
      <ul class="skill-list">
        <li class="skill-item">Docker</li>
        <li class="skill-item">Git</li>
        <li class="skill-item">AWS</li>
      </ul>
    </div>
  </div>
</section>
```

### 5. Projects Section Component

**Propósito**: Presenta los proyectos realizados con descripciones detalladas.

**Estructura HTML**:
```html
<section id="projects" class="section projects-section">
  <h2 class="section-title">Proyectos</h2>
  <div class="projects-list">
    <article class="project-item">
      <h3 class="project-title">AgroMarket</h3>
      <p class="project-description">[Descripción del proyecto]</p>
    </article>
    <!-- Más proyectos -->
  </div>
</section>
```

### 6. Contact Section Component

**Propósito**: Muestra información de contacto con enlaces funcionales.

**Estructura HTML**:
```html
<section id="contact" class="section contact-section">
  <h2 class="section-title">Contacto</h2>
  <div class="contact-info">
    <div class="contact-item">
      <span class="contact-label">Edad:</span>
      <span class="contact-value">25 años</span>
    </div>
    <div class="contact-item">
      <span class="contact-label">Dirección:</span>
      <span class="contact-value">Carrera 20B #13-50, Zipaquirá, Colombia</span>
    </div>
    <div class="contact-item">
      <span class="contact-label">Email:</span>
      <a href="mailto:cesarortiz2477@gmail.com" class="contact-link">
        cesarortiz2477@gmail.com
      </a>
    </div>
    <div class="contact-item">
      <span class="contact-label">Teléfono:</span>
      <a href="tel:+573015515012" class="contact-link">+57 301 5515012</a>
    </div>
    <div class="contact-item">
      <span class="contact-label">LinkedIn:</span>
      <a href="[URL LinkedIn]" class="contact-link" target="_blank" rel="noopener">
        Ver perfil
      </a>
    </div>
    <div class="contact-item">
      <span class="contact-label">GitHub:</span>
      <a href="[URL GitHub]" class="contact-link" target="_blank" rel="noopener">
        Ver perfil
      </a>
    </div>
  </div>
</section>
```

### 7. Navigation Module (JavaScript)

**Propósito**: Gestiona la navegación suave entre secciones y el estado activo del menú.

**Interface**:
```javascript
// navigation.js
const Navigation = {
  // Inicializa los event listeners para navegación
  init: function() { },
  
  // Maneja el smooth scroll a una sección
  scrollToSection: function(sectionId) { },
  
  // Actualiza el estado activo del menú según scroll
  updateActiveLink: function() { },
  
  // Toggle del menú móvil
  toggleMobileMenu: function() { }
};
```

### 8. Interactions Module (JavaScript)

**Propósito**: Maneja animaciones y efectos interactivos.

**Interface**:
```javascript
// interactions.js
const Interactions = {
  // Inicializa observers y event listeners
  init: function() { },
  
  // Anima elementos al entrar en viewport
  observeElements: function() { },
  
  // Maneja efectos hover y focus
  setupInteractiveEffects: function() { }
};
```

## Data Models

### Content Data Structure

Aunque el contenido está embebido en HTML, conceptualmente sigue esta estructura:

```javascript
// Modelo conceptual del CV
const CVData = {
  personalInfo: {
    fullName: string,
    age: number,
    title: string
  },
  
  contact: {
    address: string,
    email: string,
    phone: string,
    linkedin: string,
    github: string
  },
  
  profile: {
    summary: string
  },
  
  education: [
    {
      institution: string,
      degree: string,
      date: string,
      dateISO: string  // Formato ISO para <time datetime>
    }
  ],
  
  skills: {
    languages: string[],
    frameworks: string[],
    webTechnologies: string[],
    tools: string[]
  },
  
  projects: [
    {
      title: string,
      description: string
    }
  ]
};
```

### CSS Custom Properties (Variables)

```css
:root {
  /* Colores */
  --color-primary: #2c3e50;
  --color-secondary: #3498db;
  --color-accent: #e74c3c;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-background: #ffffff;
  --color-background-alt: #f8f9fa;
  --color-border: #e0e0e0;
  
  /* Tipografía */
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  --font-size-base: 16px;
  --font-size-small: 0.875rem;
  --font-size-large: 1.125rem;
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  
  /* Espaciado */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Layout */
  --max-width: 1200px;
  --border-radius: 8px;
  --transition-speed: 0.3s;
  
  /* Breakpoints (usados en media queries) */
  --breakpoint-mobile: 768px;
}
```


## Correctness Properties

*Una propiedad es una característica o comportamiento que debe cumplirse en todas las ejecuciones válidas de un sistema - esencialmente, una declaración formal sobre lo que el sistema debe hacer. Las propiedades sirven como puente entre las especificaciones legibles por humanos y las garantías de corrección verificables por máquinas.*

### Property 1: Orden de secciones en el DOM

*Para cualquier* documento HTML del CV, la sección de perfil debe aparecer después del header y antes de las secciones de educación, habilidades, proyectos y contacto en el orden del DOM.

**Validates: Requirements 2.2**

### Property 2: Orden cronológico inverso de educación

*Para cualquier* par de entradas educativas consecutivas en la sección de educación, la fecha de la primera entrada debe ser posterior o igual a la fecha de la segunda entrada.

**Validates: Requirements 3.3**

### Property 3: Presencia completa de habilidades

*Para cualquier* lista de habilidades esperadas (Java, JavaScript, SQL, Python, Spring, React, HTML, CSS, Docker, Git, FastAPI, AWS), todas deben estar presentes en la sección de habilidades del documento.

**Validates: Requirements 4.1**

### Property 4: Agrupación de habilidades

*Para cualquier* sección de habilidades, las habilidades deben estar organizadas en múltiples categorías (no todas en una lista plana), donde cada categoría contiene al menos una habilidad.

**Validates: Requirements 4.3**

### Property 5: Estructura de proyectos

*Para cualquier* proyecto en la sección de proyectos, debe tener un elemento de título (h3) y un elemento de descripción (p) como hijos directos o descendientes del contenedor del proyecto.

**Validates: Requirements 5.4**

### Property 6: Enlaces de navegación completos

*Para cualquier* sección principal del CV (profile, education, skills, projects, contact), debe existir un enlace de navegación correspondiente en el menú que apunte al ID de esa sección.

**Validates: Requirements 6.1, 6.2**

### Property 7: Media queries para responsive design

*Para cualquier* archivo CSS del sitio, debe existir al menos una media query con breakpoint en 768px que modifique el layout para pantallas móviles y otra para pantallas de escritorio.

**Validates: Requirements 7.1, 7.2, 7.4**

### Property 8: Consistencia mediante variables CSS

*Para cualquier* archivo CSS principal, debe definir variables CSS (custom properties) para colores, tipografía y espaciado, y estas variables deben ser utilizadas en lugar de valores hardcodeados en los estilos de componentes.

**Validates: Requirements 8.1, 8.3, 8.4**

### Property 9: Independencia de dependencias externas

*Para cualquier* archivo del sitio (HTML, CSS, JS), no debe contener referencias a recursos externos como CDNs, APIs de terceros, o librerías remotas - todos los recursos deben ser locales.

**Validates: Requirements 9.2, 9.4**

### Property 10: Uso de HTML semántico

*Para cualquier* sección del contenido del CV, debe utilizar etiquetas HTML5 semánticas apropiadas (section, article, nav, header, footer, aside) en lugar de elementos genéricos div para la estructura principal.

**Validates: Requirements 10.1**

### Property 11: Contraste de color accesible

*Para cualquier* combinación de color de texto y fondo definida en las variables CSS, el ratio de contraste debe cumplir con WCAG 2.1 AA (mínimo 4.5:1 para texto normal, 3:1 para texto grande).

**Validates: Requirements 10.3**

### Property 12: Estilos de foco para navegación por teclado

*Para cualquier* elemento interactivo (enlaces, botones), debe existir una regla CSS :focus que proporcione un indicador visual claro (outline, border, o background change).

**Validates: Requirements 10.4**

### Property 13: Jerarquía de encabezados

*Para cualquier* documento HTML del CV, los encabezados deben seguir una jerarquía lógica sin saltos (h1 seguido de h2, h2 seguido de h3, etc.), y debe existir exactamente un h1 en el documento.

**Validates: Requirements 10.5**

## Error Handling

### Estrategia General

Dado que este es un sitio estático sin procesamiento de datos del usuario ni llamadas a APIs, el manejo de errores se enfoca en:

1. **Degradación Elegante**: El sitio debe funcionar sin JavaScript
2. **Fallbacks CSS**: Uso de propiedades con fallbacks para navegadores antiguos
3. **Validación HTML**: Asegurar HTML válido para evitar errores de renderizado

### Casos de Error Específicos

#### 1. JavaScript Deshabilitado

**Escenario**: El usuario tiene JavaScript deshabilitado en su navegador.

**Manejo**:
- Los enlaces de navegación usan href="#section-id" que funcionan nativamente en HTML
- El smooth scroll es una mejora progresiva; sin JS, el navegador hace scroll normal
- No se muestran mensajes de error; la funcionalidad básica permanece intacta

#### 2. CSS No Cargado

**Escenario**: El archivo CSS falla al cargar por problemas de red.

**Manejo**:
- El HTML semántico asegura que el contenido sea legible sin estilos
- El orden lógico del contenido en el HTML mantiene la usabilidad
- Los enlaces siguen siendo funcionales

#### 3. Navegador Antiguo

**Escenario**: El usuario accede desde un navegador que no soporta CSS Grid o Custom Properties.

**Manejo**:
```css
/* Fallback para navegadores sin soporte de Grid */
.skills-grid {
  display: block; /* Fallback */
  display: grid; /* Se usa si está soportado */
}

/* Fallback para custom properties */
.section-title {
  color: #2c3e50; /* Fallback */
  color: var(--color-primary); /* Se usa si está soportado */
}
```

#### 4. Enlaces Externos Rotos

**Escenario**: Los enlaces a LinkedIn o GitHub están incorrectos o las páginas no existen.

**Manejo**:
- Uso de `rel="noopener noreferrer"` para seguridad
- Los enlaces se abren en nueva pestaña para no interrumpir la navegación del CV
- No hay validación en tiempo real; es responsabilidad del contenido

#### 5. Viewport Muy Pequeño

**Escenario**: El usuario accede desde un dispositivo con viewport menor a 320px.

**Manejo**:
```css
/* Asegurar legibilidad mínima */
body {
  min-width: 280px;
  font-size: max(14px, 1rem);
}
```

#### 6. Falta de Contraste en Modo Alto Contraste

**Escenario**: El usuario activa modo de alto contraste del sistema operativo.

**Manejo**:
```css
/* Respetar preferencias del sistema */
@media (prefers-contrast: high) {
  :root {
    --color-text: #000000;
    --color-background: #ffffff;
    --color-border: #000000;
  }
}
```

## Testing Strategy

### Enfoque Dual de Testing

Este proyecto utilizará dos tipos complementarios de pruebas:

1. **Unit Tests**: Verifican ejemplos específicos, casos edge y condiciones de error
2. **Property-Based Tests**: Verifican propiedades universales a través de múltiples inputs generados

Ambos tipos son necesarios para cobertura completa:
- Los unit tests capturan bugs concretos y validan comportamientos específicos
- Los property tests verifican corrección general y descubren casos edge inesperados

### Herramientas de Testing

#### Para HTML/CSS/JavaScript:

**Unit Testing**:
- **Jest** con **jsdom**: Para testing de JavaScript y manipulación del DOM
- **Testing Library**: Para queries semánticas del DOM

**Property-Based Testing**:
- **fast-check**: Librería de property-based testing para JavaScript
- Configuración: Mínimo 100 iteraciones por test debido a la naturaleza aleatoria

#### Para Validación HTML/CSS:

**Linting y Validación**:
- **HTMLHint**: Validación de HTML semántico
- **Stylelint**: Validación de CSS y convenciones
- **axe-core**: Testing automatizado de accesibilidad

### Estrategia de Unit Testing

Los unit tests se enfocarán en:

#### 1. Validación de Contenido Específico

```javascript
describe('Personal Information', () => {
  test('displays full name', () => {
    const document = loadHTML('index.html');
    expect(document.body.textContent).toContain('Cesar Fernando Ortiz Rocha');
  });
  
  test('displays age', () => {
    const document = loadHTML('index.html');
    expect(document.body.textContent).toContain('25 años');
  });
  
  test('email link is clickable', () => {
    const document = loadHTML('index.html');
    const emailLink = document.querySelector('a[href^="mailto:"]');
    expect(emailLink).toBeTruthy();
    expect(emailLink.href).toBe('mailto:cesarortiz2477@gmail.com');
  });
});
```

#### 2. Estructura de Secciones

```javascript
describe('Section Structure', () => {
  test('profile section exists', () => {
    const document = loadHTML('index.html');
    const profileSection = document.getElementById('profile');
    expect(profileSection).toBeTruthy();
    expect(profileSection.tagName).toBe('SECTION');
  });
  
  test('all required sections exist', () => {
    const document = loadHTML('index.html');
    const requiredSections = ['profile', 'education', 'skills', 'projects', 'contact'];
    requiredSections.forEach(id => {
      expect(document.getElementById(id)).toBeTruthy();
    });
  });
});
```

#### 3. Navegación

```javascript
describe('Navigation', () => {
  test('navigation links point to existing sections', () => {
    const document = loadHTML('index.html');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      expect(targetSection).toBeTruthy();
    });
  });
});
```

#### 4. Responsive CSS

```javascript
describe('Responsive Design', () => {
  test('mobile media query exists', () => {
    const css = loadCSS('styles/responsive.css');
    expect(css).toMatch(/@media.*max-width:\s*768px/);
  });
  
  test('desktop media query exists', () => {
    const css = loadCSS('styles/responsive.css');
    expect(css).toMatch(/@media.*min-width:\s*768px/);
  });
});
```

### Estrategia de Property-Based Testing

Los property tests verificarán propiedades universales:

#### 1. Jerarquía de Encabezados

```javascript
const fc = require('fast-check');

describe('Property: Heading Hierarchy', () => {
  test('headings follow logical hierarchy without gaps', () => {
    /**
     * Feature: cv-website, Property 13: Para cualquier documento HTML del CV, 
     * los encabezados deben seguir una jerarquía lógica sin saltos
     */
    fc.assert(
      fc.property(
        fc.constant(loadHTML('index.html')),
        (document) => {
          const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
          const levels = headings.map(h => parseInt(h.tagName[1]));
          
          // Debe haber exactamente un h1
          const h1Count = levels.filter(l => l === 1).length;
          expect(h1Count).toBe(1);
          
          // No debe haber saltos en la jerarquía
          for (let i = 1; i < levels.length; i++) {
            const diff = levels[i] - levels[i - 1];
            expect(diff).toBeLessThanOrEqual(1);
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

#### 2. Navegación Completa

```javascript
describe('Property: Complete Navigation', () => {
  test('all main sections have corresponding navigation links', () => {
    /**
     * Feature: cv-website, Property 6: Para cualquier sección principal del CV, 
     * debe existir un enlace de navegación correspondiente
     */
    fc.assert(
      fc.property(
        fc.constant(loadHTML('index.html')),
        (document) => {
          const mainSections = document.querySelectorAll('section[id]');
          const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
          const navTargets = Array.from(navLinks).map(link => 
            link.getAttribute('href').substring(1)
          );
          
          mainSections.forEach(section => {
            expect(navTargets).toContain(section.id);
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

#### 3. HTML Semántico

```javascript
describe('Property: Semantic HTML', () => {
  test('main content uses semantic tags instead of generic divs', () => {
    /**
     * Feature: cv-website, Property 10: Para cualquier sección del contenido, 
     * debe utilizar etiquetas HTML5 semánticas apropiadas
     */
    fc.assert(
      fc.property(
        fc.constant(loadHTML('index.html')),
        (document) => {
          const semanticTags = ['section', 'article', 'nav', 'header', 'footer', 'aside'];
          const mainContent = document.querySelector('body');
          
          // Verificar que existen etiquetas semánticas
          const hasSemanticTags = semanticTags.some(tag => 
            mainContent.querySelector(tag) !== null
          );
          expect(hasSemanticTags).toBe(true);
          
          // Las secciones principales deben usar <section>
          const mainSections = mainContent.querySelectorAll('#profile, #education, #skills, #projects, #contact');
          mainSections.forEach(element => {
            expect(element.tagName.toLowerCase()).toBe('section');
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

#### 4. Variables CSS Consistentes

```javascript
describe('Property: CSS Variables Consistency', () => {
  test('CSS uses variables for colors, spacing, and typography', () => {
    /**
     * Feature: cv-website, Property 8: Para cualquier archivo CSS principal, 
     * debe definir variables CSS y utilizarlas en lugar de valores hardcodeados
     */
    fc.assert(
      fc.property(
        fc.constant(loadCSS('styles/main.css')),
        (css) => {
          // Verificar que existen variables CSS definidas
          expect(css).toMatch(/--color-/);
          expect(css).toMatch(/--spacing-/);
          expect(css).toMatch(/--font-/);
          
          // Verificar que se usan variables (var(--))
          const varUsageCount = (css.match(/var\(--/g) || []).length;
          expect(varUsageCount).toBeGreaterThan(10);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

#### 5. Independencia de Dependencias Externas

```javascript
describe('Property: No External Dependencies', () => {
  test('no external CDN or API references in any file', () => {
    /**
     * Feature: cv-website, Property 9: Para cualquier archivo del sitio, 
     * no debe contener referencias a recursos externos
     */
    fc.assert(
      fc.property(
        fc.constant([
          loadHTML('index.html'),
          loadCSS('styles/main.css'),
          loadJS('scripts/navigation.js')
        ]),
        (files) => {
          files.forEach(fileContent => {
            // No debe haber URLs externas
            expect(fileContent).not.toMatch(/https?:\/\/cdn\./);
            expect(fileContent).not.toMatch(/https?:\/\/.*\.googleapis\.com/);
            expect(fileContent).not.toMatch(/https?:\/\/.*\.cloudflare\.com/);
            
            // No debe haber imports de módulos externos
            expect(fileContent).not.toMatch(/import.*from ['"]https?:/);
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

#### 6. Contraste de Color Accesible

```javascript
describe('Property: Accessible Color Contrast', () => {
  test('text and background color combinations meet WCAG AA standards', () => {
    /**
     * Feature: cv-website, Property 11: Para cualquier combinación de color de texto y fondo, 
     * el ratio de contraste debe cumplir WCAG 2.1 AA (mínimo 4.5:1)
     */
    fc.assert(
      fc.property(
        fc.constant(loadCSS('styles/main.css')),
        (css) => {
          // Extraer variables de color
          const colorVars = extractCSSVariables(css, '--color-');
          
          // Verificar contraste entre texto y fondo
          const textColor = colorVars['--color-text'];
          const backgroundColor = colorVars['--color-background'];
          
          const contrastRatio = calculateContrastRatio(textColor, backgroundColor);
          expect(contrastRatio).toBeGreaterThanOrEqual(4.5);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

#### 7. Estilos de Foco

```javascript
describe('Property: Focus Styles', () => {
  test('all interactive elements have focus styles defined', () => {
    /**
     * Feature: cv-website, Property 12: Para cualquier elemento interactivo, 
     * debe existir una regla CSS :focus
     */
    fc.assert(
      fc.property(
        fc.constant([loadHTML('index.html'), loadCSS('styles/main.css')]),
        ([html, css]) => {
          const document = html;
          const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
          
          // Verificar que existen reglas :focus en el CSS
          expect(css).toMatch(/:focus/);
          
          // Verificar que no se elimina el outline sin reemplazo
          const removesOutline = css.match(/outline:\s*none/) || css.match(/outline:\s*0/);
          if (removesOutline) {
            // Si se elimina outline, debe haber un reemplazo visual
            expect(css).toMatch(/:focus.*{[^}]*(border|background|box-shadow)/);
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Testing de Accesibilidad

Además de los tests unitarios y de propiedades, se realizarán tests de accesibilidad automatizados:

```javascript
const { axe, toHaveNoViolations } = require('jest-axe');
expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  test('page has no accessibility violations', async () => {
    const html = loadHTML('index.html');
    const results = await axe(html);
    expect(results).toHaveNoViolations();
  });
});
```

### Cobertura de Testing

**Objetivo de Cobertura**:
- Unit tests: 100% de los requisitos específicos (ejemplos concretos)
- Property tests: 100% de las propiedades de corrección definidas
- Accesibilidad: 0 violaciones en axe-core

**Balance de Tests**:
- No escribir demasiados unit tests para casos que los property tests ya cubren
- Enfocarse en ejemplos específicos, casos edge y puntos de integración
- Los property tests manejan la cobertura exhaustiva de inputs

### Ejecución de Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar solo unit tests
npm test -- --testPathPattern=unit

# Ejecutar solo property tests
npm test -- --testPathPattern=property

# Ejecutar con cobertura
npm test -- --coverage

# Validar HTML
npx htmlhint index.html

# Validar CSS
npx stylelint "styles/**/*.css"

# Validar accesibilidad
npm run test:a11y
```

### Integración Continua

Los tests deben ejecutarse automáticamente en cada commit:

```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test
      - run: npx htmlhint index.html
      - run: npx stylelint "styles/**/*.css"
```

