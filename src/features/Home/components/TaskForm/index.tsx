import { FormControl, Grid, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import { FormEvent } from 'react'
import { PrimaryButton } from '../../../../components'
import { useForm, useTask } from '../../../../hooks'
import { ITask, TaskPriority, TaskState } from '../../../../models/ITask'
import { capitalize } from '../../../../utils/capitalize'
import { initialValues } from './constants'

const TaskForm = () => {
  const { createTask } = useTask()
  const { fields, onChange } = useForm({ initialValues })
  const statusOptions = Object.values(TaskState)
  const priorityOptions = Object.values(TaskPriority)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const task = {
      ...fields,
      id: Date.now(),
      autor: 'userLogged',
    } as ITask
    void createTask(task)
  }

  return (
    <Stack w='full' px='4'>
      <Text as='h2' fontWeight='bold' textAlign='center'>
        Create task
      </Text>
      <Stack as='form' onSubmit={handleSubmit}>
        <Grid gap='2'>
          <FormControl>
            <Input placeholder='Title' onChange={e => onChange('title', e.target.value)} />
          </FormControl>
          <Select placeholder='Select a status' onChange={e => onChange('status', e.target.value)}>
            {statusOptions.map(status => (
              <option key={status} value={status}>
                {capitalize(status)}
              </option>
            ))}
          </Select>
          <Select
            placeholder='Select priority'
            onChange={e => onChange('priority', e.target.value)}
          >
            {priorityOptions.map(priority => (
              <option key={priority} value={priority}>
                {capitalize(priority)}
              </option>
            ))}
          </Select>
        </Grid>
        <FormControl id='desc'>
          <Textarea placeholder='Description' onChange={e => onChange('desc', e.target.value)} />
        </FormControl>
        <PrimaryButton type='submit'>Create</PrimaryButton>
      </Stack>
    </Stack>
  )
}

export default TaskForm
