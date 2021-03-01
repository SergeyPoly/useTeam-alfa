import React from 'react';
import { useField } from 'formik';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
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
      <input type="textarea" className="text-area" {...field} {...props} />
      {errorElement}
    </>
  );
};

export default TextArea;
