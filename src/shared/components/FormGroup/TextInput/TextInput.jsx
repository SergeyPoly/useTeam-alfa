import React from 'react';
import { useField } from 'formik';
import style from './TextInput.module.scss';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const labelElement = label ? (
    <label className={style.textInputLabel} htmlFor={props.id || props.name}>
      {label}
    </label>
  ) : null;
  const errorElement =
    meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null;
  return (
    <div>
      {labelElement}
      <input className={style.textInput} {...field} {...props} />
      {errorElement}
    </div>
  );
};

export default TextInput;
