import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ICreateTask, ITask, TaskPriority, TaskState } from '../models/ITask'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getTaskState, updateFilteredTasks } from '../store/taskSlice'
import {
  createTaskAsync,
  deleteTaskAsync,
  fetchTaskAsync,
  updateTaskAsync,
} from '../store/taskSlice/thunks'
import { useAuth } from './useAuth'

export const useTask = () => {
  const dispatch = useAppDispatch()
  const { user } = useAuth()
  const { list, status, filtered } = useAppSelector(getTaskState)
  const { isOpen, onClose, onOpen } = useDisclosure()
  const isLoading = status === 'loading'

  useEffect(() => {
    if (status === 'failed') return onOpen()
  }, [status])

  const fetchTask = () => dispatch(fetchTaskAsync())

  const createTask = (task: ICreateTask) => {
    const newTask: ITask = {
      id: Date.now(),
      ...task,
      status: (task.status as TaskState) || 'pending',
      priority: (task.priority as TaskPriority) || 'low',
      autor: user?.name ?? '',
    }

    return dispatch(createTaskAsync({ task: newTask, list }))
  }

  const updateTask = (id: number, task: ITask) => dispatch(updateTaskAsync({ id, task, list }))

  const deleteTask = (id: number) => dispatch(deleteTaskAsync({ id, list }))

  const searchMyTasks = () => {
    const newList = list.filter(task => task.autor === user?.name)
    dispatch(updateFilteredTasks(newList))
  }

  const filterBy = (field: keyof ITask, value: string) => {
    const regex = new RegExp(value, 'gi')
    const newList = list.filter(task => task[field]?.toString().match(regex))
    dispatch(updateFilteredTasks(newList))
  }

  const clearFilterTasks = () => dispatch(updateFilteredTasks(null))

  return {
    list,
    filtered,
    status,
    isOpen,
    isLoading,
    onClose,
    fetchTask,
    createTask,
    updateTask,
    deleteTask,
    filterBy,
    searchMyTasks,
    clearFilterTasks,
  }
}
