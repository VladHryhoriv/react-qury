import { SuccessResponse } from 'services/request/types'
import { ITeam } from '../types'

export type GetTeamsResponse = SuccessResponse<Array<ITeam>>
