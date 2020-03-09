import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 25px 0 50px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export const Item = styled.li`
  padding: 20px 20px 5px 5px;
`;
