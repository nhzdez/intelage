import { generateLabelText } from "./generate-label-text";

describe("utils/generateLabelText", () => {
  describe("use placeholder", () => {
    it("capitalize first letter only", () => {
      expect(generateLabelText("id", "placeHolder")).toBe("PlaceHolder");
    });
  });

  describe("use id", () => {
    it("camelCase", () => {
      expect(generateLabelText("helloWorld")).toBe("Hello World");
    });

    it("dash", () => {
      expect(generateLabelText("hello-world")).toBe("Hello world");
    });

    it("required", () => {
      expect(generateLabelText("id", undefined, true)).toBe("Id *");
    });
  });

  it("required", () => {
    expect(generateLabelText("id", "placeHolder", true)).toBe("PlaceHolder *");
  });

  it("null", () => {
    expect(generateLabelText()).toBe(null);
  });
});
