import PropTypes from "prop-types";
import { Button as StyledButton } from "./button.styled";

export const Button = (props) => {
  const { type, children, ...otherProps } = props;
  return (
    <StyledButton type={type} tabIndex="0" {...otherProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};

Button.defaultProps = {
  type: "submit",
};
