import { Flex, FormControl, Input, Radio, RadioGroup, Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useTask } from '../../../../hooks'
import { OnChangeInput, OnChangeSelect } from '../../../../models/IGeneral'
import { ITask, TaskPriority } from '../../../../models/ITask'
import { capitalize } from '../../../../utils/capitalize'

type RadioType = 'all' | 'me'

const Filters = () => {
  const { filterBy, searchMyTasks, clearFilterTasks, status } = useTask()
  const [radio, setRadio] = useState<RadioType>('all')
  const [search, setSearch] = useState('')
  const priorityOptions = Object.values(TaskPriority)

  const handleOnChange = ({ target: { value, id } }: OnChangeInput | OnChangeSelect) => {
    if (id === 'title') setSearch(value)
    filterBy(id as keyof ITask, value)
    if (id === 'priority') setSearch('')
    setRadio('all')
  }

  useEffect(() => {
    if (radio === 'me') return searchMyTasks()

    clearFilterTasks()
  }, [radio, status])

  return (
    <Flex
      px='8'
      gap='8'
      alignItems='center'
      justifyContent={{ base: 'center', md: 'space-between' }}
      wrap='wrap'
    >
      <RadioGroup
        value={radio}
        onChange={(value: RadioType) => setRadio(value)}
        colorScheme='brand'
      >
        <Flex gap='4'>
          <Radio value='all'>Todas</Radio>
          <Radio value='me'>Mis tareas</Radio>
        </Flex>
      </RadioGroup>

      <Flex gap='4'>
        <FormControl id='title'>
          <Input placeholder='Insert a title' value={search} onChange={handleOnChange} />
        </FormControl>

        <Select id='priority' placeholder='Select priority' onChange={handleOnChange}>
          {priorityOptions.map(priority => (
            <option key={priority} value={priority}>
              {capitalize(priority)}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  )
}

export default Filters
