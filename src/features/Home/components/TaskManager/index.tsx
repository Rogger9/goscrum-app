import { Grid } from '@chakra-ui/react'
import { ITask, TaskState } from '../../../../models/ITask'
import { tasks } from '../../../../__mock__'
import Column from '../Column'

const TaskManager = () => {
  const tasksByState = tasks.reduce((acc, el) => {
    acc[el.state] ??= []
    acc[el.state].push(el)
    return acc
  }, {} as Record<TaskState, ITask[]>)

  return (
    <Grid templateColumns={{ base: 'auto', xl: 'repeat(3, 1fr)' }} gap='4'>
      <Column title={TaskState.PENDING} list={tasksByState.pending} />
      <Column title={TaskState.IN_PROCESS} list={tasksByState['in process']} />
      <Column title={TaskState.COMPLETED} list={tasksByState.completed} />
    </Grid>
  )
}

export default TaskManager
