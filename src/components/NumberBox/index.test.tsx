import React from "react";
import { render } from "@testing-library/react";
import NumberBox from ".";

describe("NumberBox", () => {
  it("should render successfully with props", () => {
    const props = {
      numberValue: 1,
      isMultiple: false,
      isSelected: false,
      handleClick: (e: React.MouseEvent<HTMLButtonElement>) => null,
    };
    const { baseElement } = render(<NumberBox {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
