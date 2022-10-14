import {
  act,
  cleanup,
  render,
  screen,
  queryByAttribute,
  fireEvent,
} from "../../mocks/storeWrapper";
// import { cleanup, render, screen } from "@testing-library/react";
import { Form } from "./form";

const getById = queryByAttribute.bind(null, "id");

const fieldSets = [
  [
    {
      id: "firstName",
      placeholder: "First name",
      required: true,
      type: "text",
    },
    {
      id: "phone",
      placeholder: "Phone number",
      type: "text",
    },
  ],
  {
    id: "Email",
    required: true,
    type: "text",
  },
];
beforeEach(cleanup);

describe("components/form", () => {
  it("should render component", () => {
    render(<Form id="000" fieldSets={fieldSets} />);

    expect(screen.getByText("First name *")).toBeInTheDocument();
    expect(screen.getByText("Phone number")).toBeInTheDocument();
    expect(screen.getByText("Email *")).toBeInTheDocument();
  });

  it("should render print view", () => {
    render(
      <Form id="000" fieldSets={fieldSets} print data-testid="view-000" />
    );

    const body = screen.getByTestId("view-000");

    expect(getById(body, "firstName")).toHaveAttribute("disabled", "");
    expect(getById(body, "phone")).toHaveAttribute("disabled", "");
    expect(getById(body, "Email")).toHaveAttribute("disabled", "");
  });

  describe("should validate before submit", () => {
    it("fail", async () => {
      render(<Form id="000" fieldSets={fieldSets} />);

      const submit = screen.getByText("Submit");
      act(() => {
        submit.click();
      });

      expect(screen.getAllByText("This field is required")).toHaveLength(2);
    });

    it("pass", async () => {
      const onSubmit = jest.fn();
      render(
        <Form
          id="000"
          fieldSets={fieldSets}
          data-testid="form-000"
          onSubmit={onSubmit}
        />
      );

      const body = screen.getByTestId("form-000");
      const submit = screen.getByText("Submit");

      fireEvent.change(getById(body, "firstName"), {
        target: { value: "Tada" },
      });
      fireEvent.change(getById(body, "Email"), {
        target: { value: "Tada@hello.com" },
      });

      act(() => {
        submit.click();
      });

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
