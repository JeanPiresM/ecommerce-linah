import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const SearchBar: React.FC = () => {
  const [posts, setPosts] = useState<Product[]>([]);
  const [postsFiltrados, setPostsFiltrados] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://6647cb172bb946cf2f9ee3c5.mockapi.io/posts");
      console.log('Fetched data:', response.data);
      setPosts(response.data);
      setPostsFiltrados(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // Filtrando os itens conforme o usuário digita
    const filtrado = posts.filter(item => 
      item.name && item.name.toLowerCase().includes(value)
    );

    console.log('Filtered data on input change:', filtrado);

    setPostsFiltrados(filtrado);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtrado = posts.filter(item => 
      item.name && item.name.toLowerCase().includes(query)
    );

    console.log('Filtered data on submit:', filtrado);

    setPostsFiltrados(filtrado);
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
        {postsFiltrados.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src={item.imageUrl} alt={item.name} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;