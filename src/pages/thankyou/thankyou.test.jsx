import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Thankyou } from "./thankyou";

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

jest.mock("react-router-dom", () => {
  const module = jest.requireActual("react-router-dom");
  return {
    ...module,
    useParams: () => ({ id: "000" }),
  };
});

afterAll(cleanup);

describe("pages/thankyou", () => {
  it("renders thankyou with print form", () => {
    render(<Thankyou />);
    expect(screen.getByTestId("print-000")).toBeInTheDocument();
  });
});
