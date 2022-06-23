import { getAllPersonRequest } from 'fetures/person/api'
import { GetAllPersonsResponse } from 'fetures/person/dto'
import { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { RouteConfigComponentProps } from 'react-router-config'

type ErrorData = { message: string }

export const Home: FC<RouteConfigComponentProps> = () => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<GetAllPersonsResponse, ErrorData> = useQuery<
    GetAllPersonsResponse,
    ErrorData
  >('persons', getAllPersonRequest)

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      {data?.results.map((item) => (
        <div key={item.url}>{item.name}</div>
      ))}
    </div>
  )
}
