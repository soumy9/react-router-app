import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/books">Books</Link>
        </li>
        <li>
          <Link to="/products/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/products/shoes">Shoes</Link>
        </li>
      </ul>
    </section>
  );
};
export default Products;
