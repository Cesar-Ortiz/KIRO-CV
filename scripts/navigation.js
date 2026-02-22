// Navigation JavaScript - Lógica de navegación y smooth scroll

/**
 * Módulo de navegación para el sitio CV
 * Maneja smooth scroll, actualización de enlaces activos y menú móvil
 */
const Navigation = {
  /**
   * Inicializa los event listeners para navegación
   */
  init: function() {
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    // Agregar event listeners para smooth scroll
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
      });
    });

    // Agregar event listener para actualizar enlace activo al hacer scroll
    window.addEventListener('scroll', () => {
      this.updateActiveLink();
    });

    // Actualizar enlace activo al cargar la página
    this.updateActiveLink();
  },

  /**
   * Maneja el smooth scroll a una sección específica
   * @param {string} sectionId - ID de la sección a la que hacer scroll
   */
  scrollToSection: function(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Usar smooth scroll nativo del navegador
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  },

  /**
   * Actualiza el estado activo del menú según la posición del scroll
   */
  updateActiveLink: function() {
    // Obtener todas las secciones
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY + 100; // Offset para activar antes

    // Encontrar la sección actualmente visible
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Actualizar clases activas en los enlaces
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      const targetId = link.getAttribute('href').substring(1);
      if (targetId === currentSection) {
        link.classList.add('active');
      }
    });
  },

  /**
   * Toggle del menú móvil (opcional, para implementación futura)
   * Esta función está preparada para cuando se agregue un botón hamburguesa
   */
  toggleMobileMenu: function() {
    const nav = document.querySelector('.main-nav');
    
    if (nav) {
      nav.classList.toggle('mobile-menu-open');
    }
  }
};

// Inicializar navegación cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
  });
} else {
  // DOM ya está listo
  Navigation.init();
}

// Exportar para testing (si se usa en entorno de módulos)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
}
