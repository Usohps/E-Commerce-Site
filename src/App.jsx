import React, { Suspense } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';
import CartProvider from './store/cart-provider';
import { Routes, Route, Navigate } from 'react-router-dom';

const Navbar = React.lazy(() => import('./components/header/Navbar'));
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Cart = React.lazy(() => import('./pages/CartPage'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

const App = () => {
  return (
    <CartProvider>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home/*' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route
              path='/products/:productTitle'
              element={<ProductDetails />}
            />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </CartProvider>
  );
};

export default App;
