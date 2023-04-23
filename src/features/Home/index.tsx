import { Grid } from '@chakra-ui/react'
import { TaskForm, TaskManager } from './components'

const Home = () => (
  <Grid
    templateColumns={{ base: 'auto', lg: 'minmax(350px, 600px) 1fr' }}
    h='full'
    gap={{ base: '8', lg: '0' }}
  >
    <TaskForm />
    <TaskManager />
  </Grid>
)

export default Home
