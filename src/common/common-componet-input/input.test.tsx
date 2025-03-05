import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";
import { FaHome } from "react-icons/fa";

describe("Input Component", () => {
  test("renders input with placeholder text", () => {
    render(<Input text="Search here..." />);

    const inputElement = screen.getByPlaceholderText("Search here...");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input with icon", () => {
    render(<Input icon={<FaHome data-testid="input-icon" />} text="Type..." />);

    const iconElement = screen.getByTestId("input-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("applies custom class", () => {
    render(<Input className="custom-class" text="Custom Input" />);

    const container = screen.getByPlaceholderText("Custom Input").parentElement;
    expect(container).toHaveClass("custom-class");
  });
});
