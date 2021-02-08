import React from 'react'
import { useField } from 'formik';
import Select from 'react-select'
import PropTypes from 'prop-types';

import './CustomSelectField.scss'
import { selectStyles } from './styles'

export const CustomSelectField = ({ label, additionalLabelClass, additionalContainerClass, ...props}) => {
    const { options } = props;
    const [ field, , helpers ] = useField(props);
    const { setValue } = helpers;
    const fullLabelClassName = `select-label ${additionalLabelClass}`;
    const fullContainerClassName = `$select-container ${additionalContainerClass}`;

    const selectLabel = label ?
        <label className={ fullLabelClassName }>{label}</label> :
        null;

    return (
        <div className={fullContainerClassName}>
            {selectLabel}
            <Select
                {...field}
                {...props}
                styles={selectStyles}
                value={(options.find(option => option.value === field.value) || '')}
                onChange={({value}) => setValue(value)}
            />
        </div>
    );
};

CustomSelectField.defaultProps = {
    label: '',
    additionalLabelClass: '',
    additionalContainerClass: '',
};

CustomSelectField.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired,
    ).isRequired,
    additionalLabelClass: PropTypes.string,
    additionalContainerClass: PropTypes.string,
    label: PropTypes.string,
};
