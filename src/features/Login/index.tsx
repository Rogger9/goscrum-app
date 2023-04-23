import { Center, FormControl, FormLabel, Grid, Input, Stack, Text } from '@chakra-ui/react'
import { FormEvent } from 'react'
import { PrimaryButton } from '../../components'
import { useAuth, useForm } from '../../hooks'
import { ERROR_MSG, initialValues } from './constants'

const Login = () => {
  const { login, status } = useAuth()
  const { fields, onChange } = useForm({ initialValues })
  const isDisabled = !fields.email || !fields.password

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    void login()
  }

  return (
    <Grid placeContent='center' h='100vh' backgroundColor='gray.100'>
      <form onSubmit={handleSubmit} role='form'>
        <Stack
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
            <Input
              type='email'
              placeholder='correo@correo.com'
              onChange={e => onChange('email', e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel px='2'>Password</FormLabel>
            <Input type='password' onChange={e => onChange('password', e.target.value)} />
          </FormControl>
          {status === 'failed' && (
            <Text color='red' textAlign='center'>
              {ERROR_MSG}
            </Text>
          )}
          <Center>
            <PrimaryButton type='submit' isDisabled={isDisabled}>
              Send
            </PrimaryButton>
          </Center>
        </Stack>
      </form>
    </Grid>
  )
}

export default Login
