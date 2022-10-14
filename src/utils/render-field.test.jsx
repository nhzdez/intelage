import { Select, Text, Textarea } from "../components";
import { renderField } from "./render-field";

describe("utils/renderField", () => {
  const baseProps = {
    "data-testid": "component",
    formId: "000",
    id: "component-id",
    onChange: () => {},
  };

  it("renders Text", () => {
    expect(renderField({ ...baseProps, type: "text" })).toEqual(
      <Text {...baseProps} />
    );
  });

  it("renders Select", () => {
    expect(renderField({ ...baseProps, type: "select", options: [] })).toEqual(
      <Select {...{ ...baseProps, options: [] }} />
    );
  });

  it("renders Textarea", () => {
    expect(renderField({ ...baseProps, type: "textarea" })).toEqual(
      <Textarea {...baseProps} />
    );
  });

  it("renders Printable Text", () => {
    expect(renderField({ ...baseProps, type: "text" }, () => {}, "000", true)).toEqual(
      <Text {...baseProps} disabled />
    );
  });

  it("renders null", () => {
    expect(renderField({ ...baseProps, type: "number" })).toEqual(null);
  });
});
