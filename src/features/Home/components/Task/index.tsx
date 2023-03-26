import { Badge, Button, Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Icon, PrimaryButton } from '../../../../components'
import { ITask } from '../../../../models/ITask'
import { BADGE_COLORS, BUTTON_TEXT, MAX_LENGTH_DESC } from './constants'

const Task = ({ title, state, priority, desc, autor }: ITask) => {
  const [isVisibleDesc, setIsVisibleDesc] = useState(false)
  const isLongDesc = !!desc && desc.length > MAX_LENGTH_DESC

  return (
    <Card minW='30ch'>
      <Icon name='close' pos='absolute' right='0' onClick={() => console.log('delete task')} />
      <Heading size='sm' textAlign='center' p='2'>
        {title}
      </Heading>
      <CardBody>
        <Flex gap='2' mb='2'>
          <Text fontWeight='semibold'>Autor:</Text>
          <Text>{autor}</Text>
        </Flex>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Button size='sm'>Move to {BUTTON_TEXT[state]}</Button>
          <Badge colorScheme={BADGE_COLORS[priority]} h='min-content'>
            {priority}
          </Badge>
        </Stack>
        {!!desc && (
          <>
            <Text mt='4' isTruncated={!isVisibleDesc} maxW='30ch' minW='30ch'>
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
