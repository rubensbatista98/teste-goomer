import styled from "styled-components";

import { colors, font } from "../../styles/settings";

export const Title = styled.h1`
  font-size: ${font.big};
  text-align: center;
  font-weight: 500;
  color: ${colors.primary};
`;

export const Error = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  margin: 40px 10px;
`;

export const NotFound = styled(Error)`
  margin: 50px 20px;
`;
