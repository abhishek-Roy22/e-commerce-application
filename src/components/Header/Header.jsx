import { Link } from 'react-router-dom';
import './Header.css';
import Cart from '../Cart/Cart';
import { IndianRupee, Store } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <nav className="headerContainer">
      <div className="headerWrapper">
        <div className="headerLeft">
          <Link to={'/'}>
            <h1 className="logo">
              <Store color="teal" />
              ShoppyGlobe.
            </h1>
          </Link>
        </div>
        <div className="headerRight">
          <Link to="/">Home</Link>
          <Link to="/productlist">Product</Link>
          <span className="price">
            <IndianRupee color="green" size={20} />
            <span>${totalPrice.toFixed(2)}</span>
          </span>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Header;
