import React from 'react';

export const types = {
    text: {
        Component: ({fullFieldClassName, ...props}) => <input className={fullFieldClassName} {...props} />,
        className: "text-field"
    },
    textarea: {
        Component: ({fullFieldClassName, ...props}) => <textarea className={fullFieldClassName} {...props} />,
        className: "textarea-field"
    },
    radio: {
        Component: ({fullFieldClassName, ...props}) => <input className={fullFieldClassName} {...props}/>,
        className: "radio-field"
    },
    checkbox: {
        Component: ({fullFieldClassName, ...props}) => <input className={fullFieldClassName} {...props}/>,
        className: "checkbox-field"
    },
};
