import styled from "styled-components";
import { MdSearch } from "react-icons/md";

import { colors, font } from "../../styles/settings";

export const Form = styled.form`
  width: 100%;
  max-width: 840px;
  height: 40px;
  background-color: ${props => (props.bgColor ? props.bgColor : "#FBFBFB")};
  margin: 0 auto;
  box-shadow: 0 2px 4px ${colors.shadow};
  border-radius: 20px;
  overflow: hidden;

  display: flex;

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 550px) {
    height: auto;
    flex-wrap: wrap;
  }
`;

export const Label = styled.label`
  font-size: ${font.medium};
  background-color: #ffffff;
  padding: 10px 20px 10px 40px;

  @media (max-width: 900px) {
    padding-left: 20px;
  }

  @media (max-width: 550px) {
    flex-basis: 100%;
  }
`;

export const Input = styled.input`
  flex-grow: 1;

  font-size: ${font.medium};
  background-color: transparent;
  padding: 0 10px;
  border: 1px solid transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 550px) {
    padding: 10px 5px 10px 20px;
  }
`;

export const Button = styled.button`
  color: ${colors.primary};
  background-color: transparent;
  padding: 0 20px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:focus,
  &:hover {
    background-color: ${colors.fourth};
  }
`;

export const IconSearch = styled(MdSearch)`
  width: 24px;
  height: 24px;
  color: ${colors.primary};
`;
