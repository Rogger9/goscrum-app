/* istanbul ignore file */
export interface IMockApiProps<T> {
  res: T
  rej?: unknown
  ms?: number
}

const ERROR_PROBABILITY = 1

export const mockApiResponse = <T>({ res, rej, ms = 300 }: IMockApiProps<T>): Promise<T> => {
  const isSuccess = Math.ceil(Math.random() * 10) > ERROR_PROBABILITY

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      return !rej || isSuccess ? resolve(res) : reject(rej)
    }, ms),
  )
}
