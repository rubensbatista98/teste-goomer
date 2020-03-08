import React from "react";

import { Form, Label, Input, Button } from "./styles";

const FormSearch = ({ bgColor }) => {
  return (
    <Form bgColor={bgColor}>
      <Label htmlFor="search">Buscar estabelecimento</Label>

      <Input type="text" id="search" />

      <Button type="submit">Buscar</Button>
    </Form>
  );
};

export default FormSearch;
