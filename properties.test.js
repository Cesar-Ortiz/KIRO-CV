/**
 * Property-Based Tests para el sitio CV
 * Valida propiedades universales de corrección
 */

const fc = require('fast-check');
const fs = require('fs');
const path = require('path');

describe('Property-Based Tests', () => {
  let html;
  let document;

  beforeAll(() => {
    html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  });

  beforeEach(() => {
    document = window.document;
    document.body.innerHTML = html;
  });

  describe('Property 2: Orden cronológico inverso de educación', () => {
    test('education entries should be in reverse chronological order', () => {
      /**
       * **Validates: Requirements 3.3**
       * 
       * Para cualquier par de entradas educativas consecutivas en la sección de educación,
       * la fecha de la primera entrada debe ser posterior o igual a la fecha de la segunda entrada.
       */
      fc.assert(
        fc.property(
          fc.constant(document),
          (doc) => {
            const educationItems = Array.from(doc.querySelectorAll('.education-item time[datetime]'));
            
            // Debe haber al menos 2 entradas para validar el orden
            expect(educationItems.length).toBeGreaterThanOrEqual(2);
            
            // Extraer las fechas en formato ISO
            const dates = educationItems.map(item => new Date(item.getAttribute('datetime')));
            
            // Verificar que cada fecha es posterior o igual a la siguiente
            for (let i = 0; i < dates.length - 1; i++) {
              expect(dates[i].getTime()).toBeGreaterThanOrEqual(dates[i + 1].getTime());
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Property 3: Presencia completa de habilidades', () => {
    test('all expected skills should be present in the skills section', () => {
      /**
       * **Validates: Requirements 4.1**
       * 
       * Para cualquier lista de habilidades esperadas (Java, JavaScript, SQL, Python, Spring, 
       * React, HTML, CSS, Docker, Git, FastAPI, AWS), todas deben estar presentes en la 
       * sección de habilidades del documento.
       */
      fc.assert(
        fc.property(
          fc.constant(document),
          (doc) => {
            const expectedSkills = [
              'Java', 'JavaScript', 'SQL', 'Python',
              'Spring', 'React', 'HTML', 'CSS',
              'Docker', 'Git', 'FastAPI', 'AWS'
            ];
            
            const skillsSection = doc.getElementById('skills');
            expect(skillsSection).toBeTruthy();
            
            const skillsText = skillsSection.textContent;
            
            // Verificar que cada habilidad esperada está presente
            expectedSkills.forEach(skill => {
              expect(skillsText).toContain(skill);
            });
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Property 4: Agrupación de habilidades', () => {
    test('skills should be organized in multiple categories', () => {
      /**
       * **Validates: Requirements 4.3**
       * 
       * Para cualquier sección de habilidades, las habilidades deben estar organizadas en 
       * múltiples categorías (no todas en una lista plana), donde cada categoría contiene 
       * al menos una habilidad.
       */
      fc.assert(
        fc.property(
          fc.constant(document),
          (doc) => {
            const skillCategories = doc.querySelectorAll('.skill-category');
            
            // Debe haber múltiples categorías (más de 1)
            expect(skillCategories.length).toBeGreaterThan(1);
            
            // Cada categoría debe tener al menos una habilidad
            skillCategories.forEach(category => {
              const skills = category.querySelectorAll('.skill-item');
              expect(skills.length).toBeGreaterThanOrEqual(1);
            });
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Property 5: Estructura de proyectos', () => {
    test('each project should have title and description elements', () => {
      /**
       * **Validates: Requirements 5.4**
       * 
       * Para cualquier proyecto en la sección de proyectos, debe tener un elemento de título (h3) 
       * y un elemento de descripción (p) como hijos directos o descendientes del contenedor del proyecto.
       */
      fc.assert(
        fc.property(
          fc.constant(document),
          (doc) => {
            const projectItems = doc.querySelectorAll('.project-item');
            
            // Debe haber al menos un proyecto
            expect(projectItems.length).toBeGreaterThan(0);
            
            // Cada proyecto debe tener título y descripción
            projectItems.forEach(project => {
              const title = project.querySelector('h3');
              const description = project.querySelector('p');
              
              expect(title).toBeTruthy();
              expect(description).toBeTruthy();
              expect(title.textContent.trim()).not.toBe('');
              expect(description.textContent.trim()).not.toBe('');
            });
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});
