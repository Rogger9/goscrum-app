export interface ITask {
  id: number
  title: string
  state: TState
  priority: TPriority
  autor: string
  desc?: string
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
