import { Grid, Skeleton } from '@chakra-ui/react'

const SkeletonTask = () => (
  <Grid templateColumns={{ base: 'auto', xl: 'repeat(3, 1fr)' }} gap='4' h='full'>
    <Skeleton minW='300px' borderRadius='md' />
    <Skeleton minW='300px' borderRadius='md' />
    <Skeleton minW='300px' borderRadius='md' />
  </Grid>
)

export default SkeletonTask
