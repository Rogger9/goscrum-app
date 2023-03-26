import { Container, Stack, Text } from '@chakra-ui/react'
import { ITask } from '../../../../models/ITask'
import { capitalize } from '../../../../utils/capitalize'
import Task from '../Task'

interface ColumnProps {
  title: string
  list: ITask[]
}

const Column = ({ title, list }: ColumnProps) => (
  <Container backgroundColor='gray.100' borderRadius='md' h='full' p='2'>
    <Text fontWeight='semibold' textAlign='center'>
      {capitalize(title)}
    </Text>
    <Stack mt='2'>
      {list.map(({ id, ...task }) => (
        <Task key={id} {...task} />
      ))}
    </Stack>
  </Container>
)

export default Column