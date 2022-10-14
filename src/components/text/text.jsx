import PropTypes from "prop-types";
import { Text as StyledText } from "./text.styled";
import { useMemo } from "react";
import { Error, Label } from "..";
import { useSelector } from "react-redux";
import { selectFormField } from "../../reducers/forms/forms-slice";

export const Text = (props) => {
  const {
    formId,
    id,
    label,
    placeholder,
    required,
    onChange,
    disabled,
    ...otherProps
  } = props;

  const { error, value } = useSelector(selectFormField(formId, id));

  const inputType = useMemo(() => {
    const idType = id.toLowerCase();
    if (idType === "email") {
      return { type: "email" };
    } else if (idType === "password") {
      return { type: "password" };
    } else if (idType === "phone") {
      return { type: "tel" };
    } else {
      return { type: "text" };
    }
  }, [id]);

  return (
    <>
      <Label
        id={id}
        placeholder={placeholder}
        label={label}
        required={required}
      />
      <StyledText
        {...inputType}
        id={id}
        placeholder={disabled ? "" : placeholder}
        required={required}
        onChange={onChange}
        value={value ?? ""}
        disabled={disabled}
        {...otherProps}
      />
      {error && <Error message={error} />}
    </>
  );
};

Text.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  formId: PropTypes.string,
};

Text.defaultProps = {};
