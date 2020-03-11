import React, { useState, useCallback, useRef } from "react";

import { Form, Label, Input, Button, IconSearch } from "./styles";

const FormSearch = ({ bgColor, filterByValue }) => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  const handleChange = useCallback(event => {
    setSearchValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      filterByValue(inputRef.current.value);
      setSearchValue("");
      inputRef.current.focus();
    },
    [filterByValue]
  );

  return (
    <Form bgColor={bgColor} onSubmit={handleSubmit}>
      <Label htmlFor="search">Buscar estabelecimento</Label>

      <Input
        type="text"
        id="search"
        value={searchValue}
        onChange={handleChange}
        ref={inputRef}
      />

      <Button type="submit" aria-label="Buscar">
        <IconSearch />
      </Button>
    </Form>
  );
};

export default React.memo(FormSearch);
