import { useLocation } from 'react-router-dom';

const ProduDetails = () => {
  const location = useLocation();
  const productId = location.state.id;

  // Use o ID do produto aqui para buscar os detalhes do produto usando o serviço pegarProdutoPorId

  return (
    <div>
      <h1>Detalhes do Produto {productId}</h1>
      {/* Exibir detalhes do produto aqui */}
    </div>
  );
};

export default ProduDetails;
