import Column, { ColumnProps } from '..'
import { capitalize } from '../../../../../utils/capitalize'
import { render, screen } from '../../../../../utils/testing'
import { tasks } from '../../../../../__mock__'

const props: ColumnProps = {
  title: 'title column',
  list: [],
}

describe('Column', () => {
  test('render correctly', () => {
    render(<Column {...props} />)
    expect(screen).toBeDefined()
  })

  test('should display a title and a list', () => {
    props.list = tasks
    render(<Column {...props} />)
    expect(screen.getByText(capitalize(props.title))).toBeInTheDocument()
    expect(screen.getByTestId('column-list').childElementCount).toBe(tasks.length)
  })
})
