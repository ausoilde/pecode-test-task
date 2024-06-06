describe('Authentication', () => {
  it('fails with incorrect credentials', () => {
    // import the credentials from a fixture and attempt to sign in
    cy.fixture('credentials.json').then((creds) => {
      cy.login(
        creds.username,
        creds.password
      );

      cy.log('Checking for error messages...')

      // check if the error message is displayed
      cy.contains('No account found with that username.')
        .should('not.exist');
    });
  });
});