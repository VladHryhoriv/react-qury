import { createRequest } from 'services/createRequest'
import { getPersonRequest } from '../api'
import { GetPersonParams, GetPersonResponse } from '../dto'

type Error = {
  message: string
}

export const getPerson = createRequest<
  GetPersonParams,
  GetPersonResponse,
  Error
>({
  request: getPersonRequest,
})
