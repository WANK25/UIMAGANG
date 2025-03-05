import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders button and handles click", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders button with icon", () => {
    render(<Button onClick={() => {}} icon={<AiOutlinePlus />} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("button-icon")).toBeInTheDocument();
  });

  test("applies custom class", () => {
    const customClass = "bg-blue-500";
    render(<Button onClick={() => {}} className={customClass} />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(customClass);
  });
});
