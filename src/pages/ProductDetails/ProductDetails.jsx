import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import useFetch from '../../context/useFetch';
import { ArrowLeft, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  return (
    <div className="productDetails">
      <div className="productDetailsWrapper">
        <span onClick={() => navigate(-1)} className="moveBtn">
          <ArrowLeft />
          <span>Back to products</span>
        </span>
        <div className="singleProduct">
          <img src={data.thumbnail} alt={data.title} />
          <div className="singleProductContent">
            <h3>{data.title}</h3>
            <div className="singleProductRating">
              <div className="star">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill={i < Math.floor(data.rating) ? 'yellow' : 'white'}
                  />
                ))}
              </div>
              <span>({Math.floor(data.rating)})</span>
            </div>
            <p className="singleProductPrice">${data?.price?.toFixed(2)}</p>
            <div className="desc">
              <h2>Description</h2>
              <p>{data.description}</p>
            </div>
            <div className="category">
              <span>Category:</span>
              <span style={{ color: 'grey' }}>{data.category}</span>
            </div>
            <div className="category">
              <span>Availability:</span>
              <span
                style={{
                  color: data.availabilityStatus ? 'grey' : 'white',
                  backgroundColor: data.availabilityStatus
                    ? 'lightgreen'
                    : 'grey',
                  padding: '10px',
                  borderRadius: '10px',
                }}
              >
                {data.availabilityStatus ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <button
              onClick={() => dispatch(addToCart(data))}
              className="singleBtn"
              disabled={!data.availabilityStatus}
              style={{
                backgroundColor: data.availabilityStatus ? 'green' : 'grey',
              }}
            >
              {data.availabilityStatus ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
