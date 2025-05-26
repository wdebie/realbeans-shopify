// Product Detail Page Tests

describe('Product Detail Page Tests', () => {
  // Test for Blended coffee 5kg product
  describe('Blended coffee 5kg product details', () => {
    beforeEach(() => {
      // Visit the collections page
      cy.visit(`${Cypress.env('SHOPIFY_URL')}`);
      
      // Handle password protection if present
      cy.get('body').then(($body) => {
        if ($body.find('form[action="/password"]').length > 0) {
          cy.get('button[type="submit"]').click();
          cy.get('form[action="/password"] input[type="password"]').type(`${Cypress.env('THEME_PASSWORD')}{enter}`);
        }
      });

      // Click the accept button for the cookie popup (if present)
      if (cy.get('button:contains("Accept")').length > 0) {
        cy.get('button:contains("Accept")').click({force: true});
      }
      
      cy.get('#HeaderMenu-catalog').click({force: true});
      cy.get('.card__heading').contains('Blended coffee 5kg').click();
      
      // Ignore uncaught exceptions
      Cypress.on('uncaught:exception', () => false);
    });

    it('should display the correct product description', () => {
      cy.get('.product__description').should('contain', 'RealBeans coffee, ready to brew.');
    });

    it('should display the correct product image', () => {
      cy.get('.product__media-item img').should('have.attr', 'src').and('include', 'RealBeansBlendBag.png');
    });
  });

  // Test for Roasted coffee beans 5kg product
  describe('Roasted coffee beans 5kg product details', () => {
    beforeEach(() => {
      // Visit the collections page
      cy.visit(`${Cypress.env('SHOPIFY_URL')}/collections/all?preview_theme_id=${Cypress.env('THEME_ID')}`);
      
      // Handle password protection if present
      cy.get('body').then(($body) => {
        if ($body.find('form[action="/password"]').length > 0) {
          cy.get('button[type="submit"]').click();
          cy.get('form[action="/password"] input[type="password"]').type(`${Cypress.env('THEME_PASSWORD')}{enter}`);
        }
      });

      // Click the accept button for the cookie popup (if present)
      if (cy.get('button:contains("Accept")').length > 0) {
        cy.get('button:contains("Accept")').click({force: true});
      }
      
      cy.get('#HeaderMenu-catalog').click({force: true});
      cy.get('.card__heading').contains('Roasted coffee beans 5kg').click();
      
      // Ignore uncaught exceptions
      Cypress.on('uncaught:exception', () => false);
    });

    it('should display the correct product description', () => {
      cy.get('.product__description').should('contain', 'Our best and sustainable real roasted beans.');
    });

    it('should display the correct product image', () => {
      cy.get('.product__media-item img').should('have.attr', 'src').and('include', 'RealBeansRoastedBag.png');
    });
  });
});
