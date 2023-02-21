import { render, screen, fireEvent } from '@testing-library/react'
import Products from '../pages/products'
import '@testing-library/jest-dom'


describe('Home', () => {
  it('renders a heading', () => {
    render(<Products />)

    const heading = screen.getAllByText(/Products/i)[0]

    expect(heading).toBeInTheDocument()
  }
  )
})