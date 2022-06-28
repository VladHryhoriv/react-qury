export interface ResponseMeta {
  total_pages: number
  current_page: number
  next_page: number
  per_page: number
  total_count: number
}
export interface SuccessResponse<Response> {
  data: Response
  meta: ResponseMeta
}
