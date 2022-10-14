import { Stack } from "../components";
import { renderField } from "./render-field";

/**
 * Builds a component from a field set array
 * @param {array} fieldSets array of fieldSets
 * @param {function} onChange change event callback
 * @param {string} formId id of the form
 * @param {function} renderFieldSet function to render fieldSet
 * @param {JSX.Element} WrapperComponent component to wrap fieldSets
 */
export const mapFieldSets = (
  fieldSets,
  onChange,
  formId,
  print,
  renderFieldSet = renderField,
  WrapperComponent = Stack
) => {
  return fieldSets.map((fieldSet, index) => {
    if (Array.isArray(fieldSet)) {
      return (
        <WrapperComponent key={index} horizontal gap="10px">
          {mapFieldSets(fieldSet, onChange, formId, print, renderFieldSet, WrapperComponent)}
        </WrapperComponent>
      );
    } else {
      return (
        <WrapperComponent key={index}>
          {renderFieldSet(fieldSet, onChange, formId, print)}
        </WrapperComponent>
      );
    }
  });
};
