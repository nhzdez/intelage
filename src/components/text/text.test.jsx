import { cleanup, render, screen } from "../../mocks/storeWrapper";
import { Text } from "./text";

beforeEach(cleanup);

describe("components/text", () => {
  const normalProps = {
    formId: "000",
    id: "firstName",
    placeholder: "First name",
    onChange: () => {},
    "data-testid": "text",
  };

  const passwordProps = {
    formId: "000",
    id: "password",
    onChange: () => {},
    "data-testid": "text",
  };

  const emailProps = {
    formId: "000",
    id: "Email",
    onChange: () => {},
    "data-testid": "text",
  };

  const phoneProps = {
    formId: "000",
    id: "phone",
    onChange: () => {},
    "data-testid": "text",
  };

  it("should render normal input", async () => {
    render(<Text {...normalProps} />);

    expect(screen.getByTestId("text")).toHaveAttribute("type", "text");
  });

  it("should render password input", async () => {
    render(<Text {...passwordProps} />);

    expect(screen.getByTestId("text")).toHaveAttribute("type", "password");
  });

  it("should render email input", async () => {
    render(<Text {...emailProps} />);

    expect(screen.getByTestId("text")).toHaveAttribute("type", "email");
  });

  it("should render phone input", async () => {
    render(<Text {...phoneProps} />);

    expect(screen.getByTestId("text")).toHaveAttribute("type", "tel");
  });

  it("should render component with error", async () => {
    render(<Text {...{ ...phoneProps, formId: "001" }} />);

    expect(screen.getByTestId("text")).toBeInTheDocument();
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should render component with required prop", async () => {
    render(<Text {...{ ...normalProps }} required />);

    expect(screen.getByText("First name *")).toBeInTheDocument();
  });

  it("should render component with no placeholder if disabled", async () => {
    render(<Text {...{ ...normalProps }} required disabled />);

    expect(screen.getByTestId("text")).toHaveAttribute("disabled");
  });
});
