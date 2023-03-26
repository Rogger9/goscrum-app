import { FormControl, FormLabel, Grid, Input, Stack, Text } from '@chakra-ui/react'
import { PrimaryButton } from '../../components'

const Login = () => {
  return (
    <Grid placeContent='center' h='100vh' backgroundColor='gray.100'>
      <Stack
        as='form'
        backgroundColor='white'
        px='6'
        py='12'
        borderRadius='md'
        spacing='8'
        w={{ base: '80', lg: '2xl' }}
      >
        <Text as='h1' fontSize='2xl' fontWeight='bold' textAlign='center'>
          Login
        </Text>

        <FormControl>
          <FormLabel px='2'>Email</FormLabel>
          <Input placeholder='correo@correo.com' />
        </FormControl>

        <FormControl>
          <FormLabel px='2'>Password</FormLabel>
          <Input type='password' />
        </FormControl>

        <PrimaryButton>Send</PrimaryButton>
      </Stack>
    </Grid>
  )
}

export default Login
