import { TInitialValues } from '../../../../hooks'
import { ITask } from '../../../../models/ITask'

export const initialValues: TInitialValues<Omit<ITask, 'id' | 'autor'>> = {
  title: '',
  status: '',
  priority: '',
  desc: '',
}
