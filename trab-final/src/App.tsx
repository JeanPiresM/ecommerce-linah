import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './components/NavBar'
import { Container } from "react-bootstrap"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProductDetails from './pages/ProductDetails'
import Carrinho from './pages/Carrinho'



function App() {
  return (
      <Container className="mb-4">
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route  path='/carrinho' element={<Carrinho/>}  />
        <Route path='/detalhes' element={<ProductDetails />}/>
      </Routes>
      </Container>
  )
}

export default App