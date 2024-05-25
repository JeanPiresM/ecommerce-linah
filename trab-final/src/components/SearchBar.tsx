import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { listarProdutos } from '../services/productServices';
import ProdType from '../Types/TipoProdutos';



const SearchBar: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdType[] | undefined>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<ProdType[] | undefined>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await listarProdutos()
      console.log('Fetched data:', response);
      setProdutos(response);
      setProdutosFiltrados(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // Filtrando os itens conforme o usuário digita
    const filtrado = produtos?.filter(item => 
      item.nomeProd && item.nomeProd.toLowerCase().includes(value)
    );

    console.log('Filtered data on input change:', filtrado);

    setProdutosFiltrados(filtrado);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtrado = produtos?.filter(item => 
      item.nomeProd && item.nomeProd.toLowerCase().includes(query)
    );

    console.log('Filtered data on submit:', filtrado);

    setProdutosFiltrados(filtrado);
  };

  return (
    <div>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Faça sua busca"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
        />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>
      <div>
        {produtosFiltrados?.map(item => (
          <div key={item.id}>
            <h3>{item.nomeProd}</h3>
            <p>{item.descricao}</p>
            <p>{item.preco}</p>
            <img src={item.img} alt={item.nomeProd} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;