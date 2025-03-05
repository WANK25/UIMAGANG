import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";
import "@testing-library/jest-dom";

describe("Search Component", () => {
  test("renders search input with placeholder", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/Search/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders search icon", () => {
    render(<Search />);
    const iconElement = screen.getByTestId("search-icon");

    expect(iconElement).toBeInTheDocument();
  });

  test("allows user to type in search input", async () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(
      /Search/i
    ) as HTMLInputElement;
    await userEvent.type(inputElement, "wisata");
    expect(inputElement.value).toBe("wisata");
  });
});
