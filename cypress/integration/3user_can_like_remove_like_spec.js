describe('Like section', () => {
  it('user can like a peep', () => {
    cy.visit('/');
    cy.get('#nameInput').type('Jimmy');
    cy.get('#passwordInput').type('123456');
    cy.get('#loginSubmit').click();
    cy.get('.likeSubmit').first().click();
    cy.wait(10000);
    cy.get('.likeContainer').first().should('contain', '1');
  })
  it('user can remove like to a peep', () => {
    cy.get('.likeSubmit').first().click();
    cy.wait(10000);
    cy.get('.likeContainer').first().should('not.contain', '1');
  })
})
