import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ITask } from '../models/ITask'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getTaskState } from '../store/taskSlice'
import { createTaskAsync, deleteTaskAsync, fetchTaskAsync } from '../store/taskSlice/thunks'

export const useTask = () => {
  const dispatch = useAppDispatch()
  const { list, status } = useAppSelector(getTaskState)
  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    if (status === 'failed') return

    void (!list.length && dispatch(fetchTaskAsync()))
  }, [])

  useEffect(() => {
    if (status === 'failed') return onOpen()
  }, [status])

  const createTask = (task: ITask) => dispatch(createTaskAsync({ task, list }))

  const deleteTask = (id: number) => dispatch(deleteTaskAsync({ id, list }))

  return { list, status, isOpen, onClose, createTask, deleteTask }
}
