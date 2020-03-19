import styled from "styled-components";

import { colors, font } from "../../styles/settings";

export const Card = styled.div`
  height: 100%;
  position: relative;

  border-radius: 4px;
  box-shadow: 0 4px 8px ${colors.shadow};

  display: flex;
`;

export const Thumb = styled.div`
  max-width: 115px;
  min-width: 115px;
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
`;

export const Title = styled.h3`
  font-size: ${font.medium};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: ${font.small};
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-weight: 500;
  ${({ promoIsActive }) => handlePrice(promoIsActive)}
`;

function handlePrice(promoStatus) {
  if (promoStatus) {
    return {
      "font-size": "12px",
      color: "#989898",
      "text-decoration": "line-through"
    };
  }

  return {
    color: colors.secondary,
    "margin-right": "10px"
  };
}

export const Promo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  transform: translateY(-30%);

  width: 100px;
  height: 20px;
  color: #fff;
  background-color: ${colors.third};
  border-radius: 10px;

  p {
    font-size: ${font.verySmall};
    font-weight: bold;
    margin-left: 3px;
  }
`;
