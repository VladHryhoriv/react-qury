import { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { RouteConfigComponentProps } from 'react-router-config'
import { GetTeamsResponse } from 'features/teams/dto'
// import { _mockGetCountriestRequest } from '__mock__/countries/api' MOCK REQUEST
import { getAllTeamsRequest } from 'features/teams/api'
import { SideBar } from 'layout/Sidebar'

import './style.scss'

type ErrorData = { message: string }

export const Home: FC<RouteConfigComponentProps> = () => {
  const {
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<GetTeamsResponse, ErrorData> = useQuery<
    GetTeamsResponse,
    ErrorData
  >('teams', getAllTeamsRequest)

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  if (!data?.data) {
    return <h1>No Data</h1>
  }

  return (
    <div className="home home-wrapp">
      <SideBar.SideBar title="Teams" data={data.data} />
    </div>
  )
}
