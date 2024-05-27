import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './components/NavBar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProductDetails from './pages/ProductDetails'
import Carrinho from './pages/Carrinho'
import Footer from './components/Footer'



function App() {
  return (
    <div style={{ backgroundColor: '#0B0B0F' }}>
      <Menu />
      <div style={{padding: '50, 0'}}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/detalhes' element={<ProductDetails />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App