import React from 'react';

const Modal = ({
    isOpen,
    closeModal
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div style={{backgroundColor: 'red', height: '200px', width: '200px'}}
        >
            <button onClick={closeModal}>close</button>
        </div>
    )
}

export default Modal;