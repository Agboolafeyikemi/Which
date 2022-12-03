import styled from "styled-components";
import { media, colours } from "../../utils";

export const NumberBoxWrapper = styled.button`
  ${media.desktop} {
    min-width: 200px;
  }
  ${media.tablet} {
    min-width: 285px;
  }
  ${media.mobile} {
    width: 100%;
    min-width: 240px;
  }
  height: 150px;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  margin: 3px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 64px;
  color: ${colours.white};
  background: rgb(74 222 128);
  border: none;
  &.highlight {
    background-color: ${colours.darkGreen};
    border: 3px solid rgb(134 239 172);
  }
  &.with-border {
    border: 3px solid black;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 10px;
    color: ${colours.limeGreen};
  }
  &:hover {
    background-color: ${colours.darkGreen};
  }
`;
