import React from 'react';
import cl from 'classnames'
import style from './index.module.scss'
import Title from '../Title';
import Button from '../Button';
import EllipseSmall from '../EllipseSmall';

const Modal = ({
    isOpen,
    closeModal,
    className,
    title,
    text
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={cl(className, style.modalWrapper)}>
            <div className={style.modal}>
                <button onClick={closeModal} className={style.modalClose}></button> 
                <div className={style.modalDecor}></div>
                <Title className={style.modalTitle}>{title}</Title>
                <Title type="small" className={style.modalText}>{text}</Title>
                <form name="modalForm" 
                      method="post" 
                      action="#" 
                      className={style.modalForm}>
                    <input type='email' 
                           size="40" 
                           placeholder='Ваш email' 
                           required
                           className={style.modalForm_input}
                    />
                <Button className={style.modalForm_btn}>Оплатить</Button>
                </form>
             </div>   
        </div>  
    )
}

export default Modal;