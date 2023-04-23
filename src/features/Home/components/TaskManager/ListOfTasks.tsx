import { Grid } from '@chakra-ui/react'
import { ITask, ITaskState, TaskState } from '../../../../models/ITask'
import Column from '../Column'
import EmptyTaskMessage from './EmptyTaskMessage'

type IListOfTasksProps = Pick<ITaskState, 'list'>

const ListOfTasks = ({ list }: IListOfTasksProps) => {
  if (!list?.length) return <EmptyTaskMessage />

  const tasksByState = list.reduce((acc, el) => {
    acc[el.status] ??= []
    acc[el.status].push(el)
    return acc
  }, {} as Record<TaskState, ITask[]>)

  return (
    <Grid templateColumns={{ base: 'auto', xl: 'repeat(3, 1fr)' }} gap='4' h='full'>
      <Column title={TaskState.PENDING} list={tasksByState.pending} />
      <Column title={TaskState.IN_PROCESS} list={tasksByState['in process']} />
      <Column title={TaskState.COMPLETED} list={tasksByState.completed} />
    </Grid>
  )
}

export default ListOfTasks
