import { request } from 'services/request'
import { GetTeamsResponse } from '../dto'

export const getAllTeamsRequest = (): Promise<GetTeamsResponse> =>
  request({
    url: `teams`,
    method: 'GET',
  })
