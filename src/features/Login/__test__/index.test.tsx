import { vi } from 'vitest'
import Login from '..'
import { changeValue, fireEvent, render, screen, waitFor } from '../../../utils/testing'

vi.mock('../../../api/auth')

describe('Login', () => {
  beforeEach(() => render(<Login />))

  test('render correctly', () => {
    expect(screen).toBeDefined()
  })

  test('should send data', async () => {
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    changeValue(screen.getByLabelText('Email'), 'correo@correo.com')
    changeValue(screen.getByLabelText('Password'), 'abc123')
    expect(btn).toBeEnabled()
    await waitFor(() => fireEvent.submit(screen.getByRole('form')))
  })
})
