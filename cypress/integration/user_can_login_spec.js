describe('Login section', () => {
  it('user can login', () => {
    cy.visit('/');
    cy.get('#nameInput').type('Jimmy').should('have.value', 'Jimmy');
    cy.get('#passwordInput').type('123456').should('have.value', '123456');
    cy.get('#loginSubmit').click();
    cy.get('#peepSubmit').should('exist')
  })
})
