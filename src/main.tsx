import React from 'react'
import ReactDOM from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';
import './assets/scss/bootstrap.scss'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/index.tsx'
import AuthProvider from './contexts/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={routes}/>
    <Toaster position="top-right"/>

    </AuthProvider>
    
  </React.StrictMode>,
)
