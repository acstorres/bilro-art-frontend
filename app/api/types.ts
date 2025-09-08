import { AxiosError } from 'axios'

export interface Factory<RequestBody, Response, RequestInput> {
  request?: (data: RequestInput) => RequestBody
  response: (data: Response) => Response
}

export type RequestError = {
  error: string
}

export type DefaultError = AxiosError<RequestError>

export type BaseError = {
  code: string
  error: string
  details?: Record<string, unknown>
}

export type ErrorResponse<T extends BaseError = BaseError> = AxiosError<T>
