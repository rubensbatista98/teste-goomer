import styled from "styled-components";

import { font } from "../../styles/settings";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 800px 280px;
  grid-template-areas:
    "header  ."
    "section aside";
  grid-template-rows: 145px 1fr;
  grid-gap: 15px 135px;
`;

export const Header = styled.header`
  grid-area: header;

  display: flex;
  padding: 10px 0;
`;

export const Image = styled.div`
  width: 145px;
  height: 100%;
  margin-right: 20px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${font.big};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Hour = styled.p`
  font-size: ${font.small};
  margin-bottom: 5px;
`;

export const Section = styled.section`
  grid-area: section;
`;

export const Aside = styled.aside`
  grid-area: aside;
`;
