import PropTypes from "prop-types";
import { generateLabelText } from "../../utils";
import { Label as StyledLabel } from "./label.styled";

export const Label = (props) => {
  const { id, label, placeholder, required, ...otherProps } = props;
  const labelText = label ?? generateLabelText(id, placeholder, required);

  return (
    <StyledLabel htmlFor={id} {...otherProps}>
      {labelText}
    </StyledLabel>
  );
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Label.defaultProps = {};
