import { SuccessResponse } from 'services/request/types'
import { IPerson } from '../types'

export type GetPersonResponse = IPerson & SuccessResponse

type PersonParams = {
  name: string
  films: Array<string>
}

export type GetPersonParams = { id: string; params?: GetPersonParams }
