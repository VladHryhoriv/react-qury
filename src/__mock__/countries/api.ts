import { GetTeamsResponse } from 'features/teams/dto'
import { teams } from './data'

export const _mockGetCountriestRequest = (): Promise<GetTeamsResponse> =>
  Promise.resolve(teams)
