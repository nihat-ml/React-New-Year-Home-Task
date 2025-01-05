import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css'; 

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">Price: ${product.price}</p>
          <p>Color: {product.color}</p>
          <p>Fragrance: {product.fragrance}</p>
          <p>Height: {product.height}</p>
          <p>Origin: {product.origin}</p>
          <p>Bloom Size: {product.bloom_size}</p>
          <p>Petal Count: {product.petal_count}</p>
          <button 
            className="back-button" 
            onClick={() => navigate('/')} 
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
