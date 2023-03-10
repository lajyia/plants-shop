import React, { FC } from 'react';
import styles from './Modal.module.scss';


interface ModalProps {
    children: any,
    onClickBody?: () => void,
    onClickContainer?: (e: React.MouseEvent<HTMLDivElement>) => void,
}

const Modal: FC<ModalProps> = ({ children, onClickBody, onClickContainer }) => {
    return (
        <div onClick={onClickBody} className={`${styles.modal} modal`}>
            <div className={`${styles.modal} modal-body`}>
                <div onClick={onClickContainer} className={`${styles.modal__container} modal-container`}>
                    {children}
                </div>
            </div>
        </div>

    );
};

export default Modal;