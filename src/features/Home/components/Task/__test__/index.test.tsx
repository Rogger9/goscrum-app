import { vi } from 'vitest'
import Task from '..'
import * as apiTask from '../../../../../api/task'
import { fireEvent, render, screen, waitFor } from '../../../../../utils/testing'
import { tasks } from '../../../../../__mock__'

vi.mock('../../../../../api/task')
const [, data] = tasks

describe('Task', () => {
  beforeEach(() => render(<Task {...data} />))

  test('render correctly', () => {
    expect(screen).toBeDefined()
  })

  test('should show/hide description', () => {
    const displayBtn = screen.getByText(/show more/i)
    expect(displayBtn).toBeInTheDocument()
    fireEvent.click(displayBtn)
    const hideBtn = screen.getByText(/show less/i)
    expect(hideBtn).toBeInTheDocument()
  })

  test('should change status of task', async () => {
    const updateTask = vi.spyOn(apiTask, 'updateTask')
    await waitFor(() => fireEvent.click(screen.getByText(/Move to/i)))
    expect(updateTask).toHaveBeenCalled()
  })

  test('should delete task', async () => {
    const deleteTask = vi.spyOn(apiTask, 'deleteTask')
    await waitFor(() => fireEvent.click(screen.getByRole('img')))
    expect(deleteTask).toHaveBeenCalledTimes(1)
  })
})
