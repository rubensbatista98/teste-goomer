import styled from "styled-components";

import { colors, font } from "../../styles/settings";

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

export const Accordion = styled.ul`
  list-style: none;
  margin-top: 25px;
`;

export const Item = styled.li`
  margin-top: 16px;

  a {
    display: block;

    font-weight: bold;
    text-decoration: none;
    color: inherit;

    border-bottom: 1px solid #000;
    padding: 10px;

    position: relative;

    &::first-letter {
      text-transform: uppercase;
    }

    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border: 2px solid transparent;
      border-right-color: ${colors.primary};
      border-bottom-color: ${colors.primary};

      position: absolute;
      top: 50%;
      right: 33px;

      transform: rotate(-45deg) translateY(-50%);
    }
  }
`;

export const Collapse = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(385px, 1fr));
  grid-template-rows: 115px;
  grid-gap: 25px 30px;

  max-height: 0px;
  overflow: hidden;
  transition: max-height 300ms ease-in;

  &:target {
    max-height: 1000em;
    padding: 25px 0 20px;
  }
`;

export const Card = styled.div`
  width: 385px;
  height: 100%;

  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  position: relative;

  display: flex;
`;

export const Thumb = styled.div`
  width: 115px;
  height: 115px;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 15px 10px 15px 0;

  h3 {
    font-size: ${font.medium};
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    font-size: ${font.small};
    margin-bottom: 10px;
  }
`;

export const Price = styled.span`
  color: ${({ onPromo }) => (onPromo ? "#989898" : colors.secondary)};
  font-size: ${({ onPromo }) => (onPromo ? "12px" : font.medium)};
  text-decoration: ${({ onPromo }) => (onPromo ? "line-through" : null)};
`;

export const PromoPrice = styled.span`
  font-weight: 500;
  color: ${colors.secondary};
  margin-right: 10px;
`;

export const Section = styled.section`
  grid-area: section;
  margin-bottom: 100px;
`;

export const Aside = styled.aside`
  grid-area: aside;
  background-color: #e6e6e6;
`;
