import React, { useContext, useState } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './Home.css';  
import { productContext } from '../../../context/ProductsContext';
import UserSlider from "../../../components/User/UserSlider"

function Home() {

  const { products, loading } = useContext(productContext); 
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');  

  
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;  
    } else {
      return b.price - a.price;  
    }
  });

  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
   
    <UserSlider/>
    <div className="home-container">
      <h1>Our Beautiful Flowers</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search flowers by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="search-input"
        />
        <button onClick={toggleSortOrder} className="sort-button">
          {sortOrder === 'asc' ? 'Sort by Price (first cheap)' : 'Sort by Price (first Expensive)'}
        </button>
      </div>

      <div className="product-list">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
    </>
  );
}

export default Home;
