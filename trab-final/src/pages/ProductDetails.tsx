import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { pegarProdutoPorId } from '../services/productServices';
import ProdType from '../Types/TipoProdutos';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context.tsx/cartContext';
import { AuthCtx } from '../context.tsx/authContext';

const ProdDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // Obtém o productId da rota
  const [product, setProduct] = useState<ProdType | null>(null); // Estado para armazenar os detalhes do produto
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento dos detalhes



  const { addToCart } = useContext(CartContext)


  const navigate = useNavigate();

  const authContext = useContext(AuthCtx);
  const isAuthenticated = authContext ? authContext.isAuthenticated : false;

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



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await pegarProdutoPorId(productId);
        setProduct(productData); // Define os detalhes do produto no estado
        setLoading(false); // Define loading como false após carregar os detalhes
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      }
    };

    fetchProduct();
  }, [productId]); // Execute o efeito sempre que o productId mudar

  // Se estiver carregando, você pode exibir uma mensagem de carregamento
  if (loading) {
    return <div className="text-center mt-5">Carregando...</div>;
  }

  // Se não houver detalhes do produto, você pode exibir uma mensagem de erro ou fazer o tratamento adequado
  if (!product) {
    return <div className="text-center mt-5">Detalhes do produto não encontrados.</div>;
  }

  // Renderize os detalhes do produto
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card mb-7" style={{ maxWidth: '1000', borderColor: '#933FFE', backgroundColor: '#0B0B0F' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.img} alt={product.nomeProd} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div style={{marginLeft: 50}} className="card-body text-start">
              <p style={{ color: 'white', fontSize: 60, marginBottom: 20, marginTop: 50}} className="card-text">{product.nomeProd}</p>
              <p style={{color: 'white', fontSize: 60, fontWeight: 'bold', marginBottom: 50,}} className="card-text">R${product.preco}</p>
              <p style={{color: 'white', fontSize: 20, marginBottom: 50,}}className="card-text">Descrição: {product.descricao}</p>
              {/* Adicione outras informações do produto aqui conforme necessário */}
              <Button style={{ color: 'white', borderColor: '#933FFE', backgroundColor: '#933FFE', fontWeight: 'bold' }} variant="primary" size='lg' onClick={() => handleAddCarrinho(product)}>Adicionar ao carrinho</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
