import React, { FC, useState } from 'react';
import styles from './Input.module.scss';
import Eye from './images/eye.svg';
import OpenEye from './images/open-eye.svg';
import './Input.scss';


interface InputProps {
    placeholder?: string;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ placeholder, type, onChange }) => {


    const [show, setShow] = useState<boolean>(false);
    const [isFocusPassword, setIsFocusPassword] = useState<boolean>(false);



    const showPassword = () => {

        setShow(true);


    }
    const unShowPassword = () => {

        setShow(false);

    }

    const focusPassword = () => {

        if (type === 'password') {
            setIsFocusPassword(true);
        }

    }
    const unFocusPassword = () => {

        setTimeout(() => {
            if (type === 'password') {
                setIsFocusPassword(false);
            }
        }, 100)

    }



    return (
        <div className={`${styles.body_input} modal-input`}>
            <input onBlur={unFocusPassword} onFocus={focusPassword} onChange={onChange} type={show ? 'text' : type} placeholder={placeholder} className={`${styles.input} input`} />

            {type === 'password'
                ? <div className={isFocusPassword ? 'input_image_visible' : 'input_image'}>
                    {show
                        ? <img onClick={unShowPassword} className={`${styles.input_image}`} src={OpenEye} alt="open eye" />
                        : <img onClick={showPassword} className={`${styles.input_image}`} src={Eye} alt="eye" />
                    }
                </div>
                : <div></div>
            }

        </div>
    );
};

export default Input;