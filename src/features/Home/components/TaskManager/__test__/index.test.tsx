import { vi } from 'vitest'
import TaskManager from '..'
import * as taskSlice from '../../../../../store/taskSlice'
import { act, changeValue, render, screen } from '../../../../../utils/testing'
import { tasks } from '../../../../../__mock__'
import Filters from '../Filters'
import ListOfTasks from '../ListOfTasks'

vi.mock('../../../../../api/task')

describe('TaskManager', () => {
  test('render correctly', async () => {
    await act(() => render(<TaskManager />))
    expect(screen).toBeDefined()
  })

  test('should display a list of tasks', () => {
    render(<ListOfTasks list={tasks} />)
    const [title] = screen.getAllByText(/pending/i)
    expect(title).toBeInTheDocument()
  })

  test('filters', () => {
    const updateFilteredTasks = vi.spyOn(taskSlice, 'updateFilteredTasks')
    render(<Filters />)
    changeValue(screen.getByPlaceholderText('Insert a title'), 'title')
    expect(updateFilteredTasks).toHaveBeenCalled()
  })
})
