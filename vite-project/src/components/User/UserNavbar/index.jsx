import React, { useContext } from 'react';
import { FaShoppingBasket, FaHeart } from 'react-icons/fa'; 
import './UserNavbar.css'; 
import { Link } from 'react-router-dom';
import { favoriteContext } from '../../../context/FavoritesContext';
import { basketContext } from '../../../context/BasketContext';

function UserNavbar() {
    const { favorites} = useContext(favoriteContext);
    const {basket}=useContext(basketContext)
    
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <h1>Florist<span className="logo-icon">🌸</span></h1>
      </div>
      <ul className="navbar-links">
      <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Free Themes</a></li>
        <li><a href="#">Premium Themes</a></li>
        <li><a href="#">Website Templates</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className="navbar-icons">
        <Link to="/favorites" className="icon">
          <FaHeart />
          <span>({favorites.length})</span>
        </Link>
        <Link to="/basket" className="icon">
          <FaShoppingBasket />
          <span>({basket.length})</span>
        </Link>
      </div>
    </nav>
  );
}

export default UserNavbar;
