import PrimaryButton from '..'
import { render, screen } from '../../../utils/testing'

describe('PrimaryButton', () => {
  test('render correctly', () => {
    render(<PrimaryButton />)
    expect(screen).toBeDefined()
  })
})
