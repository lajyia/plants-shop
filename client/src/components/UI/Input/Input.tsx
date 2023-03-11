import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import Eye from './images/eye.svg';
import OpenEye from './images/open-eye.svg';
import './Input.scss';


interface InputProps {
    placeholder?: string;
    type: string;
}

const Input: FC<InputProps> = ({ placeholder, type }) => {


    const [show, setShow] = useState<boolean>(false);

    const rootInputImageClasses = [styles.input_image];

    const focusPassword = () =>{
        if (type == "password"){

            rootInputImageClasses.push('visible');
        }
    }

    const showPassword = () => {
        setShow(true);
    }
    const unShowPassword = () => {
        setShow(false);
    }

    return (
        <div className={`${styles.body_input} modal-input`}>
            <input onFocus={focusPassword} type={show ? 'text' : type} placeholder={placeholder} className={`${styles.input} input`} />

            {type === 'password'
                ? <div>
                    {show
                        ? <img onClick={unShowPassword} className={rootInputImageClasses.join(' ')} src={OpenEye} alt="open eye" />
                        : <img onClick={showPassword} className={rootInputImageClasses.join(' ')} src={Eye} alt="eye" />
                    }
                </div>
                : <div></div>
            }

        </div>
    );
};

export default Input;