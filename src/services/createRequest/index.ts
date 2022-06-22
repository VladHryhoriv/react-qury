// P - Request params or body
// R - Response from 'request' return
// E - Error type

type TCreateRequest<P, R, E> = P extends void
  ? () => Promise<R | E>
  : (params: P) => Promise<R | E>

export function createRequest<P, R, E>(
  request: TCreateRequest<P, R, E>
): (p: P) => Promise<R | E> {
  return (params: P) =>
    request(params)
      .then((data) => Promise.resolve(data))
      .catch((error) => Promise.reject(error))
}
