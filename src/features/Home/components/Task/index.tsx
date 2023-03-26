import { Badge, Button, Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Icon, PrimaryButton } from '../../../../components'
import { useTask } from '../../../../hooks'
import { ITask } from '../../../../models/ITask'
import { BADGE_COLORS, BUTTON_TEXT, MAX_LENGTH_DESC } from './constants'

const Task = ({ id, title, status, priority, desc, autor }: ITask) => {
  const { deleteTask } = useTask()
  const [isVisibleDesc, setIsVisibleDesc] = useState(false)
  const isLongDesc = !!desc && desc.length > MAX_LENGTH_DESC

  return (
    <Card minW='30ch'>
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
        <Button size='xs'>Move to {BUTTON_TEXT[status]}</Button>
        {!!desc && (
          <>
            <Text mt='2' isTruncated={!isVisibleDesc} maxW='30ch' minW='30ch'>
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
