import axios, { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios'

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const getApi = (): string | undefined => process.env.REACT_APP_API_URL
const getApiKey = (): string | undefined => process.env.REACT_APP_API_SPORTS_KEY

// eslint-disable-next-line
interface RequestConfig<Data = any> {
  url: string
  headers?: { [key: string]: string }
  config?: AxiosRequestConfig
  unsetContentType?: boolean
  method: TMethod
  body?: Data
  cancelToken?: CancelToken
}

export type AuthorizedRequest<T = unknown> = {
  [key in keyof T]: T[key]
}

const logRequest = (requestConfig: RequestConfig) => {
  if (localStorage.getItem('scrapeit-api-debug')) {
    /* eslint-disable no-console */

    console.groupCollapsed(
      `🏓 API:%c %c${requestConfig.method}%c URL: ${requestConfig.url}`,
      '',
      'background: skyblue; color: black',
      ''
    )
    console.log('request:', requestConfig)
    console.groupEnd()
    /* eslint-enable no-console */
  }
}

const contentTypeFromOptions = (options: RequestConfig) => {
  if (options && options.body && options.body instanceof FormData) {
    return 'multipart/form-data'
  }
  if (options && options.headers && options.headers['Content-Type']) {
    return options.headers['Content-Type']
  }

  return typeof options.body === 'object'
    ? 'application/json'
    : (options.headers && options.headers['Content-Type']) || ''
}

const apiAccess = (): Record<string, string | undefined> => {
  return {
    // 'X-RapidAPI-Key': getApiRapidKey(),
    // 'X-RapidAPI-Host': getApiRapidHost(),
    'x-apisports-key': getApiKey(),
  }
}

const createContentType = (
  options: RequestConfig
): Headers | string[][] | Record<string, string> | undefined => {
  const header = contentTypeFromOptions(options)

  return header ? { 'Content-Type': header } : {}
}

/**
 * @param method
 *
 * @description POST GET DELETE PUT
 *
 *
 * @param url
 *
 * @param body
 *
 *
 * @example
 * ```javascript
 * await request({ url: `/users`, method: 'GET' });
 * ```
 **/

export const request = <RequestData = unknown, ResponseData = unknown>(
  request: RequestConfig<RequestData>
): Promise<ResponseData> => {
  const url =
    request.url[0] === '/'
      ? request.url.slice(1, request.url.length)
      : request.url

  const apiUrl = getApi()

  if (!apiUrl) {
    throw Error('Cannot find api')
  }

  const baseUrl =
    apiUrl[apiUrl?.length - 1] === '/'
      ? apiUrl.slice(0, apiUrl.length - 1)
      : apiUrl

  const formattedUrl = `${baseUrl}/${url}`

  // eslint-disable-next-line
  const headers: any = {
    ...createContentType(request),
    ...apiAccess(),
    ...request.headers,
    Accept: '*/*',
  }

  if (process.env.NODE_ENV === 'development') {
    logRequest({ headers, ...request })
  }

  const requestConfig: AxiosRequestConfig = {
    method: request.method,
    url: formattedUrl,
    headers,
    data: request.body,
    cancelToken: request.cancelToken,
    ...request.config,
  }

  const response = axios(requestConfig).then(
    (response: AxiosResponse<ResponseData>) => response.data
  )

  return response
}
