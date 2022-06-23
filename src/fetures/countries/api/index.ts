import { request } from 'services/request'
import { GetCountriesResponse } from '../dto'

export const getAllCountriesRequest = (): Promise<GetCountriesResponse> =>
  request({
    url: `teams/countries`,
    method: 'GET',
  })
