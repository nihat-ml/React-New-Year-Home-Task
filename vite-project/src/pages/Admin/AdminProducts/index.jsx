import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './AdminProducts.css'; // CSS stilini əlavə et

function AdminProducts() {
  const [products, setProducts] = useState([]);

  // Məhsulları əldə etmək
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Məhsul silmə funksiyası
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Əminsiniz?',
      text: "Bu məhsulu silmək istədiyinizə əminsiniz?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Bəli, sil!',
      cancelButtonText: 'Ləğv et'
    }).then((result) => {
      if (result.isConfirmed) {
        // API-ya silmə sorğusu göndəririk
        fetch(`http://localhost:5000/products/${id}`, {
          method: 'DELETE',
        })
        .then(response => {
          if (response.ok) {
            // Məhsul API-dan silindiyi zaman, state-i yeniləyirik
            setProducts(products.filter(product => product.id !== id));
            Swal.fire(
              'Silindi!',
              'Məhsul uğurla silindi.',
              'success'
            );
          } else {
            // Əgər status kodu 200-dən fərqli olarsa, xəta mesajını göstəririk
            return response.text().then(text => {
              Swal.fire(
                'Xəta!',
                `Silinərkən xəta baş verdi: ${text}`,
                'error'
              );
            });
          }
        })
        .catch(error => {
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
      <table className="admin-products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td className="actions">
                <Link to={`/product/${product.id}`} className="btn details-btn">Details</Link>
                <Link to={`/edit/${product.id}`} className="btn edit-btn">Edit</Link>
                <button className="btn delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
