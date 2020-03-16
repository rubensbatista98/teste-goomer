import styled from "styled-components";

import { colors } from "../../styles/settings";

export const Accordion = styled.ul`
  list-style: none;
  margin-top: 25px;
`;

export const Item = styled.li`
  margin-top: 16px;
`;

export const Collapse = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(385px, 1fr));
  grid-template-rows: 115px;
  grid-gap: 25px 30px;

  max-height: 0;
  overflow: hidden;
  transition: max-height 0ms ease;

  &.-open {
    transition-duration: 500ms;
    max-height: 1000em;
    padding: 25px 0 20px;
  }
`;

export const Button = styled.a`
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

    transform: rotate(-45deg) translate(50%, -50%);
    transition: transform 100ms linear;
  }

  &.-open::before {
    transform: rotate(45deg) translateY(-50%);
  }
`;
