import React from 'react'
import { useRouteError } from 'react-router'

type Props = {}

const ErrorDisplay = (props: Props) => {
  const error: any = useRouteError();
  console.log(error)
  return (
    <section>
      <h1> Error: {error.message}</h1>
      <pre>{error.status} - {error.statusText} </pre>
    </section>
  )
}

export default ErrorDisplay