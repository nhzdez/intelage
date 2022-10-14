import { cleanup, render, screen } from "../../mocks/storeWrapper";
import { Select } from "./select";

beforeEach(cleanup);

describe("components/select", () => {
  const props = {
    formId: "000",
    id: "jobTitle",
    options: [
      "Engineer - lead",
      "Engineer - mid level",
      "Engineer - junion",
      "Engineer - front end focused",
      "Engineer - backend focused",
      "Engineer - full stack",
    ],
    placeholder: "Please select job title",
    onChange: () => {},
    "data-testid": "select",
  };

  it("should render component", async () => {
    render(<Select {...props} />);

    expect(screen.getByTestId("select")).toBeInTheDocument();
  });

  it("should render component with error", async () => {
    render(<Select {...{ ...props, formId: "001" }} />);

    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should render component with required prop", async () => {
    render(<Select {...{ ...props }} required />);

    expect(screen.getByText("Please select job title *")).toBeInTheDocument();
  });
});
