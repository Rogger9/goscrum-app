import { FormControl, Grid, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import { FormEvent } from 'react'
import { PrimaryButton } from '../../../../components'
import { useForm, useTask } from '../../../../hooks'
import { TaskPriority, TaskState } from '../../../../models/ITask'
import { capitalize } from '../../../../utils/capitalize'
import { initialValues } from './constants'

const TaskForm = () => {
  const { createTask } = useTask()
  const { fields, onChange, resetForm } = useForm({ initialValues })
  const statusOptions = Object.values(TaskState)
  const priorityOptions = Object.values(TaskPriority)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await createTask({ ...fields })
    resetForm()
  }

  return (
    <Stack w='full' px='4'>
      <Text as='h2' fontWeight='bold' textAlign='center'>
        Create task
      </Text>
      <Stack as='form' onSubmit={handleSubmit} gap='2' role='form'>
        <Grid gap='4'>
          <FormControl>
            <Input
              placeholder='Title'
              value={fields.title}
              onChange={e => onChange('title', e.target.value)}
            />
          </FormControl>
          <Select
            placeholder='Select a status'
            value={fields.status}
            onChange={e => onChange('status', e.target.value)}
            data-testid='form-status'
          >
            {statusOptions.map(status => (
              <option key={status} value={status}>
                {capitalize(status)}
              </option>
            ))}
          </Select>
          <Select
            value={fields.priority}
            placeholder='Select priority'
            onChange={e => onChange('priority', e.target.value)}
            data-testid='form-priority'
          >
            {priorityOptions.map(priority => (
              <option key={priority} value={priority}>
                {capitalize(priority)}
              </option>
            ))}
          </Select>
        </Grid>
        <FormControl id='desc'>
          <Textarea
            placeholder='Description'
            value={fields.desc}
            onChange={e => onChange('desc', e.target.value)}
          />
        </FormControl>
        <PrimaryButton type='submit' isDisabled={!fields.title}>
          Create
        </PrimaryButton>
      </Stack>
    </Stack>
  )
}

export default TaskForm
