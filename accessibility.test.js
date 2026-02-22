/**
 * Tests de accesibilidad con axe-core
 * Valida que el sitio cumple con estándares WCAG 2.1 AA
 */

const { axe, toHaveNoViolations } = require('jest-axe');
const fs = require('fs');
const path = require('path');

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  let html;

  beforeAll(() => {
    // Cargar el archivo HTML
    html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  });

  test('page should have no accessibility violations', async () => {
    // Crear un documento DOM desde el HTML
    document.body.innerHTML = html;
    
    // Ejecutar axe-core en el documento
    const results = await axe(document.body);
    
    // Verificar que no hay violaciones
    expect(results).toHaveNoViolations();
  });

  test('page should have proper heading hierarchy', async () => {
    document.body.innerHTML = html;
    
    const results = await axe(document.body, {
      rules: {
        'heading-order': { enabled: true }
      }
    });
    
    expect(results).toHaveNoViolations();
  });

  test('page should have sufficient color contrast', async () => {
    document.body.innerHTML = html;
    
    const results = await axe(document.body, {
      rules: {
        'color-contrast': { enabled: true }
      }
    });
    
    expect(results).toHaveNoViolations();
  });

  test('interactive elements should have focus indicators', async () => {
    document.body.innerHTML = html;
    
    const results = await axe(document.body, {
      rules: {
        'focus-order-semantics': { enabled: true }
      }
    });
    
    expect(results).toHaveNoViolations();
  });

  test('page should use semantic HTML', async () => {
    document.body.innerHTML = html;
    
    const results = await axe(document.body, {
      rules: {
        'region': { enabled: true },
        'landmark-one-main': { enabled: true }
      }
    });
    
    expect(results).toHaveNoViolations();
  });
});
