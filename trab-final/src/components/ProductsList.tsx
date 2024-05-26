import React, { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProdType from '../Types/TipoProdutos';
import { listarProdutos } from '../services/productServices';
import { CartContext } from '../context/cartContext';
import { AuthCtx } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     imageUrl: string;
//   }
  
const ProductList: React.FC = () => {
  const [product, setProducts] = useState<ProdType[] | undefined>([]);

  const {addToCart} = useContext(CartContext)

  const navigate = useNavigate();

  const authContext = useContext(AuthCtx);
  const isAuthenticated = authContext ? authContext.isAuthenticated : false;
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get<ProdType[]>('https://66501409ec9b4a4a60309c15.mockapi.io/produtos');
        const response = await listarProdutos()
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);



  const handleAddCarrinho = async(product: ProdType) =>{
    if(
      isAuthenticated == true
    ){
      addToCart(product)
    }
    else{
      window.alert("Faça login para continuar")
      navigate("/login")
    }
  }

  return (

    <div className="row">
      {product?.map(produto=> (
        <div key={produto.id} className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={produto.img} />
            <Card.Body>
              <Card.Title>{produto.nomeProd}</Card.Title>
              <Card.Text>R${produto.preco}</Card.Text>
              <Button variant="primary" onClick={() => handleAddCarrinho(produto)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList