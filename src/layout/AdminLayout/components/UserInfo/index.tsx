import { Avatar, Stack, Text } from '@chakra-ui/react'
import { useAuth } from '../../../../hooks'

const UserInfo = () => {
  const { user } = useAuth()

  return (
    <Stack direction='row' alignItems='center' spacing={4}>
      <Avatar size='sm' />
      <Text fontWeight='bold'>{user?.name}</Text>
    </Stack>
  )
}

export default UserInfo
