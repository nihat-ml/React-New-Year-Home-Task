import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import ProductsProvider from "./context/ProductsContext"


import BasketProvider from "./context/BasketContext"
import FavoritesProvider from './context/FavoritesContext.jsx'
createRoot(document.getElementById('root')).render(
  <BasketProvider>
  <FavoritesProvider>
   <ProductsProvider>
    <App />
  </ProductsProvider>
 </FavoritesProvider>
 </BasketProvider>
)