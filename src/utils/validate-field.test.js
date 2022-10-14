import { validateField } from "./validate-field";

describe("utils/validateField", () => {
  describe("required", () => {
    it("fail", () => {
      expect(validateField({ id: "name", required: true }, "")).toBe(
        "This field is required"
      );
    });
    it("pass", () => {
      expect(validateField({ id: "name" }, "")).toBeNull();
    });
  });

  describe("email", () => {
    it("fail", () => {
      expect(validateField({ id: "Email" }, "hello")).toBe(
        "Please enter a valid email"
      );
    });
    it("pass", () => {
      expect(validateField({ id: "Email" }, "hello@hello.com")).toBeNull();
    });
  });

  describe("password", () => {
    it("less than 8", () => {
      expect(validateField({ id: "password" }, "hello")).toBe(
        "Password must be at least 8 characters"
      );
    });

    it("no lowercase", () => {
      expect(validateField({ id: "password" }, "HELLOWORLD")).toBe(
        "Password must contain at least one lowercase letter"
      );
    });

    it("no uppercase", () => {
      expect(validateField({ id: "password" }, "hello world")).toBe(
        "Password must contain at least one uppercase letter"
      );
    });

    it("pass", () => {
      expect(validateField({ id: "password" }, "hello@1A.com")).toBeNull();
    });
  });

  describe("phone", () => {
    it("fail", () => {
      expect(validateField({ id: "phone" }, "123-123-123")).toBe(
        "Please enter a valid phone number"
      );
    });
    it("pass", () => {
      expect(validateField({ id: "phone" }, "123-123-1234")).toBeNull();
    });
  });
});
