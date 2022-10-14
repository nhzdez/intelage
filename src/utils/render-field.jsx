import { Text, Select, Textarea } from "../components";

/**
 * Map fieldset into Component
 * @param {object} fieldSet field info object
 * @param {function} onChange change event callback
 * @param {string} formId id of the form
 */
export const renderField = (fieldSet, onChange, formId, print) => {
  const { type, ...otherProps } = fieldSet;
  let Component = null;
  if (print) {
    Component = Text;
  } else {
    switch (type) {
      case "text":
        Component = Text;
        break;
      case "select":
        Component = Select;
        break;
      case "textarea":
        Component = Textarea;
        break;
      default:
        Component = null;
    }
  }
  return Component ? (
    <Component onChange={onChange} formId={formId} {...otherProps} disabled={print} />
  ) : null;
};
