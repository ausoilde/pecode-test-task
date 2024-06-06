Cypress.Commands.add('login', (username, password) => {
    cy.visit('/qa-portal/greet.php');

    cy.get('input[name="username"]')
      .should('exist')
      .type(username);
    
    cy.get('input[name="password"]')
      .should('exist')
      .type(password);

    cy.get('input[value="Login"]')
      .should('exist')
      .click();
});
