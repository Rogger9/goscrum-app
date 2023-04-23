import { Container, Stack, Text } from '@chakra-ui/react'
import { ITask } from '../../../../models/ITask'
import { capitalize } from '../../../../utils/capitalize'
import Task from '../Task'

export interface ColumnProps {
  title: string
  list: ITask[] | undefined
}

const Column = ({ title, list }: ColumnProps) => (
  <Container backgroundColor='gray.100' borderRadius='md' h='full' p='2' minW='300px'>
    <Text fontWeight='semibold' textAlign='center'>
      {capitalize(title)}
    </Text>
    <Stack mt='2' data-testid='column-list'>
      {list?.length ? (
        list?.map(task => <Task key={task.id} {...task} />)
      ) : (
        <Text textAlign='center'>No tasks</Text>
      )}
    </Stack>
  </Container>
)

export default Column
