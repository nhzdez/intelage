import { capitalizeString } from "./capitalize-string";

/**
 * Returns label text based on id and placeholder.
 * @param {string} id id of the element
 * @param {string} placeholder placeholder of the element
 * @param {boolean} required if this field is required
 */
export const generateLabelText = (id, placeholder, required) => {
  if (placeholder) {
    return `${capitalizeString(placeholder)}${required ? " *" : ""}`;
  } else if (id) {
    const capitalized = capitalizeString(id)
      .split(/(?=[A-Z]|[-])/)
      .join(" ")
      .replace("-", "");
    return `${capitalized}${required ? " *" : ""}`;
  } else {
    return null;
  }
};
