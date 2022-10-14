import { cleanup, render, screen } from "@testing-library/react";
import { Stack } from "./stack";

beforeEach(cleanup);

describe("components/stack", () => {
  it("should render component with default prop", () => {
    render(<Stack data-testid="stack" />);
    const element = screen.getByTestId("stack");
    const style = window.getComputedStyle(element);
    expect(style["flex-direction"]).toBe("column");
  });

  it("should render component with horizontal prop", () => {
    render(<Stack data-testid="stack" horizontal />);
    const element = screen.getByTestId("stack");
    const style = window.getComputedStyle(element);
    expect(style["flex-direction"]).toBe("row");
  });

  it.skip("should render rows in mobile", () => {
    console.log("to be done in e2e");
  });
});
