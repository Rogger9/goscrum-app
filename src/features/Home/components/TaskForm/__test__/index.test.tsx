import { vi } from 'vitest'
import TaskForm from '..'
import * as apiTask from '../../../../../api/task'
import { TaskPriority, TaskState } from '../../../../../models/ITask'
import { changeValue, fireEvent, render, screen, waitFor } from '../../../../../utils/testing'

vi.mock('../../../../../api/task')

describe('TaskForm', () => {
  beforeEach(() => render(<TaskForm />))

  afterEach(() => vi.resetAllMocks())

  test('render correctly', () => {
    expect(screen).toBeDefined()
  })

  test('should create task', async () => {
    const createTask = vi.spyOn(apiTask, 'createTask')
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    changeValue(screen.getByPlaceholderText('Title'), 'New title task')
    changeValue(screen.getByTestId('form-status'), TaskState.PENDING)
    changeValue(screen.getByTestId('form-priority'), TaskPriority.HIGH)
    changeValue(screen.getByPlaceholderText('Description'), 'Desc')
    expect(btn).toBeEnabled()
    await waitFor(() => fireEvent.submit(screen.getByRole('form')))
    expect(createTask).toHaveBeenCalled()
  })
})
