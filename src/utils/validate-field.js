import { validateEmail } from "./valid-email";

/**
 * check if the field is valid
 * @param {object} field field object
 * @param {object} value field value
 * @returns {string | null} null if valid, error message if not
 */
export const validateField = (field, value) => {
  const idType = field.id.toLowerCase();
  if (field.required && !value) {
    return "This field is required";
  } else if (
    (field.type === "email" || idType === "email") &&
    !validateEmail(value)
  ) {
    return "Please enter a valid email";
  } else if (field.type === "password" || idType === "password") {
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    } else if (!value.match(/[a-z]/)) {
      return "Password must contain at least one lowercase letter";
    } else if (!value.match(/[A-Z]/)) {
      return "Password must contain at least one uppercase letter";
    } else {
      return null;
    }
  } else if (
    (field.type === "phone" || idType === "phone") &&
    !value.match(/^\d{3}-\d{3}-\d{4}$/)
  ) {
    if (value.length !== 0) {
      return "Please enter a valid phone number";
    } else {
      return null;
    }
  }
  return null;
};
