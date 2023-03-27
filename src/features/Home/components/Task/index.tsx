import { Badge, Button, Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Icon, PrimaryButton } from '../../../../components'
import { useTask } from '../../../../hooks'
import { ITask } from '../../../../models/ITask'
import { BADGE_COLORS, MAX_LENGTH_DESC, NEXT_STATUS } from './constants'

const Task = ({ id, title, status, priority, desc, autor }: ITask) => {
  const { updateTask, deleteTask } = useTask()
  const [isVisibleDesc, setIsVisibleDesc] = useState(false)
  const isLongDesc = !!desc && desc.length > MAX_LENGTH_DESC
  const nextStatus = NEXT_STATUS[status]

  const handleUpdateTask = () => {
    const newTask: ITask = { id, title, priority, desc, autor, status: nextStatus }
    void updateTask(id, newTask)
  }

  return (
    <Card>
      <Icon name='close' pos='absolute' right='0' onClick={() => void deleteTask(id)} />
      <Heading size='sm' textAlign='center' pt='2'>
        {title}
      </Heading>
      <CardBody>
        <Stack direction='row' justifyContent='space-between' alignItems='center' mb='2'>
          <Flex gap='2'>
            <Text fontWeight='semibold'>Autor:</Text>
            <Text>{autor}</Text>
          </Flex>
          <Badge colorScheme={BADGE_COLORS[priority]} h='min-content'>
            {priority}
          </Badge>
        </Stack>
        <Button size='xs' onClick={handleUpdateTask}>
          Move to {nextStatus}
        </Button>
        {!!desc && (
          <>
            <Text mt='2' isTruncated={!isVisibleDesc}>
              {desc}
            </Text>
            {isLongDesc && (
              <PrimaryButton
                w='fit-content'
                size='xs'
                onClick={() => setIsVisibleDesc(!isVisibleDesc)}
              >
                Show {isVisibleDesc ? 'less' : 'more'}
              </PrimaryButton>
            )}
          </>
        )}
      </CardBody>
    </Card>
  )
}

export default Task
