import { render, screen, fireEvent } from '@testing-library/react'
import { RegisterForm } from '@/components/register/registerForm/index'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


describe('Register Form', () => {
  it('has an input with password placeholder', () => {
    render(<RegisterForm />)
    const inputPlaceholder = screen.getByPlaceholderText('Password*')
    expect(inputPlaceholder).toBeInTheDocument()
  })
  it('check if register button exists', () => {
    render(<RegisterForm />)
    const button = screen.getByText(/register/i)
    expect(button).toBeTruthy();
  })
  it('show red border if user type wrong email address', async() => {
    render(<RegisterForm />)
    userEvent.type(screen.getByPlaceholderText(/email/i), 'aaaaaaa')
    expect(await screen.getByPlaceholderText(/email/i)).toHaveStyle('border-color: error-primary')
  })
})