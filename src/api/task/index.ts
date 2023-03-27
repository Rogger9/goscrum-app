import { HttpStatus } from '../../models/IFetch'
import { ITask, ITaskResponse } from '../../models/ITask'
import { mockApiResponse } from '../../utils/mockApiResponse'
import { fetchTaskResponse, mockTaskResponse } from '../../__mock__'

export const fetchTask = (): Promise<ITaskResponse> => mockApiResponse(fetchTaskResponse)

export const createTask = (task: ITask, list: ITask[]): Promise<ITaskResponse> => {
  const newTasks = [task, ...list]
  return mockApiResponse(mockTaskResponse(HttpStatus.CREATED, newTasks))
}

export const updateTask = (id: number, data: ITask, list: ITask[]): Promise<ITaskResponse> => {
  const newTasks = list.map(task => (task.id === id ? { ...data } : task))
  return mockApiResponse(mockTaskResponse(HttpStatus.OK, newTasks))
}

export const deleteTask = (id: number, list: ITask[]): Promise<ITaskResponse> => {
  const newTasks = list.filter(task => task.id !== id)
  return mockApiResponse(mockTaskResponse(HttpStatus.OK, newTasks))
}
