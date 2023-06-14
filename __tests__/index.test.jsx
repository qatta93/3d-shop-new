import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import furnitureTypes from "public/api/productsTypes.json"


describe('Home', () => {
  beforeAll(() => render(<Home />))
  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Furniture for a better everyday life./i,
    })
    expect(heading).toBeInTheDocument()
  })
  it('check if button exists', () => {
    render(<Home />);
    const button = screen.getByText(/see 3d models/i)
    expect(button).toBeTruthy()
  })
  it('check if all products types components are rendered', async () => {
    render(<Home />);
    const products = await screen.findAllByText(/from/)
    expect(products).toHaveLength(furnitureTypes.length)
  })
})