import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 25px 0 50px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  padding: 20px 20px 5px 5px;
`;
