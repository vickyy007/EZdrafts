describe('empty password validation', () => {
    it('should show error message', () => {
      cy.visit('https://dev.ezdrafts.com/signin');  // Since baseUrl is set in cypress.json, you can visit the relative URL
      cy.get('._inputBox_10sz7_78').type('jaboko9925@halbov.com'); //enters email address
      //cy.get('.m_f2d85dd2').type('Vicky@123'); empty password field
      cy.get('.m_80f1301b').click(); //clicks sign in button
      cy.contains('Please fill all the fields') //
    });
  });
  