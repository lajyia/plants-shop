import React, { FC } from 'react';
import styles from './MainPoster.module.scss';
import Button from '../UI/Button/Button';
import Poster from './images/poster.png';



const MainPoster: FC = () => {
    return (
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
    );
};

export default MainPoster;