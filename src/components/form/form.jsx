import PropTypes from "prop-types";
import { useCallback, useEffect, useMemo } from "react";
import { Form as StackedForm } from "./form.styled";
import { Button, Stack } from "..";
import { mapFieldSets, mapFieldSetsToDict, validateField } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  selectForm,
  setFieldsAction,
  updateFieldAction,
} from "../../reducers/forms/forms-slice";

export const Form = (props) => {
  const { id: form_id, onSubmit, fieldSets, print, ...otherProps } = props;

  const dispatch = useDispatch();
  const formData = useSelector(selectForm(form_id));

  const fields = useMemo(() => mapFieldSetsToDict(fieldSets), [fieldSets]);

  const validate = useCallback((fields, formData) => {
    let hasError = false;
    const newFormData = {};
    Object.keys(formData).forEach((id) => {
      const error = validateField(fields[id], formData[id].value);
      newFormData[id] = {
        ...formData[id],
        error,
      };
      if (error) hasError = true;
    });
    return hasError ? newFormData : null;
  }, []);

  useEffect(() => {
    if (!print) {
      const initialFields = {};
      Object.keys(fields).forEach((field) => {
        initialFields[field] = { value: "" };
      });
      dispatch(setFieldsAction({ id: form_id, fields: initialFields }));
    }
  }, [dispatch, fieldSets, fields, form_id, print]);

  const handleSubmit = useCallback(
    (event) => {
      const newFormData = validate(fields, formData);
      if (newFormData) {
        event.preventDefault();
        dispatch(setFieldsAction({ id: form_id, fields: newFormData }));
      } else {
        onSubmit(formData);
      }
    },
    [validate, fields, formData, dispatch, form_id, onSubmit]
  );

  const handleChange = useCallback(
    (event) => {
      const { id, value } = event.target;
      dispatch(updateFieldAction({ id: form_id, field: { id, value } }));
    },
    [dispatch, form_id]
  );

  return (
    <StackedForm {...otherProps}>
      <Stack gap="14px">
        {mapFieldSets(fieldSets, handleChange, form_id, print)}
        {!print && <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>}
      </Stack>
    </StackedForm>
  );
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  fieldSets: PropTypes.array.isRequired,
  print: PropTypes.bool,
};

Form.defaultProps = {};
