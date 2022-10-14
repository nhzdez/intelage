import { validateEmail } from "./valid-email";

describe("utils/validateEmail", () => {
  it("false if not email", () => {
    expect(validateEmail("hello")).toBe(false);
  });

  it("true if email", () => {
    expect(validateEmail("hello@hello.com")).toBe(true);
  });
});
