import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import MyReviews from './pages/MyReviews';
import AddService from './pages/AddService';
import ServiceDetails from './pages/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import MyServices from './pages/MyServices';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/my-reviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: "/add-service",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/my-services",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
      },
      {
        path: "/services/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://service-sphere-server.vercel.app/services/details/${params.id}`)
      },
    ]

  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
