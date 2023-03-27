import { TaskPriority, TaskState } from '../../../../models/ITask'

export const BADGE_COLORS: Record<TaskPriority, string> = {
  low: 'blue',
  medium: 'yellow',
  high: 'red',
}

export const NEXT_STATUS: Record<TaskState, TaskState> = {
  pending: TaskState.IN_PROCESS,
  'in process': TaskState.COMPLETED,
  completed: TaskState.PENDING,
}

export const MAX_LENGTH_DESC = 30
