describe('Navigation', () => {
  it('should navigate to the home page', () => {
    cy.visit('/cart')
    cy.get('a[href*="/"]').click({multiple: true})
    cy.url().should('include', '/')
    cy.get('h1').contains('Furniture for a better everyday life.')
  })
})