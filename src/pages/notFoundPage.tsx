import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  return isRouteErrorResponse(error)
    ? <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <Link to='/'>Home</Link>
      </div>
    : <div>
        <h2>Oops</h2>
        <Link to='/'>Home</Link>
      </div>
}

export default NotFoundPage;
