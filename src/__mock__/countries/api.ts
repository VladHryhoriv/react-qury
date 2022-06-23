import { GetCountriesResponse } from 'fetures/countries/dto'
import { countries } from './data'

export const _mockGetCountriestRequest = (): Promise<GetCountriesResponse> =>
  Promise.resolve(countries)
