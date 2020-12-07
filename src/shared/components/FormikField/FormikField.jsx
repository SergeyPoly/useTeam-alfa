import React from "react";
import {useField} from "formik";

import './FormikField.scss'

export const FormikField = ({ label, ...props }) => {
    const fieldType = props.type;
    const [field] = useField(props);
    const labelField = label ?
        <label className={`form-${fieldType}-label`} htmlFor={label}>{label}</label> :
        null;

    return (
        <div className={`form-${fieldType}-container`}>
            {fieldType === 'text' ? labelField : null}
            <input className={`form-${fieldType}-field`} id={label} {...field} {...props} />
            {fieldType === 'radio' ? labelField : null}
        </div>
    );
};
