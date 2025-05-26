// Collection/Catalog Page Tests

describe('Collection/Catalog Page Tests', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('SHOPIFY_URL')}`);
    
    cy.get('body').then(($body) => {
      if ($body.find('form[action="/password"]').length > 0) {
        cy.get('button[type="submit"]').click();
        cy.get('form[action="/password"] input[type="password"]').type(`${Cypress.env('THEME_PASSWORD')}{enter}`);
      }
    });

    cy.wait(1000);
    if (cy.get('button:contains("Accept")').length > 0) {
      cy.get('button:contains("Accept")').click({force: true});
    }

    cy.wait(1000);
    cy.get('#HeaderMenu-catalog').click({force: true});
    
    Cypress.on('uncaught:exception', () => false);
  });

  it('should display "Blended coffee 5kg" product in the catalog', () => {
    cy.get('.card__heading').contains('Blended coffee 5kg').should('exist');
  });

  it('should display "Roasted coffee beans 5kg" product in the catalog', () => {
    cy.get('.card__heading').contains('Roasted coffee beans 5kg').should('exist');
  });
});
