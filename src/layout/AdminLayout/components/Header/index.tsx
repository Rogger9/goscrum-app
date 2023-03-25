import { Flex, GridItem } from '@chakra-ui/react'
import Logo from '../Logo'

const Header = () => (
  <GridItem as='header' px='4' bg='whiteAlpha.300' area='header' boxShadow='md'>
    <Flex justifyContent='space-between' h='full'>
      <Logo />
    </Flex>
  </GridItem>
)

export default Header
