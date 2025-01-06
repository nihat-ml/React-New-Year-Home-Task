import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import './EditProduct.css'; 

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: '',
    price: '',
    color: '',
    fragrance: '',
    height: '',
    origin: '',
    bloom_size: '',
    petal_count: '',
    image: '',
  });

  useEffect(() => {
    
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInitialValues({
          name: data.name || '',
          price: data.price || '',
          color: data.color || '',
          fragrance: data.fragrance || '',
          height: data.height || '',
          origin: data.origin || '',
          bloom_size: data.bloom_size || '',
          petal_count: data.petal_count || '',
          image: data.image || '',
        });
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        Swal.fire('Xəta', 'Məhsul məlumatları yüklənmədi.', 'error');
      });
  }, [id]);

  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Məhsul adı tələb olunur'),
    price: Yup.number()
      .required('Qiymət tələb olunur')
      .positive('Qiymət müsbət olmalıdır'),
      color: Yup.string().required('Rəng tələb olunur'),
      fragrance: Yup.string().required('Ətir tələb olunur'),
      height: Yup.string().required('Hündürlük tələb olunur'),
      origin: Yup.string().required('Mənşə tələb olunur'),
      bloom_size: Yup.string().required('Çiçək ölçüsü tələb olunur'),
      petal_count: Yup.number()
        .required('Ləçək sayı tələb olunur')
        .positive('Ləçək sayı müsbət olmalıdır'),
      image: Yup.string()
        .url('Düzgün bir şəkil URL-si daxil edin')
        .required('Şəkil URL-si tələb olunur'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire('Uğurlu', 'Məhsul uğurla redaktə edildi.', 'success');
          navigate('/adminproducts'); 
        } else {
          Swal.fire('Xəta', 'Redaktə əməliyyatı uğursuz oldu.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        Swal.fire('Xəta', 'Server ilə əlaqə qurulmadı.', 'error');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="edit-product-container">
      <h1>Məhsulu Redaktə Et</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="edit-product-form">
            <div className="form-group">
              <label htmlFor="name">Məhsul Adı</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Qiymət</label>
              <Field name="price" type="number" className="form-control" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="color">Rəng</label>
              <Field name="color" type="text" className="form-control" />
              <ErrorMessage name="color" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="fragrance">Ətir</label>
              <Field name="fragrance" type="text" className="form-control" />
              <ErrorMessage name="fragrance" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="height">Hündürlük</label>
              <Field name="height" type="text" className="form-control" />
              <ErrorMessage name="height" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="origin">Mənşə</label>
              <Field name="origin" type="text" className="form-control" />
              <ErrorMessage name="origin" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="bloom_size">Çiçək Ölçüsü</label>
              <Field name="bloom_size" type="text" className="form-control" />
              <ErrorMessage name="bloom_size" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="petal_count">Ləçək Sayı</label>
              <Field name="petal_count" type="number" className="form-control" />
              <ErrorMessage name="petal_count" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="image">Şəkil URL-si</label>
              <Field name="image" type="text" className="form-control" />
              <ErrorMessage name="image" component="div" className="error" />
            </div>
            <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
              Redaktə Et
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditProduct;
