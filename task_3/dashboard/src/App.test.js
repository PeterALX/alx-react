import App from "./App";
import { render, screen } from "@testing-library/react";

/**
 * Note: these tests are temporary. They test specific things in the website that are probably
 * going to change soon. I have added them to have fun with testing, since I opted to use
 * react testing library instead of enzyme, and it seems to no have ways to check that an element with
 * a specific classname is rendered(which is what the testing tasks asked)
 */
test("testing that <App/> renders without crashing", () => {
  render(<App />);
});
test("verify that App renders a heading: School dashboard", () => {
  render(<App />);
  expect(screen.getByText("School dashboard")).toBeInTheDocument();
});
test("verify Dashboard message", () => {
  render(<App />);
  expect(
    screen.getByText("Login to access the full dashboard")
  ).toBeInTheDocument();
});
test("verify Copyright", () => {
  render(<App />);
  expect(
    screen.getByText(
      `Copyright ${new Date().getFullYear()} - Holberton School main dashboard`
    )
  ).toBeInTheDocument();
});
