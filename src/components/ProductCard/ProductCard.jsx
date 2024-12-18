import Button from '../Button/Button';
import './ProductCard.css';
import { addToCart } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { thumbnail, title, category, price, id } = product;

  const handleDispatch = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="productCard">
      <Link to={`/productdetails/${id}`}>
        <div className="productCardImg">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="productCardContent">
          <div>
            <h3>{title}</h3>
            <p className="cat">{category}</p>
          </div>
          <p className="price">${price}</p>
        </div>
      </Link>
      <Button width="100%" onClick={handleDispatch}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
