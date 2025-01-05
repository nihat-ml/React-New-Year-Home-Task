import { FaShoppingBasket, FaHeart, FaCogs } from 'react-icons/fa'; 
import './AdminNavbar.css'; 
import { Link } from 'react-router-dom';

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-logo">
        <h1>Florist Admin<span className="logo-icon">🌸</span></h1>
      </div>
      <ul className="admin-navbar-links">
        <li>
          <Link to="" className="admin-navbar-link">Dashboard</Link>
        </li>
        <li>
          <Link to="adminproducts" className="admin-navbar-link">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
