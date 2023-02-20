
import Home from '../../pages/index'

describe('<Home />', () => {
  it('should render and display expected content', () => {
    // @ts-ignore
    cy.mount(Home)
    cy.get('h1').contains('Furniture for a better everyday life.')
  })
})