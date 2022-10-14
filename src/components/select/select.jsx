import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Error, Label } from "..";
import { selectFormField } from "../../reducers/forms/forms-slice";
import { Select as StyledSelect } from "./select.styled";

export const Select = (props) => {
  const {
    formId,
    id,
    label,
    options,
    placeholder,
    onChange,
    required,
    ...otherProps
  } = props;

  const { error, value } = useSelector(selectFormField(formId, id));

  return (
    <>
      <Label
        id={id}
        placeholder={placeholder}
        label={label}
        required={required}
      />
      <StyledSelect id={id} onChange={onChange} value={value ?? ""} {...otherProps}>
        <option value=""></option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </StyledSelect>
      {error && <Error message={error} />}
    </>
  );
};

Select.propTypes = {
  formId: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Select.defaultProps = {};
