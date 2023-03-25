import { Grid } from '@chakra-ui/react'

const Home = () => {
  return (
    <Grid templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }} h='full'>
      <h1>Form</h1>
      <h1>Tasks view</h1>
    </Grid>
  )
}

export default Home
