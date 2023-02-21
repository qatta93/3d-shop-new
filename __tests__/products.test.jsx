import { render, screen, fireEvent } from '@testing-library/react'
import Products from '../pages/products'
import '@testing-library/jest-dom'


describe('Home', () => {
  it('renders a heading', () => {
    render(<Products />)

    const heading = screen.getByRole('heading', {
      name: /Products/i,
    })

    expect(heading).toBeInTheDocument()
  })
})