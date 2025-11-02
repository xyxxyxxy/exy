import { AxiosError, AxiosResponse } from 'axios'

export function toResponseData<T>(
  response:
    | (AxiosResponse<T, any, {}> & { error: undefined })
    | (AxiosError<unknown, any> & { data: undefined; error: unknown })
): T {
  if (response.status === 200 && response.data) {
    return response.data
  } else throw response
}
