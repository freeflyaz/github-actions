/* eslint-env mocha */
/* global cy */

describe('Vite React App Test', () => {
    it('Visits the app and checks title', () => {
      cy.visit('http://localhost:5173'); // Vite uses port 5173 by default
      cy.contains('Vite + React').should('be.visible');
    });
  });