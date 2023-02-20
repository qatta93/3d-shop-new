import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'


describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Furniture for a better everyday life./i,
    })

    expect(heading).toBeInTheDocument()
  })
})