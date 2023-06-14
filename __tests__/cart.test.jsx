import { render, screen, fireEvent } from '@testing-library/react'
import Cart from '../pages/cart'
import '@testing-library/jest-dom'


describe('Cart', () => {
  it('renders a heading', () => {
    render(<Cart />)
    const heading = screen.getByRole('heading', {
      name: /Cart/i,
    })
    expect(heading).toBeInTheDocument()
  })
  it('check if checkout button exists', () => {
    render(<Cart />)
    const button = screen.getByText(/continue to checkout/i)
    expect(button).toBeTruthy();
  })
})