describe('Login Test', () => {
    it('should log in with valid credentials', () => {
      cy.visit('https://dev.ezdrafts.com/signin');  // Since baseUrl is set in cypress.json, you can visit the relative URL
      cy.get('._inputBox_10sz7_78').type('jaboko9925@halbov.com'); //enters email address
      cy.get('.m_f2d85dd2').type('Vicky@123'); //enters password
      cy.get('.m_80f1301b').click(); //clicks sign in button
      cy.url().should('include', '/dashboard'); //checks the url 
    });
  });
  