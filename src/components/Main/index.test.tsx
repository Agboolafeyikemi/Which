import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Main from ".";

function getButtons() {
  return Array(144)
    .fill(null)
    .map((_, index) => {
      return screen.getByText(index + 1);
    });
}

describe("Main", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toMatchSnapshot();
  });

  it("starts with no highlighted buttons", () => {
    render(<Main />);
    getButtons().forEach((button) => {
      expect(button).not.toHaveClass("with-border");
      expect(button).not.toHaveClass("highlight");
    });
  });

  it("should correctly select a number when clicked", () => {
    render(<Main />);
    fireEvent.click(screen.getByText("1"));
    expect(screen.getByText("1")).toHaveClass("with-border");
  });
  it("should correctly highlight multiples of a number", () => {
    render(<Main />);
    fireEvent.click(screen.getByText("50"));
    expect(screen.getByText("50")).toHaveClass("highlight");
    expect(screen.getByText("100")).toHaveClass("highlight");
  });
  it("should correctly highlight multiples of a number and not its divisors", () => {
    render(<Main />);
    fireEvent.click(screen.getByText("100"));
    expect(screen.getByText("50")).not.toHaveClass("highlight");
    expect(screen.getByText("100")).toHaveClass("highlight");
  });
});
