import { Link } from 'react-router-dom';

const MainHeader = (props) => {
  return (
    <ul>
      <li>
        <Link to="/welcome">Welcome</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  );
};
export default MainHeader;
