import { Button, ButtonProps } from '@chakra-ui/react'

const PrimaryButton = ({ children, ...restProps }: ButtonProps) => (
  <Button
    bgColor='brand.300'
    color='white'
    w='40'
    _hover={{ bgColor: 'brand.500' }}
    _active={{ transform: 'scale(.98)' }}
    {...restProps}
  >
    {children}
  </Button>
)

export default PrimaryButton
