import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./button";

beforeEach(cleanup);

describe("components/button", () => {
  it("should render component with label prop", () => {
    render(<Button type="button" data-testid="button">button-text</Button>);

    expect(screen.getByTestId("button")).toHaveAttribute("type", "button");
    expect(screen.getByText("button-text")).toBeInTheDocument();
  });
});
