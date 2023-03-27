import { ChangeEvent, ReactNode } from 'react'

export type WithChildren = {
  children: ReactNode
}

export type OnChangeInput = ChangeEvent<HTMLInputElement>
export type OnChangeSelect = ChangeEvent<HTMLSelectElement>
