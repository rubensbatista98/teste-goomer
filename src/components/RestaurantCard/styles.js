import styled from "styled-components";

import { colors, font } from "../../styles/settings";

export const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  position: relative;

  display: flex;

  @media (max-width: 800px) {
    max-width: 500px;
    margin: 0 auto;

    flex-direction: column;
  }
`;

export const Thumb = styled.div`
  width: 100px;
  margin-right: 25px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-height: 300px;
    margin: 0 0 25px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: ${font.medium};
    font-weight: 500;
    color: ${colors.primary};
  }

  p {
    font-size: ${font.small};
    color: ${colors.primary};
  }

  @media (max-width: 800px) {
    padding: 0px 30px 20px;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
      margin-top: 5px;
    }
  }
`;

export const Status = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  font-size: ${font.verySmall};
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;
  background-color: ${({ isOpen }) => (isOpen ? colors.third : colors.fourth)};
  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(20px, -20px);

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
