import { expresions } from '../expresions'

export const capitalize = (aux: string) =>
  aux.replace(expresions.firstLetter, letter => letter.toUpperCase())
