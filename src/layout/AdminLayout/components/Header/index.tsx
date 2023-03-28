import { Flex, GridItem } from '@chakra-ui/react'
import Logo from '../Logo'
import UserInfo from '../UserInfo'

const Header = () => (
  <GridItem as='header' px='4' bg='whiteAlpha.300' area='header' boxShadow='md'>
    <Flex justifyContent='space-between' alignItems='center' h='full'>
      <Logo />
      <UserInfo />
    </Flex>
  </GridItem>
)

export default Header
