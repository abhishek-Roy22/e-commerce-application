import './BestProduct.css';
import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../context/useFetch';

const BestProduct = () => {
  const { data, loading, error } = useFetch(
    'https://dummyjson.com/products/category/groceries?limit=12'
  );

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    <div className="error">
      <p>Error: {error}</p>
    </div>;
  }

  if (data.length === 0) {
    return <div className="loading">No. Product to load...</div>;
  }

  return (
    <section className="bestProduct">
      <div className="bestProductContainer">
        <div className="productTitle">
          <h3>Featured Products</h3>
          <p>Discover our selection of fresh organic products</p>
        </div>
        <div className="productLists">
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProduct;
