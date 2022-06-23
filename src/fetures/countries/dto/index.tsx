import { SuccessResponse } from 'services/request/types'
import { ICountry } from '../types'

export type GetCountriesResponse = SuccessResponse<Array<ICountry>>
