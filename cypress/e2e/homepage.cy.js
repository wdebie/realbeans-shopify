// homepage.cy.js

describe('Test 1', () => {

    beforeEach(() => {
      cy.visit(`${Cypress.env('SHOPIFY_URL')}?preview_theme_id=${Cypress.env('THEME_ID')}`);
      cy.get('form[action="/password"]')
        .then(() => {
          cy.get('button[aria-controls="password-drawer"]').click();
   
          cy.get('drawer-content input[type="password"]').type(`${Cypress.env('THEME_PASSWORD')}{enter}`)
        })
   
   
      Cypress.on('uncaught:exception', () => false)
    });
   
    it("Test 1", ()=> {
      cy.get('.header__wrapper')
        .should('exist')
    })
   });