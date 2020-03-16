import styled from "styled-components";

import { colors, font } from "../../styles/settings";

export const Card = styled.div`
  width: 385px;
  height: 100%;

  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  position: relative;

  display: flex;
`;

export const Thumb = styled.div`
  max-width: 115px;
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
