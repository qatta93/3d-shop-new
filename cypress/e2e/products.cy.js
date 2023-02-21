import Products from '../../pages/products'

describe('<Products />', () => {
  it('should navigate to chairs url', () => {
    // @ts-ignore
    cy.mount(Products)
    cy.get('a[href*="/products/chairs"]').click()
    cy.url().should('include', '/products/chairs')
    cy.get('h1').contains('Products')
  })
})
