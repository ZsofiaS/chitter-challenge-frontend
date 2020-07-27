describe('Individual page', () => {
  it('user can view individual page', () => {
    cy.visit('/');
    cy.get('.peep').first().click();
    cy.get('.App').should('contain', 'Back');
  })
  it('navigates back to main page with Back button', () => {
    cy.get('#backButton').click();
    cy.get('.App').should('contain', 'Latest peeps');
  })
})
