import React, { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProdType from '../Types/TipoProdutos';
import { listarProdutos } from '../services/productServices';
import { CartContext } from '../context.tsx/cartContext';
import { Link } from 'react-router-dom';
import { AuthCtx } from '../context.tsx/authContext';
import { useNavigate } from 'react-router-dom';

interface ProductListProps {
  query: string;
}

const ProductList: React.FC<ProductListProps> = ({ query }) => {
  const [products, setProducts] = useState<ProdType[] | undefined>([]);

  const filteredProducts = products?.filter(item => item.nomeProd.toLowerCase().includes(query))

  const { addToCart } = useContext(CartContext)


  const navigate = useNavigate();

  const authContext = useContext(AuthCtx);
  const isAuthenticated = authContext ? authContext.isAuthenticated : false;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await listarProdutos()
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddCarrinho = async (product: ProdType) => {
    if (
      isAuthenticated == true
    ) {
      addToCart(product)
    }
    else {
      window.alert("Faça login para continuar")
      navigate("/login")
    }
  }


  return (

    <div style={{ backgroundColor: '#0B0B0F', marginLeft: 150, marginRight: 150, marginTop: 60 }} className="row">
      {filteredProducts?.map(produto => (
        <div key={produto.id} className="col-lg-3 col-md-10 mb-4">
          <Card style={{ backgroundColor: '#0B0B0F', borderColor: 'white', borderRadius: 10 }}>
            <Card.Img variant="top" src={produto.img} />
            <Card.Body style={{ color: 'white' }}>
              <Card.Title style={{ fontSize: 22, marginTop: 20 }}>{produto.nomeProd}</Card.Title>
              <Card.Text style={{ fontSize: 28, fontWeight: 'bold' }}>R${produto.preco}</Card.Text>
              <div style={{ gap: 10 }} className="d-grid">

                <Button style={{ color: 'white', borderColor: '#933FFE', backgroundColor: '#933FFE', fontWeight: 'bold' }} variant="primary" onClick={() => handleAddCarrinho(produto)}>Adicionar ao carrinho</Button>

                <Link to={`/details/${produto.id}`} className="d-grid">
                  <Button style={{ color: 'white', borderColor: '#898CA9', backgroundColor: '#898CA9', fontWeight: 'bold' }} variant="secondary">Detalhes do produto</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList