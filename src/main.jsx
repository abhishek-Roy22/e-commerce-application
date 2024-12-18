import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import cartStore from './store/CartStore.js';
import Checkout from './pages/Checkout/Checkout.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/productlist',
        element: <ProductList />,
      },
      {
        path: '/productdetails/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cartStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
