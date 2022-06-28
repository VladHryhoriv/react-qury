import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from 'pages/Router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 1000 } },
})

const Application: FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router>
          <Routing />
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  )
}
export default hot(Application)
