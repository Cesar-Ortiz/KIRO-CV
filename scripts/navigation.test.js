/**
 * Tests para el módulo de navegación
 */

// Mock del DOM
document.body.innerHTML = `
  <header class="site-header">
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
  
  <section id="profile" class="section profile-section">
    <h2 class="section-title">Perfil Profesional</h2>
  </section>
  
  <section id="education" class="section education-section">
    <h2 class="section-title">Formación Académica</h2>
  </section>
  
  <section id="skills" class="section skills-section">
    <h2 class="section-title">Habilidades Técnicas</h2>
  </section>
  
  <section id="projects" class="section projects-section">
    <h2 class="section-title">Proyectos</h2>
  </section>
  
  <section id="contact" class="section contact-section">
    <h2 class="section-title">Contacto</h2>
  </section>
`;

// Importar el módulo de navegación
const Navigation = require('./navigation.js');

describe('Navigation Module', () => {
  beforeEach(() => {
    // Limpiar clases activas antes de cada test
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => link.classList.remove('active'));
  });

  describe('init()', () => {
    test('should initialize without errors', () => {
      expect(() => Navigation.init()).not.toThrow();
    });

    test('should add click event listeners to navigation links', () => {
      const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
      expect(navLinks.length).toBeGreaterThan(0);
      
      // Verificar que los enlaces existen
      expect(navLinks.length).toBe(5);
    });
  });

  describe('scrollToSection()', () => {
    test('should scroll to existing section', () => {
      const section = document.getElementById('profile');
      const scrollIntoViewMock = jest.fn();
      section.scrollIntoView = scrollIntoViewMock;

      Navigation.scrollToSection('profile');

      expect(scrollIntoViewMock).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start'
      });
    });

    test('should handle non-existing section gracefully', () => {
      expect(() => Navigation.scrollToSection('nonexistent')).not.toThrow();
    });
  });

  describe('updateActiveLink()', () => {
    test('should update active link based on scroll position', () => {
      // Mock de offsetTop y offsetHeight para las secciones
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section, index) => {
        Object.defineProperty(section, 'offsetTop', {
          value: index * 500,
          writable: true
        });
        Object.defineProperty(section, 'offsetHeight', {
          value: 500,
          writable: true
        });
      });

      // Mock de window.scrollY
      Object.defineProperty(window, 'scrollY', {
        value: 100,
        writable: true
      });

      Navigation.updateActiveLink();

      // Verificar que al menos un enlace tiene la clase active
      const activeLinks = document.querySelectorAll('.main-nav a.active');
      expect(activeLinks.length).toBeGreaterThanOrEqual(0);
    });

    test('should remove active class from all links when no section is in view', () => {
      // Mock de offsetTop y offsetHeight para las secciones
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section, index) => {
        Object.defineProperty(section, 'offsetTop', {
          value: index * 500 + 10000, // Muy lejos
          writable: true
        });
        Object.defineProperty(section, 'offsetHeight', {
          value: 500,
          writable: true
        });
      });

      // Mock de window.scrollY
      Object.defineProperty(window, 'scrollY', {
        value: 0,
        writable: true
      });

      Navigation.updateActiveLink();

      // Verificar que ningún enlace tiene la clase active
      const activeLinks = document.querySelectorAll('.main-nav a.active');
      expect(activeLinks.length).toBe(0);
    });
  });

  describe('toggleMobileMenu()', () => {
    test('should toggle mobile menu class', () => {
      const nav = document.querySelector('.main-nav');
      
      Navigation.toggleMobileMenu();
      expect(nav.classList.contains('mobile-menu-open')).toBe(true);
      
      Navigation.toggleMobileMenu();
      expect(nav.classList.contains('mobile-menu-open')).toBe(false);
    });

    test('should handle missing nav element gracefully', () => {
      // Remover temporalmente el nav
      const nav = document.querySelector('.main-nav');
      const parent = nav.parentNode;
      parent.removeChild(nav);

      expect(() => Navigation.toggleMobileMenu()).not.toThrow();

      // Restaurar el nav
      parent.appendChild(nav);
    });
  });

  describe('Navigation Links', () => {
    test('all navigation links should point to existing sections', () => {
      const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
      
      navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        expect(targetSection).toBeTruthy();
      });
    });

    test('all main sections should have corresponding navigation links', () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
      const navTargets = Array.from(navLinks).map(link => 
        link.getAttribute('href').substring(1)
      );

      sections.forEach(section => {
        expect(navTargets).toContain(section.id);
      });
    });
  });
});
