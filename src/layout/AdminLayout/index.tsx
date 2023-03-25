import { Grid, GridItem } from '@chakra-ui/react'
import type { WithChildren } from '../../models/IGeneral'
import Header from './components/Header'

const AdminLayout = ({ children }: WithChildren) => (
  <Grid
    templateAreas='"header" "main"'
    gridTemplateRows='60px 1fr'
    gridTemplateColumns='1fr'
    h='calc(100vh)'
    color='blackAlpha.700'
  >
    <Header />
    <GridItem as='main' p='6' bg='whiteAlpha.300' area='main'>
      {children}
    </GridItem>
  </Grid>
)

export default AdminLayout
