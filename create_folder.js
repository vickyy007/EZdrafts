describe('Login Test', () => {
    it('should log in with valid credentials', () => {
      cy.visit('https://dev.ezdrafts.com/signin');  // Since baseUrl is set in cypress.json, you can visit the relative URL
      cy.get('._inputBox_10sz7_78').type('jaboko9925@halbov.com');
      cy.get('.m_f2d85dd2').type('Vicky@123');
      cy.get('.m_80f1301b').click();
      cy.url().should('include', '/dashboard');
      cy.get('nav._navbar_30v0l_1').contains('Folders').click(); // Find the element with text "Folders"
      cy.contains('Create folder').click(); // Find the element with text "Create folder" and click on it
      cy.get('.m_8fb7ebe7').eq(4).type('Test Folder 001'); // Enter the folder name
      cy.contains('Save').click();
      cy.wait(3000);
      cy.reload();
      cy.wait(2000);
      cy.get('.tabler-icon.tabler-icon-list-check ').click();

      
    });
  });
  