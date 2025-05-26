// Homepage Tests

describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('SHOPIFY_URL')}`);
    
    cy.get('body').then(($body) => {
      if ($body.find('form[action="/password"]').length > 0) {
        cy.get('button[type="submit"]').click();
        cy.get('form[action="/password"] input[type="password"]').type(`${Cypress.env('THEME_PASSWORD')}{enter}`);
      }
    });

    cy.wait(1000);
    cy.get('button:contains("Accept")').then(($el) => {
      if ($el.length > 0) {
        $el.click({force: true});
      }
    });

    cy.wait(1000);
    cy.get('body').should('not.contain', 'Accept');

    Cypress.on('uncaught:exception', () => false);
  });

  it('should display the specific intro text about RealBeans history', () => {
    const expectedText = "Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe's finest cafes. Ethically sourced beans, crafted with care.";
    cy.contains(expectedText).should('exist');
  });
});