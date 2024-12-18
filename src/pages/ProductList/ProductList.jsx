import './ProductList.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../context/useFetch';
import { useState } from 'react';
import Button from '../../components/Button/Button';

const categories = [
  'all',
  'watch',
  'phone',
  'shirt',
  'sunglasses',
  'motorcycle',
  'food',
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  console.log(filter);

  function handleSubmit() {
    setQuery(searchTerm);
    setSearchTerm('');
  }

  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productTitle">
          <h1>Our Products</h1>
          <p>Browse our selection of best product</p>
        </div>
        <div></div>
        <div className="searchBox">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <Button padding={'15px 8px'} type="button" onClick={handleSubmit}>
            Search
          </Button>
        </div>
        <div className="productCategories">
          {categories.map((category) => (
            <button key={category} onClick={() => setFilter(category)}>
              {category.toUpperCase()}
            </button>
          ))}
        </div>
        <ProductSection query={query} filter={filter} />
      </div>
    </div>
  );
};

const ProductSection = ({ query, filter }) => {
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/search?q=${query || filter}`
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
    <div className="productList">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
