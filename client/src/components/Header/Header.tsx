import React, { FC } from 'react';
import Logo from './images/logo.svg';
import styles from './Header.module.scss';
import Magnifier from './images/magnifier.svg';
import ShopBox from './images/shop-box.svg';
import Logout from './images/logout.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { visibleModalAction } from '../../store/modalReducer';


const Header: FC = () => {

    const dispatch = useAppDispatch();

    const showModal = () =>{
        dispatch(visibleModalAction());
    }


    return (
        <header className={styles.header}>
            <div className={`${styles.header__container} container`}>
                <div className={styles.header__logo}>
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <nav className={styles.header__navigation}>
                    <ul className={styles.header__navigation_list}>
                        <li className={styles.header__navigation_item_list}>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className={styles.header__navigation_item_list}>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li className={styles.header__navigation_item_list}>
                            <Link to="/care">Plant Care</Link>
                        </li>
                        <li className={styles.header__navigation_item_list}>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.header__info}>
                    <div className={styles.header__magnifier}>
                        <img src={Magnifier} alt="magnifier" />
                    </div>
                    <div className={styles.header__shop_box}>
                        <img src={ShopBox} alt="shop-box" />
                    </div>
                    <div onClick={showModal} className={styles.header__login}>
                        <img src={Logout} alt="logout" />
                        <button className={styles.header__text_login}>Login</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;