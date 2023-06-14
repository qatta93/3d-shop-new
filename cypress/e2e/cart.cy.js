import Cart from '../../pages/index'

describe('<Cart />', () => {
  it('should render and display expected content', () => {
    // @ts-ignore
    cy.mount(Cart)
    cy.get('h1').contains('Shopping Cart')
  })
})