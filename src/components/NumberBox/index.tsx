import React from "react";
import { NumberBoxWrapper } from "./styles";

export interface NumberBoxProps {
  numberValue: number;
  isMultiple: boolean;
  isSelected: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NumberBox = (props: NumberBoxProps) => {
  const { numberValue, isMultiple, isSelected, handleClick } = props;
  return (
    <NumberBoxWrapper
      value={numberValue}
      className={
        isSelected ? "with-border highlight" : isMultiple ? "highlight" : ""
      }
      onClick={handleClick}
    >
      {numberValue}
    </NumberBoxWrapper>
  );
};

export default NumberBox;
