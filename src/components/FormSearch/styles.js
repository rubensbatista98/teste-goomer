import styled from "styled-components";

import { colors, font } from "../../styles/settings";

export const Form = styled.form`
  width: 100%;
  max-width: 840px;
  background-color: ${props => (props.bgColor ? props.bgColor : "#FBFBFB")};
  margin: 35px auto 0;
  box-shadow: 0 2px 4px ${colors.shadow};
  border-radius: 20px;
  overflow: hidden;

  display: flex;
`;

export const Label = styled.label`
  font-size: ${font.medium};
  background-color: #ffffff;
  padding: 10px 20px 10px 40px;
`;

export const Input = styled.input`
  flex-grow: 1;

  font-size: ${font.medium};
  background-color: transparent;
  padding: 0 10px;
  border: none;
`;

export const Button = styled.button`
  color: ${colors.primary};
  background-color: transparent;
  padding: 0 20px;
  border: none;
  cursor: pointer;
`;
