import styled, { createGlobalStyle } from "styled-components";
import { media, colours } from "../../utils";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colours.ghostWhite};
    height: auto;
    margin: 0;
    font-family: "Roboto", sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  h1 {
    margin: 0;
    
  }
`;

export const MainWrapper = styled.div`
  h1 {
    color: ${colours.darkGreen};
    width: 100%;
    text-align: center;
    padding: 10px;
    ${media.mobile} {
      font-size: 24px;
    }
  }
  p {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-bottom: 27px;
    color: ${colours.darkGrey};
  }
  max-width: 820px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 5px 20px 5px;
  margin: 15px;
`;
