import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login/Login.page.jsx";
import HomePage from "./pages/home/Home.page.jsx";
import ProtectedComponent from "./core/protected/Protected.component.jsx";
import {Provider} from "react-redux";
import {store} from "./core/store/store.js";

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to='/login' replace />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/home',
        element: <ProtectedComponent>
          <HomePage />
        </ProtectedComponent>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>
)
