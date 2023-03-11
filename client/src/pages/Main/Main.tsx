import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import styles from './Main.module.scss';
import MainModal from '../../components/MainModal/MainModal';
import Footer from '../../components/Footer/Footer';
import MainPoster from '../../components/MainPoster/MainPoster';
import Categories from '../../components/Categories/Categories';


const Main: FC = () => {
    return (
        <div className={styles.main}>
            <div className="container">
                <Header />
                <MainModal/>
                <MainPoster/>
                <Categories/>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;