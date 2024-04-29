import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError()
  return (
    <div>
      <h1>error </h1>
      <h2>You got error</h2>
      <h1>
        {err.status} : {err.statusText}
      </h1>
      {console.log(err)}
    </div>
  )
}

export default Error
