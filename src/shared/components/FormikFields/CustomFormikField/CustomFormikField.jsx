import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { types } from './types';

import './CustomFormikField.scss'

const CustomFormikField = ({
                               label,
                               additionalFieldClass,
                               additionalLabelClass,
                               additionalContainerClass,
                               ...props
                           }) => {
    const { type } = props;
    const [ field, , helpers ] = useField(props);
    const { className, Component } = types[type];
    const fullContainerClassName = `${type}-container ${additionalContainerClass}`;
    const fullFieldClassName = `${className} ${additionalFieldClass}`;
    const fullLabelClassName = `${type}-label ${additionalLabelClass}`;
    const fieldLabel = label ?
        <label className={ fullLabelClassName } htmlFor={label}>{label}</label> :
        null;

    return (
        <div className={fullContainerClassName}>
            {type !== 'radio' && type !== 'checkbox' ? fieldLabel : null}
            <Component {...props} {...field} {...helpers} id={label} fullFieldClassName={fullFieldClassName} />
            {type === 'radio' || type === 'checkbox' ? fieldLabel : null}
        </div>
    );
};

export default CustomFormikField;

CustomFormikField.defaultProps = {
    label: '',
    additionalFieldClass: '',
    additionalLabelClass: '',
    additionalContainerClass: '',
};

CustomFormikField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'text',
        'textarea',
        'radio',
        'checkbox',
    ]).isRequired,
    additionalFieldClass: PropTypes.string,
    additionalLabelClass: PropTypes.string,
    additionalContainerClass: PropTypes.string,
    label: PropTypes.string, //required for checkbox and radio
};
