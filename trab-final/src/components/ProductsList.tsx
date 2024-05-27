import React, { useState, useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProdType from '../Types/TipoProdutos';
import { listarProdutos } from '../services/productServices';
import { CartContext } from '../context.tsx/cartContext';

interface ProductListProps {
  query: string;
}

const ProductList: React.FC<ProductListProps> = ({query}) => {
  const [products, setProducts] = useState<ProdType[] | undefined>([]);
  
  const filteredProducts = products?.filter( item => item.nomeProd.toLowerCase().includes(query))

  const {addToCart} = useContext(CartContext)

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

  return (

    <div className="row">
      {filteredProducts?.map(produto=> (
        <div key={produto.id} className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={produto.img} />
            <Card.Body>
              <Card.Title>{produto.nomeProd}</Card.Title>
              <Card.Text>${produto.preco}</Card.Text>
              <div  className="d-flex">
              <Button style={{color: 'white', borderColor: '#933FFE', backgroundColor: '#933FFE'}} variant="primary"  className="mx-2"  onClick={() => addToCart(produto)}>Add to Cart</Button>
              <Button style={{color: 'white', borderColor: '#933FFE', backgroundColor: '#933FFE'}}variant="secondary"  className="mx-2"  onClick={() => addToCart(produto)}>Details</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList