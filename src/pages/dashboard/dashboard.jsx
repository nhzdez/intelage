import { Form } from "../../components";
import fieldSets from "../../mocks/field-sets.json";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const formId = "000";

  return (
    <div>
      <Form
        id={formId}
        fieldSets={fieldSets}
        onSubmit={() => navigate(`/thankyou/${formId}`)}
        data-testid={`form-${formId}`}
      />
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};
