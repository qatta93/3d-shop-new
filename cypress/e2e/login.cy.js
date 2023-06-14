import Login from '../../pages/login'

describe('<Login />', () => {
  it('should navigate to chairs url', () => {
    // @ts-ignore
    cy.mount(Login)
    cy.get('h1').contains('Login')

  })
})
