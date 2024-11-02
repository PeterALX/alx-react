import Notifications from "./Notifications";
import { render, screen } from "@testing-library/react";

/**
 * Note: these tests are temporary. They test specific things in the website that are probably
 * going to change soon. I have added them to have fun with testing, since I opted to use
 * react testing library instead of enzyme, and it seems to no have ways to check that an element with
 * a specific classname is rendered(which is what the testing tasks asked)
 */
test("testing that <Notifications/> renders without crashing", () => {
  render(<Notifications />); //render throws an error if there's a problem
});
test("verify that Notifications renders three list items", () => {
  render(<Notifications />);
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});
test("verify that Notifications renders the text Here is the list of notifications", () => {
  render(<Notifications />);
  expect(
    screen.getByText("Here is the list of notifications")
  ).toBeInTheDocument();
});
