import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login/Login.page.jsx";

const routes = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='/login' replace />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
)
