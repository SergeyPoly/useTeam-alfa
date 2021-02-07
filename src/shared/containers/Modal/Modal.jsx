import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.scss';

const modalRoot = document.getElementById( 'modal-root' );

const Modal = ({ isOpen, toggleModal, children, minWidth, minHeight }) => {

    const element = document.createElement( 'div' );

    useEffect(() => {
        modalRoot.appendChild(element);
        return () => {
            modalRoot.removeChild(element);
        };
    }, [element]);

    return (
        isOpen && createPortal(
            <div
                className='modal-overlay'
                onClick={({target}) => {target.className === 'modal-overlay' && toggleModal()}}
            >
                <div className='modal-container' style={{minWidth, minHeight}}>
                    <span className='modal-close-btn' onClick={toggleModal}>&#9587;</span>
                    {children}
                </div>
            </div>,
            element
        )
    );
};

export default Modal;

Modal.defaultProps = {
    minWidth: '35%',
    minHeight: '300px'
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    minWidth: PropTypes.string,
    minHeight: PropTypes.string
};
