import React, { useState } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';


interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    onSearch(value);
  };

  return (
    <Container className="d-flex justify-content-center" style={{ alignItems: 'center' }}>
      <Form style={{ width: '700px' }} className="d-flex">
        <FormControl 
          type="search"
          placeholder="   Faça sua busca"
          aria-label="Search"
          className="mr-2"
          style={{backgroundColor: '#898CA9', borderColor: '#898CA9', borderRadius: 100}}

          value={query}
          onChange={handleInputChange}
        />
      </Form>
    </Container>
  );
};

export default SearchBar;