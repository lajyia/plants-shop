import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import styles from './Main.module.scss';
import Poster from './images/poster.png';
import Button from '../../components/UI/Button/Button';
import MainModal from '../../components/MainModal/MainModal';
import Footer from '../../components/Footer/Footer';



const Main: FC = () => {
    return (
        <div className={styles.main}>
            <div className="container">
                <Header />
                <MainModal/>
                <div className={styles.main__poster}>
                    <div className={styles.main__poster_body}>
                        <div className={styles.main__subtitle_body}>welcome to greenshop</div>
                        <div className={styles.main__title_body}>Let's make a better<span>planet</span></div>
                        <div className={styles.main__text_body}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</div>
                        <Button>SHOP NOW</Button>
                    </div>
                    <div className={styles.main__poster_image}>
                        <img src={Poster} alt="poster" />
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;