import { render, screen } from "@testing-library/react";
import Header from "../layout/Header";
import { ThemeProvider } from "../../context/ThemeContext";

test("renders application title", () => {
  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );

  expect(
    screen.getByText(/react knowledge os/i)
  ).toBeInTheDocument();
});
