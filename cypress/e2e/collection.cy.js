// Collection/Catalog and Product Detail Page Tests

describe('Collection/Catalog and Product Detail Tests', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('SHOPIFY_URL')}`);
    
    cy.get('body').then(($body) => {
      if ($body.find('form[action="/password"]').length > 0) {
        cy.get('button[type="submit"]').click();
        cy.get('form[action="/password"] input[type="password"]').type(`aingau{enter}`);
      }
    });

    cy.wait(1000);
    cy.handleAcceptButton();

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
  
  // Test for Blended coffee 5kg product details
  it('should display the correct details for Blended coffee 5kg product', () => {
    // Navigate to product detail page
    cy.get('.card__heading').contains('Blended coffee 5kg').click();
    
    // Check product description
    cy.get('.product__description').should('contain', 'RealBeans coffee, ready to brew.');
    
    // Check product image
    cy.get('.product__media-item img').should('have.attr', 'src').and('include', 'RealBeansBlendBag.png');
  });
  
  // Test for Roasted coffee beans 5kg product details
  it('should display the correct details for Roasted coffee beans 5kg product', () => {
    // Go back to catalog page
    cy.visit(`${Cypress.env('SHOPIFY_URL')}`);
    cy.get('body').then(($body) => {
      if ($body.find('form[action="/password"]').length > 0) {
        cy.get('button[type="submit"]').click();
        cy.get('form[action="/password"] input[type="password"]').type(`aingau{enter}`);
      }
    });
    cy.handleAcceptButton();
    cy.get('#HeaderMenu-catalog').click({force: true});
    
    // Navigate to Roasted coffee beans product
    cy.get('.card__heading').contains('Roasted coffee beans 5kg').click();
    
    // Check product description
    cy.get('.product__description').should('contain', 'Our best and sustainable real roasted beans.');
    
    // Check product image
    cy.get('.product__media-item img').should('have.attr', 'src').and('include', 'RealBeansRoastedBag.png');
  });
});

