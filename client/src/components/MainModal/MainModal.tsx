import React, { FC } from 'react';
import Input from '../UI/Input/Input';
import Modal from '../UI/Modal/Modal';
import './MainModal.scss';
import Close from './images/close.svg';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Google from './images/google.svg';
import Facebook from './images/facebook.svg';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import { unvisibleModalAction } from '../../store/modalReducer';


const MainModal: FC = () => {

    const [loginActive, setLoginActive] = useState<boolean>(true);
    const [focusPassword, setFocusPassword] = useState<boolean>(false);


    const dispatch = useAppDispatch();

    const visibleModal = useSelector((state: IRootState) => state.modal.modal);


    const chooseLogin = () => {
        setLoginActive(true);
    }
    const chooseRegister = () => {
        setLoginActive(false);
    }


    const closeModal = () => {
        dispatch(unvisibleModalAction());
    }

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFocusPassword(false);
    }

    const stopInputPropagation = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    }

    const formAuth = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        

    }


    const rootLoginClasses = ['main-modal__login-switch main-modal__switch-item'];
    const rootRegisterClasses = ['main-modal__register-switch main-modal__switch-item'];


    {
        loginActive
            ? rootLoginClasses.push('main-modal__switch-item-active')
            : rootRegisterClasses.push('main-modal__switch-item-active')
    }


    if (!visibleModal) {
        document.body.classList.remove('lock');

        return (
            <div></div>
        )
    }

    if (visibleModal) {
        document.body.classList.add('lock');
    }

    return (
        <div className="main-modal">
            {loginActive
                ? <Modal onClickContainer={stopPropagation} onClickBody={closeModal}>
                    <div onClick={closeModal} className="main-modal__close-image">
                        <img src={Close} alt="close" />
                    </div>
                    <div className="main-modal__switch-panel">
                        <div onClick={chooseLogin} className={rootLoginClasses.join(' ')}>Login</div>
                        <div className="main-modal__split-switch">|</div>
                        <div onClick={chooseRegister} className={rootRegisterClasses.join(' ')}>Register</div>
                    </div>
                    <form className="main-modal__form">
                        <div className="main-modal__title-form">
                            Enter your email and password to login
                        </div>
                        <div className="main-modal__input-login">
                            <Input type="text" placeholder='email' />
                        </div>
                        <div className="main-modal__input-password">
                            <Input type="password" placeholder='password' />
                        </div>
                        <div className="main-modal__forgot-form">
                            <Link to="/forgot">Forgot Password?</Link>
                        </div>
                        <Button formAuth={formAuth}>Login</Button>
                    </form>
                    <div className="main-modal__variable-login">
                        <div className="main-modal__variable-title">Or login with</div>
                        <div className="main-modal__variable-body">
                            <div className="main-modal__google-variable main-modal-variable">
                                <div className="main-modal__image-google">
                                    <img src={Google} alt="google" />
                                </div>
                                <div className="main-modal__title-google">Login with Google</div>
                            </div>
                            <div className="main-modal__facebook-variable main-modal-variable">
                                <div className="main-modal__image-facebook ">
                                    <img src={Facebook} alt="facebook" />
                                </div>
                                <div className="main-modal__title-facebook">Login with Facebook</div>
                            </div>
                        </div>
                    </div>
                </Modal>
                : <Modal onClickContainer={stopPropagation} onClickBody={closeModal}>
                    <div onClick={closeModal} className="main-modal__close-image">
                        <img src={Close} alt="close" />
                    </div>
                    <div className="main-modal__switch-panel">
                        <div onClick={chooseLogin} className={rootLoginClasses.join(' ')}>Login</div>
                        <div className="main-modal__split-switch">|</div>
                        <div onClick={chooseRegister} className={rootRegisterClasses.join(' ')}>Register</div>
                    </div>
                    <form className="main-modal__form">
                        <div className="main-modal__title-form">
                            Enter your email and password to register
                        </div>
                        <div className="main-modal__input-username">
                            <Input type="text" placeholder='username' />
                        </div>
                        <div className="main-modal__input-email">
                            <Input type="text" placeholder='enter your email address' />
                        </div>
                        <div onClick={stopInputPropagation} className="main-modal__input-password">
                            <Input type="password" placeholder='password' />
                        </div>
                        <div onClick={stopInputPropagation} className="main-modal__input-confirm-password">
                            <Input type="password" placeholder='confirm password' />
                        </div>
                        <Button formAuth={formAuth}>Register</Button>
                    </form>
                    <div className="main-modal__variable-login">
                        <div className="main-modal__variable-title">Or register with</div>
                        <div className="main-modal__variable-body">
                            <div className="main-modal__google-variable main-modal-variable">
                                <div className="main-modal__image-google">
                                    <img src={Google} alt="google" />
                                </div>
                                <div className="main-modal__title-google">Login with Google</div>
                            </div>
                            <div className="main-modal__facebook-variable main-modal-variable">
                                <div className="main-modal__image-facebook ">
                                    <img src={Facebook} alt="facebook" />
                                </div>
                                <div className="main-modal__title-facebook">Login with Facebook</div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default MainModal;