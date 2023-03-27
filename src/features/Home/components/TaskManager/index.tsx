import { Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useTask } from '../../../../hooks'
import Filters from './Filters'
import ListOfTasks from './ListOfTasks'
import SkeletonTask from './SkeletonTask'

const TaskManager = () => {
  const { list, filtered, isLoading, fetchTask } = useTask()
  const tasksToShow = filtered ?? list

  useEffect(() => {
    void fetchTask()
  }, [])

  return (
    <Stack gap='2'>
      <Filters />
      {isLoading ? <SkeletonTask /> : <ListOfTasks list={tasksToShow} />}
    </Stack>
  )
}

export default TaskManager
