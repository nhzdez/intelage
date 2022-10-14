import { Form } from "../../components";
import fieldSets from "../../mocks/field-sets.json";
import { useParams } from "react-router-dom";

export const Thankyou = () => {
  const params = useParams()
  const formId = params.id;

  return (
    <div>
      <Form
        id={formId}
        fieldSets={fieldSets}
        data-testid={`print-${formId}`}
        print
      />
    </div>
  );
};

Thankyou.propTypes = {};

Thankyou.defaultProps = {};
