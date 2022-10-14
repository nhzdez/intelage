import { cleanup, render, screen } from "@testing-library/react";
import { Error } from "./error";

beforeEach(cleanup);

describe("components/error", () => {
  it("should render component with message prop", () => {
    render(<Error message="error-message" />);

    expect(screen.getByText("error-message")).toBeInTheDocument();
  });
});
