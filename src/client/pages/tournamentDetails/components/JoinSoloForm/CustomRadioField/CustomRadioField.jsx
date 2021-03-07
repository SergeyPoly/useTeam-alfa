import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import styles from './CustomRadioField.module.scss'
import { useDispatch } from 'react-redux';
import { setSoloDiscount } from '../../../reducers/tournamentDetailsReducer';

const CustomRadioField = ({ label, ...props }) => {
    const [ field , , helpers ] = useField(props);
    const dispatch = useDispatch();

    const { setValue } = helpers;
    return (
        <div className={styles.radio__container}>
            <input className={styles.radio__field} id={label} {...field} {...helpers} {...props} onChange={
                (event) => {
                    const currentValue = event.currentTarget.value;
                    currentValue === 'Core' ? dispatch(setSoloDiscount('0')) : dispatch(setSoloDiscount('10'));
                    setValue(currentValue);
                }
            } />
            <label className={styles.radio__label} htmlFor={label}>{label}</label>
        </div>
    );
};

export default CustomRadioField;

