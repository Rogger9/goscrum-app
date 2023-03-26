/* istanbul ignore file */
export interface IBaseFetch {
  statusCode: HttpStatus
  message?: string
  error?: string
}

export interface IFetchOptions {
  url: string
  params: RequestInit
}

export interface IFetchResponse<T> extends IBaseFetch {
  data: T
}

export type TFetchStatus = 'idle' | 'loading' | 'failed' | 'success'

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}
