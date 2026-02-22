// Interactions JavaScript - Animaciones y efectos interactivos

/**
 * Módulo de Interacciones
 * Maneja animaciones al scroll, efectos interactivos y respeta las preferencias del usuario
 */
const Interactions = {
  /**
   * Verifica si el usuario prefiere movimiento reducido
   * @returns {boolean} true si el usuario prefiere movimiento reducido
   */
  prefersReducedMotion: function() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Inicializa todos los observers y event listeners
   */
  init: function() {
    // Solo inicializar animaciones si el usuario no prefiere movimiento reducido
    if (!this.prefersReducedMotion()) {
      this.observeElements();
      this.setupInteractiveEffects();
    }
    
    // Escuchar cambios en la preferencia de movimiento reducido
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', () => {
      if (motionQuery.matches) {
        // Si el usuario activa movimiento reducido, remover animaciones
        this.removeAnimations();
      } else {
        // Si el usuario desactiva movimiento reducido, reactivar animaciones
        this.observeElements();
        this.setupInteractiveEffects();
      }
    });
  },

  /**
   * Configura el Intersection Observer para animar elementos al entrar en viewport
   */
  observeElements: function() {
    // Configurar opciones del observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -100px 0px', // Activar 100px antes de que el elemento entre
      threshold: 0.1 // 10% del elemento debe ser visible
    };

    // Callback cuando un elemento entra o sale del viewport
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Agregar clase de animación cuando el elemento entra
          entry.target.classList.add('animate-in');
          
          // Opcional: dejar de observar el elemento después de animarlo
          // observer.unobserve(entry.target);
        }
      });
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Observar elementos individuales dentro de las secciones
    const animatableElements = document.querySelectorAll(
      '.education-item, .project-item, .skill-category, .contact-item'
    );
    
    animatableElements.forEach((element, index) => {
      // Agregar un pequeño delay escalonado para efecto cascada
      element.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(element);
    });

    // Guardar referencia al observer para poder limpiarlo después
    this.observer = observer;
  },

  /**
   * Configura efectos interactivos adicionales (hover, focus)
   */
  setupInteractiveEffects: function() {
    // Efecto de "elevación" en tarjetas al hacer hover
    const cards = document.querySelectorAll('.education-item, .project-item, .skill-category');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        if (!Interactions.prefersReducedMotion()) {
          this.style.transform = 'translateY(-4px)';
        }
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });

    // Efecto de resaltado en enlaces al hacer focus
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
      link.addEventListener('focus', function() {
        if (!Interactions.prefersReducedMotion()) {
          this.style.transition = 'all 0.2s ease';
        }
      });
    });

    // Efecto de pulsación suave en items de habilidades
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        if (!Interactions.prefersReducedMotion()) {
          this.style.transform = 'scale(1.05)';
          this.style.transition = 'transform 0.2s ease';
        }
      });

      item.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  },

  /**
   * Remueve todas las animaciones y efectos
   * Se llama cuando el usuario activa prefers-reduced-motion
   */
  removeAnimations: function() {
    // Desconectar el observer si existe
    if (this.observer) {
      this.observer.disconnect();
    }

    // Remover clases de animación
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach(element => {
      element.classList.remove('animate-in');
    });

    // Remover estilos inline de transformaciones
    const transformedElements = document.querySelectorAll('[style*="transform"]');
    transformedElements.forEach(element => {
      element.style.transform = '';
      element.style.transition = '';
    });
  }
};

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    Interactions.init();
  });
} else {
  // El DOM ya está listo
  Interactions.init();
}
