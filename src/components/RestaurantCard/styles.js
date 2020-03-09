import styled from "styled-components";

import { colors, font } from "../../styles/settings";

export const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 4px ${colors.shadow};
  position: relative;

  display: flex;
`;

export const Thumb = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 25px;

  img {
    width: 100%;
    height: 100%;
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
