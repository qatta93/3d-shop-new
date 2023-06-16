import { render, screen, fireEvent } from '@testing-library/react'
import { PaymentModal } from '@/components/cart/productsCart/productsCartModal/paymentModal/index'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


describe('Payment Modal', () => {
  it('has an input with name placeholder', () => {
    render(<PaymentModal />)
    const inputPlaceholder = screen.getByPlaceholderText('Name')
    expect(inputPlaceholder).toBeInTheDocument()
  })
  it('check if register button exists', () => {
    render(<PaymentModal />)
    const button = screen.getByText(/continue to checkout/i)
    expect(button).toBeTruthy();
  })
  it('when user type digits in name input, the input should be empty', async () => {
    render(<PaymentModal/>)
    await userEvent.type(screen.getByPlaceholderText(/name/i), '999')
    expect(screen.getByPlaceholderText(/name/i)).toHaveValue('');
  })
    it('check if CVC input has length of max 3 digits', async () => {
    render(<PaymentModal/>)
    const cvcInput = screen.getByPlaceholderText(/cvc/i)
    await userEvent.type(cvcInput, '123456')
    expect(cvcInput).toHaveValue('123')
  })
  it('when user write 16 digits of card number, it appears in proper format', async () => {
    render(<PaymentModal/>)
    const cardNumberInput = screen.getByPlaceholderText(/card/i)
    await userEvent.type(cardNumberInput, '1234567891234567')
    expect(cardNumberInput).toHaveValue('1234 5678 9123 4567')
  })
  it('when user type letters in card number input, the input should be empty', async () => {
    render(<PaymentModal/>)
    await userEvent.type(screen.getByPlaceholderText(/card/i), 'aaaaa')
    expect(screen.getByPlaceholderText(/card/i)).toHaveValue('');
  })
})