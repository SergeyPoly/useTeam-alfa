import React from 'react'
import { useField } from 'formik';
import PropTypes from 'prop-types';

import './CustomFileField.scss'

const CustomFileField = ({ additionalContainerClass, ...props}) => {
    const [ , , helpers ] = useField(props);
    const { setValue } = helpers;
    const fullContainerClassName = `file-container ${additionalContainerClass}`;

    return (
        <div className={fullContainerClassName}>
            <label className="file-label">
                {String.fromCharCode(9535)}
                <input
                    className='file-field'
                    type='file'
                    {...props}
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setValue(file)
                    }}
                />
            </label>
        </div>
    );
};

export default CustomFileField;

CustomFileField.defaultProps = {
    additionalContainerClass: '',
};

CustomFileField.propTypes = {
    name: PropTypes.string.isRequired,
    additionalContainerClass: PropTypes.string,
};
