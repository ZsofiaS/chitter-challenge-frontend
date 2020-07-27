describe('End to end', () => {
  it('user can signup, login, post a peep, view individual page, go back', () => {
    cy.visit('/');
    cy.get('#nameInput').type('Jimmy').should('have.value', 'Jimmy');
    cy.get('#passwordInput').type('123456').should('have.value', '123456');
    cy.get('#signupSubmit').click();
    cy.get('#nameInput').type('Jimmy');
    cy.get('#passwordInput').type('123456');
    cy.get('#loginSubmit').click();
    cy.get('.peep').first().click();
    cy.get('.App').should('contain', 'Back');
    cy.get('#backButton').click();
    cy.get('.App').should('contain', 'Latest peeps');
  })
})
