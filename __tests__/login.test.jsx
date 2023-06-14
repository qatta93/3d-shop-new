import { render, screen, fireEvent } from '@testing-library/react'
import Login from '../pages/login'
import '@testing-library/jest-dom'


describe('Login', () => {
  it('renders a heading', () => {
    render(<Login />)
    const heading = screen.getByRole('heading', {
      name: /Login/i,
    })
    expect(heading).toBeInTheDocument()
  })
  it('check if - login with google - button exists', () => {
    render(<Login />)
    const button = screen.getByText(/continue with google/i)
    expect(button).toBeTruthy()
  })
  it('check if after clicking btn register, the register form appears', () => {
    render(<Login />)
    const button = screen.getByText(/register/i)
    fireEvent.click(button)
    expect(screen.getByRole('heading', {name: /Register/i})).toBeInTheDocument()
  })
})