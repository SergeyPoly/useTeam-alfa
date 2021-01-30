import React from 'react'
import { useField } from 'formik';
import Select from 'react-select'
import PropTypes from 'prop-types';

import './CustomSelectField.scss'

export const CustomSelectField = ({ label, additionalLabelClass, additionalContainerClass, ...props}) => {
    const { options } = props;
    const [ field, , helpers ] = useField(props);
    const { setValue } = helpers;
    const fullLabelClassName = `select-label ${additionalLabelClass}`;
    const fullContainerClassName = `$select-container ${additionalContainerClass}`;

    const selectLabel = label ?
        <label className={ fullLabelClassName }>{label}</label> :
        null;

    const customStyles = {
        control: (styles) => ({
            ...styles,
            boxSizing: 'border-box',
            width: '100%',
            backgroundColor: '#252A48',
            borderRadius: '5px',
            border: 'none',
            fontSize: '15px',
            fontWeight: 'normal',
        }),
        singleValue: (styles) => ({
            ...styles,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '0.2px',
            fontSize: '15px',
            color: 'white',
            fontWeight: 'normal',
        }),
        menuList: (styles) => ({
            ...styles,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '0.2px',
            fontSize: '15px',
            color: 'black',
            fontWeight: 'normal',
        }),
    };

    return (
        <div className={fullContainerClassName}>
            {selectLabel}
            <Select
                {...field}
                {...props}
                styles={customStyles}
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
