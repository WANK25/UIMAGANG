import { render, screen, fireEvent } from "@testing-library/react";
import ButtonTextIcon from "./ButtonTextIcon";
import { FaHome } from "react-icons/fa";
import "@testing-library/jest-dom";

describe("ButtonTextIcon Component", () => {
  test("renders button with text and icon", () => {
    render(<ButtonTextIcon text="Home" icon={<FaHome />} />);

    const buttonElement = screen.getByTestId("button-text-icon");
    expect(buttonElement).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonTextIcon text="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByTestId("button-text-icon");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders only icon if text is not provided", () => {
    render(<ButtonTextIcon icon={<FaHome />} />);

    const buttonElement = screen.getByTestId("button-text-icon");
    expect(buttonElement).toBeInTheDocument();

    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });
});
