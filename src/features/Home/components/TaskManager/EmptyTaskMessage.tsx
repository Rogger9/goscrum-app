import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { PrimaryButton } from '../../../../components'
import { useTask } from '../../../../hooks'

const EmptyTaskMessage = () => {
  const { isOpen, onClose } = useTask()

  return (
    <Stack alignItems='center'>
      <Heading size='md'>No tasks to display</Heading>

      <Modal {...{ isOpen, onClose }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error! No tasks</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Sorry, there was an error obtaining the tasks. Please try again later
          </ModalBody>
          <ModalFooter>
            <PrimaryButton onClick={onClose}>Close</PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  )
}

export default EmptyTaskMessage
