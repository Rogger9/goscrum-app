import { IFetchResponse, TFetchStatus } from './IFetch'

export interface ITask {
  id: number
  title: string
  status: TState
  priority: TPriority
  autor: string
  desc?: string
}

export interface ICreateTask extends Pick<ITask, 'desc' | 'title'> {
  status?: string
  priority?: string
}

export enum TaskState {
  PENDING = 'pending',
  IN_PROCESS = 'in process',
  COMPLETED = 'completed',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export type TPriority = `${TaskPriority}`
export type TState = `${TaskState}`

export interface ITaskState {
  status: TFetchStatus
  list: ITask[]
  filtered: ITask[] | null
}

export type ITaskResponse = IFetchResponse<ITask[]>

export interface ICreateTaskProps extends Pick<ITaskState, 'list'> {
  task: ITask
}

export type IUpdateTaskProps = ICreateTaskProps & Pick<ITask, 'id'>

export type IDeleteTaskProps = Pick<ITaskState, 'list'> & Pick<ITask, 'id'>
