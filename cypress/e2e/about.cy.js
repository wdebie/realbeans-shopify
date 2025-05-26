// About Page Tests

describe('About Page Tests', () => {
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
    cy.get('#HeaderMenu-about-us').click({force: true});
    
    Cypress.on('uncaught:exception', () => false);
  });

  it('should contain the specific history text about RealBeans', () => {
    const expectedText = "From a small Antwerp grocery to a European coffee staple, RealBeans honors tradition while innovating for the future. Our beans are roasted in-house, shipped from Antwerp or Stockholm, and loved across the continent.";
    cy.get('.rte').should('contain', expectedText);
  });
});
