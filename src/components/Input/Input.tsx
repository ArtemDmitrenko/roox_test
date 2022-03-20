/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field } from 'react-final-form';
import './input.scss';
import { InputProps } from '../../types/userCard';

function Input(props: InputProps) {
  const {
    inputData: {
      fieldName, type = 'text', placeholderValue, validator, readOnly, required = true, textarea,
    },
  } = props;

  const setInputClasses = (touched: boolean | undefined, error: string) => (touched && error ? 'input__field input__field_not-valid' : 'input__field');
  const setTextareaClasses = (touched: boolean | undefined, error: string) => (touched && error ? 'textarea__field textarea__field_not-valid' : 'textarea__field');

  return textarea ? (
    <Field name={fieldName} type={type} placeholder={placeholderValue}>
      {({
        input, meta: { touched, error },
      }) => (
        <div className="textarea">
          <label className="textarea__label">
            {placeholderValue}
            <textarea
              className={setTextareaClasses(touched, error)}
              {...input}
              readOnly={readOnly}
              required={required}
            />
          </label>
        </div>
      )}
    </Field>
  ) : (
    <Field name={fieldName} type={type} placeholder={placeholderValue} validate={validator}>
      {({
        input, meta: { touched, error },
      }) => (
        <div className="input">
          <label className="input__label">
            {placeholderValue}
            <input
              className={setInputClasses(touched, error)}
              {...input}
              readOnly={readOnly}
              required={required}
            />
          </label>
        </div>
      )}
    </Field>
  );
}

export default Input;
