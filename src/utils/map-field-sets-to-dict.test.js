import { mapFieldSetsToDict } from "./map-field-sets-to-dict";

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

describe("utils/mapFieldSetsToDict", () => {
  it("builds correct fields dict", () => {
    expect(mapFieldSetsToDict(mockFieldSets)).toStrictEqual({
      Email: { id: "Email", required: true, type: "text" },
      firstName: {
        id: "firstName",
        placeholder: "First name",
        required: true,
        type: "text",
      },
      lastName: {
        id: "lastName",
        placeholder: "Last name",
        required: true,
        type: "text",
      },
    });
  });
});
