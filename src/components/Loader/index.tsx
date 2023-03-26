import { Flex, Spinner } from '@chakra-ui/react'

const Loader = () => (
  <Flex justifyContent='center' p='4'>
    <Spinner color='brand.500' />
  </Flex>
)

export default Loader
