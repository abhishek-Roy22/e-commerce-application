import { ShoppingCart } from 'lucide-react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bannerContainer">
      <div className="bannerWrapper">
        <figure className="bannerLeft">
          <img
            className="bannerImg"
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
            alt="bannerImg"
          />
        </figure>
        <div className="bannerRight">
          <h3>Best Quality Products</h3>
          <h1>Join The Organic Movement!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolore
            maiores iste laudantium consectetur illo laboriosam pariatur, alias
            quas laborum
          </p>
          <Button
            onClick={() => navigate('/ProductList')}
            width="fit-content"
            icon={<ShoppingCart size={20} color="white" fill="white" />}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
