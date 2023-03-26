import { Image, ImageProps } from '@chakra-ui/react'
import { ICON_LIST } from './contants'

interface IIconProps extends ImageProps {
  name: keyof typeof ICON_LIST
}

const Icon = ({ name, alt, ...restProps }: IIconProps) => (
  <Image
    src={ICON_LIST[name]}
    alt={alt ?? name}
    maxW='24px'
    m='2'
    _hover={{ cursor: `${restProps.onClick ? 'pointer' : 'default'}` }}
    {...restProps}
  />
)

export default Icon
