import { mapFieldSets } from "./map-field-sets";

const mockFieldSets = [
  [
    {
      id: "firstName",
      placeholder: "First name",
      required: true,
      type: "text",
    },
    {
      id: "lastName",
      placeholder: "Last name",
      required: true,
      type: "text",
    },
  ],
  {
    id: "Email",
    required: true,
    type: "text",
  },
];
const renderFieldSet = ({ id }) => {
  return <div>{id}</div>;
};
const wrapper = ({ children }) => <div>{children}</div>;

describe("utils/mapFieldSets", () => {
  it("builds correct element tree", () => {
    expect(
      mapFieldSets(mockFieldSets, () => {}, "000", renderFieldSet, wrapper)
    ).toHaveLength(2);
  });

  it("builds correct element tree with default values", () => {
    expect(
      mapFieldSets(mockFieldSets, () => {}, "000")
    ).toHaveLength(2);
  });
});
