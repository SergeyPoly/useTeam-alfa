import React from 'react';
import { useField } from 'formik';

const Checkbox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const labelElement = label ? (
    <label className="label" htmlFor={props.id || props.name}>
      {label}
    </label>
  ) : null;
  const errorElement =
    meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null;
  return (
    <>
      {labelElement}
      <input type="checkbox" {...field} {...props} />
      {errorElement}
    </>
  );
};

export default Checkbox;
