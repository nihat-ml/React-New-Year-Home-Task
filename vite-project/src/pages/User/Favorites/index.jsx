import React, { useContext } from 'react';

import './FavoritesPage.css';
import { favoriteContext } from '../../../context/FavoritesContext';

function FavoritesPage() {
  const { favorites, setFavorites } = useContext(favoriteContext);

  const handleRemoveFavorite = (productId) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== productId);
    setFavorites(updatedFavorites);
    alert("Məhsul favoritlərdən çıxarıldı!");
  };

  return (
    <div className="favorites-page">
      <h1>Your Favorite Products</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet!</p>
      ) : (
        <div className="favorites-list">
          {favorites.map(product => (
            <div key={product.id} className="favorite-card">
              <img 
                src={product.image} 
                alt={product.name} 
                className="favorite-image" 
              />
              <div className="favorite-details">
                <h3 className="favorite-name">{product.name}</h3>
                <p className="favorite-price">${product.price}</p>
                <button 
                  className="favorite-delete-btn" 
                  onClick={() => handleRemoveFavorite(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
