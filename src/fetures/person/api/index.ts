import { request } from 'services/request'
import {
  GetAllPersonsResponse,
  GetPersonParams,
  GetPersonResponse,
} from '../dto'

export const getAllPersonRequest = (): Promise<GetAllPersonsResponse> =>
  request({
    url: `people`,
    method: 'GET',
  })

export const getPersonRequest = ({
  id,
  ...body
}: GetPersonParams): Promise<GetPersonResponse> =>
  request({ url: `people/${id}`, method: 'GET', body })
