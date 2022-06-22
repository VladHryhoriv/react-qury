import { request } from 'services/request'
import { GetPersonParams, GetPersonResponse } from '../dto'

export const getPersonRequest = ({
  id,
  ...body
}: GetPersonParams): Promise<GetPersonResponse> =>
  request({ url: `people/${id}`, method: 'GET', body })
