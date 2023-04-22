import Loader from '..'
import { render, screen } from '../../../utils/testing'

describe('Loader', () => {
  test('render correctly', () => {
    render(<Loader />)
    expect(screen).toBeDefined()
  })
})
