import React from 'react'

type ErrorState = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  Record<string, unknown>,
  ErrorState
> {
  constructor(props: ErrorState) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any): void {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo)
    console.error(errorInfo)
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Error !</h1>
    }

    return this.props.children
  }
}
