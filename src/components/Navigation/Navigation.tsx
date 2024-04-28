import { Link } from "react-router-dom";
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <h1 className='text-center'>React + Redux ToDo</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/description'>Description</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;
