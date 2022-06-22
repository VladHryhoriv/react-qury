type TCreateRequest<P, R, E> = {
  request: (params: P) => Promise<R | E>
}

export function createRequest<P, R, E>({
  request,
}: TCreateRequest<P, R, E>): (p: P) => Promise<R | E> {
  return (params: P) =>
    request(params)
      .then((data) => Promise.resolve(data))
      .catch((error) => Promise.reject(error))
}
