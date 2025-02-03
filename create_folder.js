describe('Login Test', () => {
    it('should log in with valid credentials', () => {
      cy.visit('https://dev.ezdrafts.com/signin');  // Since baseUrl is set in cypress.json, you can visit the relative URL
      cy.get('._inputBox_10sz7_78').type('jaboko9925@halbov.com');
      cy.get('.m_f2d85dd2').type('Vicky@123');
      cy.get('.m_80f1301b').click();
      cy.url().should('include', '/dashboard');

      cy.get('nav._navbar_30v0l_1').contains('Folders').click(); // Find the element with text "Folders"
      cy.wait(2000);

      //creating 10 folders with random names with the help of fisher-yates algorithm i.e chooses 
      //random numbers from 1 to 500 and then selects the first 10 unique numbers 
      // and then creates folders with the help of those numbersss

      const numbers = Array.from({ length: 500 }, (_, i) => i + 1);

    // Shuffle the array using the Fisher-Yates algorithm.
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Select the first 5 unique numbers.
    const selectedNumbers = numbers.slice(0, 5);

    // Loop over the selected numbers to create folders.
    selectedNumbers.forEach((num) => {
      // Format the folder name, e.g., Folder_001, Folder_012, etc.
      const folderName = `Folder_${String(num).padStart(3, '0')}`;

      // Use your provided steps to create a folder.
      cy.contains('Create folder').click();
      cy.get('.m_8fb7ebe7').eq(4).type(folderName);
      cy.contains('Save').click();
 })

    //clicks on select all checkbox
    cy.get('._input_edu4q_38').click();


      // switches to list view
      cy.get('.tabler-icon.tabler-icon-list-check ').click();
    });
  });
  