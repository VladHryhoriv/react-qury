export interface SuccessResponse<Response> {
  results: number
  errors: {
    requaired?: string
  }
  paging: {
    current: number
    total: number
  }
  response: Response
}
