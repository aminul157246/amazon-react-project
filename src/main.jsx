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
import Dashboard from './Dashboard/Dashboard';
import Profile from './Dashboard/Profile';
import EditProfile from './Dashboard/EditProfile';
import DashboardLayout from './Dashboard/DashboardLayout';


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
        element : <ProductDetails></ProductDetails>,
        loader : ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path : '/dashboard',
        element : <DashboardLayout></DashboardLayout> ,
        children : [
          {
            path : '/dashboard',
            element : <Dashboard></Dashboard>
          },
          {
            path : '/dashboard/profile',
            element : <Profile></Profile>
          },
          {
            path : '/dashboard/editProfile',
            element : <EditProfile></EditProfile>
          },
        ],
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
