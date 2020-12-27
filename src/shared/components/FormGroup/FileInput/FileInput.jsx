import React from 'react';
import { useField } from 'formik';
import style from './FileInput.module.scss';

const FileInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorElement =
    meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null;
  console.log(style);
  return (
    <>
      <label className={style.fileInputLabel}>
        +
        <input type="file" className={style.fileInput} {...field} {...props} />
      </label>

      {errorElement}
    </>
  );
};

export default FileInput;
