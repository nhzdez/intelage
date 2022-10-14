import PropTypes from "prop-types";
import { Error as StyledError } from "./error.styled";

export const Error = (props) => {
  const { message } = props;

  return (
    <StyledError>
      {message}
    </StyledError>
  );
};

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {};
