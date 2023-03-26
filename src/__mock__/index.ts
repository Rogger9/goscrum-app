import { ITask } from '../models/ITask'

export const tasks: ITask[] = [
  {
    id: 1,
    title: 'Title',
    state: 'pending',
    priority: 'low',
    autor: 'user',
  },
  {
    id: 2,
    title: 'New title',
    state: 'in process',
    priority: 'medium',
    autor: 'user',
    desc: 'Sit laboris minim elit cupidatat magna exercitation fugiat amet in amet officia enim qui non.',
  },
  {
    id: 3,
    title: 'Task',
    state: 'completed',
    priority: 'high',
    autor: 'user2',
  },
  {
    id: 4,
    title: 'New task',
    state: 'pending',
    priority: 'low',
    autor: 'leader',
    desc: 'Aliqua ullamco sit ut irure in exercitation laboris laboris proident qui nulla sint. Nisi consequat pariatur occaecat nostrud nostrud id quis commodo. Culpa ex ullamco commodo nisi. Excepteur occaecat tempor dolor fugiat irure laboris sint veniam ad velit duis.',
  },
]
