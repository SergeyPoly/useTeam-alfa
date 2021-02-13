import React from 'react';
import { useField } from 'formik';
import style from './Submit.module.scss';

const Submit = ({ label, ...props }) => {
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
      <input className={style.submit} {...field} {...props} />
      {errorElement}
    </>
  );
};

export default Submit;
