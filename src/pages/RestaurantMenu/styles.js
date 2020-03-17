import styled from "styled-components";

import { font } from "../../styles/settings";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, 800px) minmax(200px, 280px);
  grid-template-areas:
    "header  ."
    "section aside";
  grid-template-rows: 145px 1fr;
  grid-gap: 15px 135px;

  margin-bottom: 50px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "section"
      "aside";
    grid-row-gap: 30px;

    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 550px) {
    margin-left: 0px;
    margin-right: 0px;
  }
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

export const Schedule = styled.p`
  font-size: ${font.small};
  margin-bottom: 5px;
`;

export const Section = styled.section`
  grid-area: section;
`;

export const Aside = styled.aside`
  grid-area: aside;

  height: 760px;
  background-color: #e6e6e6;

  @media (max-width: 950px) {
    max-height: 200px;
  }
`;
