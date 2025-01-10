import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './AdminProducts.css';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Əminsiniz?',
      text: "Bu məhsulu silmək istədiyinizə əminsiniz?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Bəli, sil!',
      cancelButtonText: 'Ləğv et',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              setProducts(products.filter((product) => product.id !== id));
              Swal.fire('Silindi!', 'Məhsul uğurla silindi.', 'success');
            } else {
              return response.text().then((text) => {
                Swal.fire('Xəta!', `Silinərkən xəta baş verdi: ${text}`, 'error');
              });
            }
          })
          .catch((error) => {
            console.error('Error deleting product:', error);
            Swal.fire(
              'Xəta!',
              'Məhsul silinərkən server ilə əlaqə qurulmadı.',
              'error'
            );
          });
      }
    });
  };

  return (
    <div className="admin-products-container">
      <h1>Admin Products</h1>
      <button
        className="btn add-btn"
        onClick={() => navigate('/admin/addproduct')}
      >
        Add Product
      </button>
      <table className="admin-products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td className="actions">
                <Link to={`/home/${product.id}`} className="btn details-btn">
                  Details
                </Link>
                <NavLink to={`/admin/editproduct/${product.id}`} className="btn edit-btn">
                  Edit
                </NavLink>
                <button
                  className="btn delete-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
