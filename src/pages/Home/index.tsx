import { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { RouteConfigComponentProps } from 'react-router-config'
// import { getAllCountriesRequest } from 'fetures/countries/api'
import { GetCountriesResponse } from 'fetures/countries/dto'
import { _mockGetCountriestRequest } from '__mock__/countries/api'

type ErrorData = { message: string }

export const Home: FC<RouteConfigComponentProps> = () => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<GetCountriesResponse, ErrorData> = useQuery<
    GetCountriesResponse,
    ErrorData
  >('persons', _mockGetCountriestRequest)

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      {data?.response.map((item) => (
        <div key={item.name}>
          <img alt={item.name} src={item.flag} />
          {item.name}
        </div>
      ))}
    </div>
  )
}
