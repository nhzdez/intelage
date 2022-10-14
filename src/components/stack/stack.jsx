import PropTypes from "prop-types";
import { Stack as StyledStack } from "./stack.styled";

export const Stack = (props) => {
  const { horizontal, children, gap, ...otherProps } = props;
  return (
    <StyledStack horizontal={horizontal} gap={gap} {...otherProps}>
      {children}
    </StyledStack>
  );
};

Stack.propTypes = {
  horizontal: PropTypes.bool,
  gap: PropTypes.string,
};

Stack.defaultProps = {
  gap: "0",
};
