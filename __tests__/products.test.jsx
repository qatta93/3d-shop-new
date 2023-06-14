import { render, screen, fireEvent } from '@testing-library/react'
import Products from '../pages/products'
import '@testing-library/jest-dom'
import furnitureTypes from "public/api/productsTypes.json"


describe('Home', () => {
  it('renders a heading', () => {
    render(<Products />)
    const heading = screen.getAllByText(/Products/i)[0]
    expect(heading).toBeInTheDocument()
  })
  it('check if all products types components are rendered', async () => {
    render(<Products />);
    const products = await screen.findAllByText(/from/)
    expect(products).toHaveLength(furnitureTypes.length)
  })
})