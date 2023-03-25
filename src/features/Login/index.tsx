import { Button, FormControl, FormLabel, Grid, Input, Stack, Text } from '@chakra-ui/react'

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
          Iniciar sesión
        </Text>

        <FormControl>
          <FormLabel px='2'>Email</FormLabel>
          <Input placeholder='correo@correo.com' />
        </FormControl>

        <FormControl>
          <FormLabel px='2'>Contraseña</FormLabel>
          <Input type='password' />
        </FormControl>

        <Button>Enviar</Button>
      </Stack>
    </Grid>
  )
}

export default Login
