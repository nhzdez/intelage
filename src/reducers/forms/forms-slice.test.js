import store from "../../app/store";
import {
  selectForm,
  selectFormField,
  setFieldsAction,
  updateFieldAction,
} from "./forms-slice";

describe("reducers/forms", () => {
  it("should set field values", async () => {
    const result = await store.dispatch(
      setFieldsAction({
        id: "000",
        fields: { name: { value: "" }, email: { value: "" } },
      })
    );

    expect(result.payload).toStrictEqual({
      id: "000",
      fields: { name: { value: "" }, email: { value: "" } },
    });

    const state = store.getState().forms;
    expect(state).toStrictEqual({
      "000": { name: { value: "" }, email: { value: "" } },
    });
  });

  it("should update field action", async () => {
    await store.dispatch(
      setFieldsAction({
        id: "000",
        fields: { name: { value: "" }, email: { value: "" } },
      })
    );

    const result = await store.dispatch(
      updateFieldAction({
        id: "000",
        field: { id: "name", value: "123" },
      })
    );

    expect(result.payload).toStrictEqual({
      id: "000",
      field: { id: "name", value: "123" },
    });

    const state = store.getState().forms;
    expect(state).toStrictEqual({
      "000": { name: { value: "123" }, email: { value: "" } },
    });
  });

  it("should update field action (do not exist)", async () => {
    await store.dispatch(
      setFieldsAction({
        id: "000",
        fields: { name: { value: "" }, email: { value: "" } },
      })
    );

    const result = await store.dispatch(
      updateFieldAction({
        id: "001",
        field: { id: "name", value: "123" },
      })
    );

    expect(result.payload).toStrictEqual({
      id: "001",
      field: { id: "name", value: "123" },
    });

    const state = store.getState().forms;
    expect(state).toStrictEqual({
      "000": { name: { value: "" }, email: { value: "" } },
      "001": { name: { value: "123" } },
    });
  });

  it("selectFormField", async () => {
    await store.dispatch(
      setFieldsAction({
        id: "000",
        fields: { name: { value: "123" }, email: { value: "" } },
      })
    );

    const state = store.getState();
    expect(selectFormField("000", "name")(state)).toStrictEqual({
      value: "123",
    });
    expect(selectFormField("002", "name")(state)).toStrictEqual({ value: "" });
  });

  it("selectForm", async () => {
    await store.dispatch(
      setFieldsAction({
        id: "000",
        fields: { name: { value: "123" }, email: { value: "" } },
      })
    );

    const state = store.getState();
    expect(selectForm("000")(state)).toStrictEqual({
      name: { value: "123" },
      email: { value: "" },
    });
  });
});
