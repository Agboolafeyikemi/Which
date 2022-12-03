import React, { useState } from "react";
import { NumberBox } from "../.";
import { MainWrapper, GlobalStyle } from "./styles";
import { initialArray, NumberElement } from "../../utils";

const Main = () => {
  const [numbersArray, setNumbersArray] = useState(initialArray);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = e.currentTarget;
    const valueAsNumber = +value;
    const newNumbersArray: NumberElement[] = numbersArray.map(
      (number: NumberElement) => {
        return {
          ...number,
          isMultiple: number.numberValue % valueAsNumber === 0,
          isSelected: number.numberValue === valueAsNumber,
        };
      }
    );
    setNumbersArray(newNumbersArray);
  };

  return (
    <>
      <MainWrapper>
        <h1>Interactive Multiplication Table</h1>
        <p>Select a number from the grid to see its multiples </p>

        {numbersArray.map((item) => (
          <NumberBox
            key={item.numberValue}
            numberValue={item.numberValue}
            isMultiple={item.isMultiple}
            isSelected={item.isSelected}
            handleClick={handleClick}
          />
        ))}
      </MainWrapper>
      <GlobalStyle />
    </>
  );
};

export default Main;
