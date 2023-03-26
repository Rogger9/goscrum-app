import { FormControl, Grid, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import { PrimaryButton } from '../../../../components'

const TaskForm = () => {
  return (
    <Stack as='form' w='full' px='4' spacing='6'>
      <Text as='h2' fontWeight='bold' textAlign='center'>
        Create task
      </Text>
      <Grid gap='2'>
        <FormControl>
          <Input placeholder='Title' />
        </FormControl>
        <Select placeholder='Select a state'>
          <option value='Value1'>Value1</option>
          <option value='Value2'>Value2</option>
        </Select>
        <Select placeholder='Select priority'>
          <option value='Value1'>Value1</option>
          <option value='Value2'>Value2</option>
        </Select>
      </Grid>
      <FormControl>
        <Textarea placeholder='Description' />
      </FormControl>
      <PrimaryButton>Create</PrimaryButton>
    </Stack>
  )
}

export default TaskForm
