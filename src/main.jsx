import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutMain from './LayoutMain/LayoutMain';
import Products from './Products/Products';
import Home from './Pages/Home/Home';
import ProductDetails from './ProductDetails/ProductDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain></LayoutMain> ,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/products',
        loader : () => fetch(`https://dummyjson.com/products`),
        element : <Products></Products>,
      },
      {
        path : "/products/:id",
        element : <ProductDetails></ProductDetails>
      },
      {
        path : '/dashboard',
        element : <div>soidf</div>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
