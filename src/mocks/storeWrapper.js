import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "../app/reducer";

const mockState = {
  forms: {
    "000": {
      password: {
        id: "password",
      },
      firstName: {
        id: "firstName",
      },
      Email: {
        id: "Email",
      },
      phone: {
        id: "phone",
      },
      jobTitle: {
        id: "jobTitle",
      },
      reason: {
        id: "reason",
        placeholder:
          "Describe why you are a good fit for the job you are applying for.",
        type: "textarea",
      },
    },
    "001": {
      phone: {
        id: "phone",
        error: "This field is required",
      },
      jobTitle: {
        id: "jobTitle",
        error: "This field is required",
      },
      reason: {
        id: "reason",
        error: "This field is required",
      }
    },
  },
};

const render = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer,
      preloadedState: {
        ...initialState,
        ...mockState,
      },
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    renderWrapper: rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
  };
};

export * from "@testing-library/react";
export { render };
