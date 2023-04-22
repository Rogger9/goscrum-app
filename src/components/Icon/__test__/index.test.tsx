import { vi } from 'vitest'
import Icon from '..'
import { fireEvent, render, screen } from '../../../utils/testing'

describe('Icon', () => {
  test('render correctly', () => {
    render(<Icon name='close' />)
    expect(screen).toBeDefined()
  })

  test('should call function', () => {
    const func = vi.fn()
    render(<Icon name='close' onClick={func} />)
    fireEvent.click(screen.getByRole('img'))
    expect(func).toHaveBeenCalled()
  })
})
