import { createContext, useEffect, useState } from 'react';

export const favoriteContext = createContext(); 

function FavoriteProvider({ children }) {
  const localFavorite = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(localFavorite);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    favorites,
    setFavorites,
  };

  return (
    <favoriteContext.Provider value={value}>
      {children}
    </favoriteContext.Provider>
  );
}

export default FavoriteProvider;
