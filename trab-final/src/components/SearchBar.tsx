import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';


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
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Faça sua busca"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
};

export default SearchBar;