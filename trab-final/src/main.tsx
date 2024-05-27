import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context.tsx/cartContext.tsx'
import AuthCtxProvider from './context.tsx/authContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthCtxProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </AuthCtxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)