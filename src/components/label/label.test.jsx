import { cleanup, render, screen } from "@testing-library/react";
import { Label } from "./label";

beforeEach(cleanup);

describe("components/label", () => {
  it("should render component with label prop", () => {
    render(<Label id="000" label="world" data-testid="label" />);

    const content = screen.getByTestId("label");
    expect(content).toHaveTextContent("world");
  });

  it("should render component with placeholder prop", () => {
    render(<Label id="000" placeholder="world" data-testid="label" />);

    const content = screen.getByTestId("label");
    expect(content).toHaveTextContent("World");
  });

  it("should render component with id prop", () => {
    render(<Label id="000" data-testid="label" />);

    const content = screen.getByTestId("label");
    expect(content).toHaveTextContent("000");
  });
});
