import { cleanup, render, screen } from "../../mocks/storeWrapper";
import { Textarea } from "./textarea";

beforeEach(cleanup);

describe("components/textarea", () => {
  const props = {
    formId: "000",
    id: "reason",
    placeholder: "Describe why you are a good fit for the job you are applying for.",
    onChange: () => {},
    "data-testid": "textarea",
  };

  it("should render component", async () => {
    render(<Textarea {...props} />);

    expect(screen.getByTestId("textarea")).toBeInTheDocument();
  });

  it("should render component with error", async () => {
    render(<Textarea {...{ ...props, formId: "001" }} />);

    expect(screen.getByTestId("textarea")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should render component with required prop", async () => {
    render(<Textarea {...{ ...props }} required />);

    expect(screen.getByText("Describe why you are a good fit for the job you are applying for. *")).toBeInTheDocument();
  });
});
