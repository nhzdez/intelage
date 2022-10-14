import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Error, Label } from "..";
import { selectFormField } from "../../reducers/forms/forms-slice";
import { Textarea as StyledTextarea } from "./textarea.styled";

export const Textarea = (props) => {
  const { formId, id, label, placeholder, onChange, required, ...otherProps } =
    props;

  const { error, value } = useSelector(selectFormField(formId, id));

  return (
    <>
      <Label
        id={id}
        placeholder={placeholder}
        label={label}
        required={required}
      />
      <StyledTextarea
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value ?? ""}
        {...otherProps}
      />
      {error && <Error message={error} />}
    </>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  formId: PropTypes.string,
};

Textarea.defaultProps = {};
