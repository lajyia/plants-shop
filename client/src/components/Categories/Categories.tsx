import React, { FC } from 'react';
import styles from './Categories.module.scss';
import Button from '../UI/Button/Button';
import Arrow from './images/arrow.svg';
import Categories1 from './images/categories1.png';
import Categories2 from './images/categories2.png';
import Decorative from './images/decorative.svg';



const Categories: FC = () => {
    return (
        <div className={styles.categories}>
            <div className={styles.categories_left_block}>
                <img className={styles.categories_image_left_block} src={Categories1} alt="" />
                <img className={styles.categories_image_decorative} src={Decorative} alt="" />
                <div className={styles.categories_body_left_block}>
                    <div className={styles.categories_title_body}>Summer cactus & succulents</div>
                    <div className={styles.categories_text_body}>We are an online plant shop offering a wide range of cheap and trendy plants</div>
                    <Button>
                        <div className={styles.categories_text_button}>Find More</div>
                        <img className={styles.categories_image_button} src={Arrow} alt="arrow" />
                    </Button>
                </div>
            </div>
            <div className={styles.categories_right_block}>
                <img className={styles.categories_image_right_block} src={Categories2} alt="" />
                <img className={styles.categories_image_decorative} src={Decorative} alt="" />
                <div className={styles.categories_body_right_block}>
                    <div className={styles.categories_title_body}>Styling trends & much more</div>
                    <div className={styles.categories_text_body}>We are an online plant shop offering a wide range of cheap and trendy plants</div>
                    <Button>
                        <div className={styles.categories_text_button}>Find More</div>
                        <img className={styles.categories_image_button} src={Arrow} alt="arrow" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Categories;