import React, { useContext } from 'react';
import { FaInfoCircle, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import { favoriteContext } from '../../context/FavoritesContext';
import './ProductCard.css';
import { basketContext } from '../../context/BasketContext';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useContext(favoriteContext);
  let {basket,setBasket}=useContext(basketContext) 

  const handleAddFavorite = (product) => {
    const findFavorite = favorites.find(favorite => favorite.id === product.id);
    if (findFavorite) {
      alert("Bu məhsul artıq favoritlərdə mövcuddur.");
    } else {
      setFavorites([...favorites, product]);
      alert("Məhsul favoritlərə əlavə edildi!");
    }
  };
  function handleAddBasket(product){
    let findBasket=basket.find(item=>item.id==product.id)
    if(findBasket){
        findBasket.count++
        setBasket([...basket])
    }else{
        setBasket([...basket,{...product,count:1}])
       
    }
}

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
        />
      </div>

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>

        <div className="button-group">
          <button 
            className="product-btn details-btn"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <FaInfoCircle size={20} /> Details
          </button>
          <button 
            className="product-btn favorite-btn"
            onClick={() => handleAddFavorite(product)} 
          >
            <FaHeart size={20} /> Favorite
          </button>
          <button 
            className="product-btn basket-btn"
            onClick={() => handleAddBasket(product)}
          >
            <FaShoppingCart size={20} /> Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
