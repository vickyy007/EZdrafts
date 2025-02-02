describe('Regression Test', () => {
    it('E2E regression testing', () => {
      cy.visit('https://dev.ezdrafts.com/signin');  // Since baseUrl is set in cypress.json, you can visit the relative URL
      cy.get('._inputBox_10sz7_78').type('jaboko9925@halbov.com');
      cy.get('.m_f2d85dd2').type('Vicky@123');
      cy.get('.m_80f1301b').click();
      cy.url().should('include', '/dashboard');
      cy.wait(2000);
      cy.contains('Create document').click(); // Find the element with text "Create document"
      cy.wait(2000);
      cy.get('button[class="mantine-focus-auto mantine-active m_220c80f2 m_606cb269 mantine-Modal-close m_86a44da5 mantine-CloseButton-root m_87cf2631 mantine-UnstyledButton-root"] svg')
      .click(); // clicks on close(X) icon to close the modal
      cy.wait(2000);
      cy.get('nav._navbar_30v0l_1').contains('Folders').click(); // Find the element with text "Folders"
      cy.wait(2000);
      cy.contains('Create folder').click(); // Find the element with text "Create folder" and click on it
      cy.get('.m_8fb7ebe7').eq(4).type('Test Folder 001'); // Enter the folder name
      cy.wait(2000);
      cy.contains('Save').click();
      cy.wait(2000);
      cy.reload();
      cy.wait(2000);
      cy.get('.tabler-icon.tabler-icon-list-check ').click();
      cy.wait(2000);
      cy.get('nav._navbar_30v0l_1').contains('Templates').click();
    });
});