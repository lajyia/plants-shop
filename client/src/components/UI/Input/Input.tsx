import React, { FC } from 'react';
import styles from './Input.module.scss';
import Eye from './images/eye.svg';
import OpenEye from './images/open-eye.svg';


interface InputProps {
    placeholder?: string;
    type: string;
    focus?: (focus: boolean) => void;
    isFocus?: boolean;
    show?: boolean;
    setShow?: (show: boolean) => void;
}

const Input: FC<InputProps> = ({ placeholder, type, focus, isFocus, show, setShow }) => {


    const focusOnPassword = () => {
        if (focus) {
            focus(true);
        }
    }


    const rootInputClasses = [styles.input];

    if (isFocus) {
        rootInputClasses.push(styles.input_focus);
    }

    const showPassword = () =>{
        if(setShow){
            setShow(true);
        }
        
    }
    const unShowPassword = () =>{
        if (setShow){
            setShow(false);
        }
    }

    const focusInput = () =>{
        if (focus){
            focusOnPassword();
        }
        
    }

    return (
        <div onClick={focusOnPassword} className={`${styles.body_input} modal-input`}>
            <input onFocus={focusInput} type={show ? 'text' : type} placeholder={placeholder} className={rootInputClasses.join(' ')} />
            {type == 'password'
                ? <div>
                    {show
                        ? <img onClick={unShowPassword} className={isFocus ? styles.input_image_visible : styles.input_image} src={OpenEye} alt="open eye"/>
                        : <img onClick={showPassword} className={isFocus ? styles.input_image_visible : styles.input_image} src={Eye} alt="eye" />
                    }
                    
                </div>
                
                : <div></div>
            }

        </div>
    );
};

export default Input;