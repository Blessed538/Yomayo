import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Homepage from "./home";
import hero from "../../images/hero.png";

describe("Home page", () => {
  it("renders home page correctly", () => {
    const { container, getByRole } = render(<Homepage />);
  });
  it("renders home page with background image", () => {
    const { container, getByRole } = render(<Homepage />);
    expect(screen.getByTestId("background")).toHaveStyle(
      `background-image: url(${hero})`
    );
    expect(
      screen.getByText("Architects that design the future")
    ).toBeInTheDocument();
  });
});
