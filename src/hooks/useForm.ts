import { useState } from 'react'

export type TInitialValues<T> = { [P in keyof T]: T[P] | string }

interface IUseForm<T> {
  initialValues: TInitialValues<T>
}

export const useForm = <T>({ initialValues }: IUseForm<T>) => {
  const [fields, setFields] = useState(initialValues)

  const onChange = (name: keyof T, value: string) => setFields({ ...fields, [name]: value })

  return { fields, onChange }
}
