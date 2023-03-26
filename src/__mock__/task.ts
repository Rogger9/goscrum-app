import { HttpStatus } from '../models/IFetch'
import { ITask, ITaskResponse } from '../models/ITask'
import { IMockApiProps } from '../utils/mockApiResponse'

export const tasks: ITask[] = [
  {
    id: 1,
    title: 'Title',
    status: 'pending',
    priority: 'low',
    autor: 'user',
  },
  {
    id: 2,
    title: 'New title',
    status: 'in process',
    priority: 'medium',
    autor: 'user',
    desc: 'Sit laboris minim elit cupidatat magna exercitation fugiat amet in amet officia enim qui non.',
  },
  {
    id: 3,
    title: 'Task',
    status: 'completed',
    priority: 'high',
    autor: 'user2',
  },
  {
    id: 4,
    title: 'New task',
    status: 'pending',
    priority: 'low',
    autor: 'leader',
    desc: 'Aliqua ullamco sit ut irure in exercitation laboris laboris proident qui nulla sint. Nisi consequat pariatur occaecat nostrud nostrud id quis commodo. Culpa ex ullamco commodo nisi. Excepteur occaecat tempor dolor fugiat irure laboris sint veniam ad velit duis.',
  },
]

export const rej = {
  statusCode: HttpStatus.BAD_REQUEST,
  data: [],
}

export const fetchTaskResponse: IMockApiProps<ITaskResponse> = {
  res: {
    statusCode: HttpStatus.OK,
    data: tasks,
  },
  rej,
}

export const mockTaskResponse = (code: number, data: ITask[]): IMockApiProps<ITaskResponse> => ({
  res: { statusCode: code, data },
  rej,
})
