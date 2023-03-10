import React, { FC } from 'react';
import styles from './Button.module.scss'

interface ButtonProps{
    children? : any,
    formAuth?: (e: React.MouseEvent<HTMLButtonElement>) => void
}


const Button:FC<ButtonProps> = ({children, formAuth}) => {
    return (
        <button onClick={formAuth} className={`${styles.button} button`}>
            {children}
        </button>
    );
};

export default Button;