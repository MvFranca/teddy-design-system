import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Button } from ".";

it("renders the button", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
