import React from "react";
import { act, cleanup, render, screen } from "@testing-library/react";
import { Dashboard } from "./Dashboard";

jest.mock("../../components", () => ({
  Form: (props) => {
    return (
      <div data-testid={props["data-testid"]}>
        <button
          onClick={() => {
            props.onSubmit();
          }}
        >
          Submit
        </button>
      </div>
    );
  },
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  const module = jest.requireActual("react-router-dom");
  return {
    ...module,
    useNavigate: () => mockNavigate,
  };
});

afterAll(cleanup);

describe("pages/dashboard", () => {
  it("renders dashboard with form", () => {
    render(<Dashboard />);
    expect(screen.getByTestId("form-000")).toBeInTheDocument();
  });

  it("onSubmit is called when clicked submit button", () => {
    render(<Dashboard />);
    act(() => {
      screen.getByText("Submit").click();
    });
    expect(mockNavigate).toHaveBeenCalledWith("/thankyou/000");
  });
});
