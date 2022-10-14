import { createAction, createSlice } from "@reduxjs/toolkit";

export const setFieldsAction = createAction("form/setFields");
export const updateFieldAction = createAction("form/updateFieldValue");

export const formsSlice = createSlice({
  name: "forms",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFieldsAction, (state, { payload }) => {
        const { id, fields } = payload;
        state[id] = fields;
      })
      .addCase(updateFieldAction, (state, { payload }) => {
        const {
          id: form_id,
          field: { id, ...content },
        } = payload;
        if (!(form_id in state)) {
          state[form_id] = {};
        }
        state[form_id][id] = content;
      });
  },
});

export const selectForm = (form_id) => (state) => state.forms[form_id];
export const selectFormField = (form_id, id) => (state) => {
  if (state.forms[form_id]) {
    return state.forms[form_id][id];
  } else {
    return { value: "" };
  }
};

export default formsSlice.reducer;
