import { capitalizeString } from "./capitalize-string";

describe("utils/capitalizeString", () => {
  it("capitalize first letter", () => {
    expect(capitalizeString("hello")).toBe("Hello");
  });
});
