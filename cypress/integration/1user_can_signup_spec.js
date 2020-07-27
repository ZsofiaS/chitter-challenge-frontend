describe('Signup section', () => {
  it('user can signup', () => {
    cy.visit('/');
    cy.get('#nameInput').type('Jimmy').should('have.value', 'Jimmy');
    cy.get('#passwordInput').type('123456').should('have.value', '123456');
    cy.get('#signupSubmit').click();
    cy.get('.App').should('contain', 'Signup successful.');
  })
})
