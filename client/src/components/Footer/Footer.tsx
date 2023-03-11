import React, { FC } from 'react';
import Button from '../UI/Button/Button';
import styles from './Footer.module.scss';
import Garden from './images/garden.svg';
import Plant from './images/plant.svg';
import Watering from './images/watering.svg';
import Input from '../UI/Input/Input';
import './Footer.scss';
import Logo from '../Header/images/logo.svg';
import Email from './images/email.svg';
import Phone from './images/phone.svg';
import Location from './images/location.svg';
import Facebook from './images/facebook.svg';
import Instagram from './images/instagram.svg';
import Linkedin from './images/linkedin.svg';
import Twitter from './images/twitter.svg';
import Union from './images/union.svg';
import MoneyService from './images/money-service.svg';




const Footer: FC = () => {
    return (
        <div className={`${styles.footer} footer`}>
            <div className="container">
                <div className={styles.footer_top}>
                    <div className={styles.footer_body_top}>
                        <div className={styles.footer_item_body_top}>
                            <div className={styles.footer_image_item_body}>
                                <img src={Garden} alt="garden" />
                            </div>
                            <div className={styles.footer_title_body_top}>Garden Care</div>
                            <div className={styles.footer_text_body_top}>We are on online plant shop offering a wide range of cheap and trendy plants</div>
                        </div>
                        <div className={styles.footer_item_body_top}>
                            <div className={styles.footer_image_item_body}>
                                <img src={Plant} alt="plant" />
                            </div>
                            <div className={styles.footer_title_body_top}>Plant Renovation</div>
                            <div className={styles.footer_text_body_top}>We are on online plant shop offering a wide range of cheap and trendy plants</div>
                        </div>
                        <div className={styles.footer_item_body_top}>
                            <div className={styles.footer_image_item_body}>
                                <img src={Watering} alt="watering" />
                            </div>
                            <div className={styles.footer_title_body_top}>Watering Garden</div>
                            <div className={styles.footer_text_body_top}>We are on online plant shop offering a wide range of cheap and trendy plants</div>
                        </div>
                    </div>
                    <div className={styles.footer_notification}>
                        <div className={styles.footer_title_notification}>Would you like to join newsletters?</div>
                        <div className={styles.footer_email_notification}>
                            <div className={styles.footer_email_notification_input}>
                                <Input type="text" placeholder='enter your email address...' />
                            </div>
                            <Button>Join</Button>
                        </div>
                        <div className={styles.footer_text_notification}>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </div>
                    </div>
                </div>
                <div className={styles.footer_contacts}>
                    <div className={styles.footer_logo_contacts}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={styles.footer_address_notification}>
                        <img src={Location} alt="location" />
                        <div className={styles.footer_text_address_notification}>
                            <div className={styles.footer_top_text_address_notification}>70 West Buckingham Ave.</div>
                            <div className={styles.footer_bottom_text_address_notification}>Farmingdale, NY 11735</div>
                        </div>
                    </div>
                    <div className={styles.footer_mail_notification}>
                        <img src={Email} alt="" />
                        <div className={styles.footer_text_mail_notification}>contact@greenshop.com</div>
                    </div>
                    <div className={styles.footer_phone_notification}>
                        <img src={Phone} alt="phone" />
                        <div className={styles.footer_text_phone_notification}>+88 01911 711 490</div>
                    </div>
                    <div className={styles.footer_space_notification}></div>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_account}>
                        <div className={`${styles.footer_title_account} footer-title`}>My Account</div>
                        <ul className={styles.footer_list_account}>
                            <li className={styles.footer_item_list_account}><a href="#">My Account</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Out stores</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Contact us</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Career</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Specials</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_help}>
                        <div className={`${styles.footer_title_help} footer-title`}>Help & Guide</div>
                        <ul className={styles.footer_list_help}>
                            <li className={styles.footer_item_list_account}><a href="#">Help Center</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">How to Buy</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Shipping & Delivery</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Product Policy</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">How to Return</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_categories}>
                        <div className={`${styles.footer_title_categories} footer-title`}>Categories</div>
                        <ul className={styles.footer_list_categories}>
                            <li className={styles.footer_item_list_account}><a href="#">House Plants</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Potter Plants</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Seeds</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Small Plants</a></li>
                            <li className={styles.footer_item_list_account}><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_info}>
                        <div className={styles.footer_social_info}>
                            <div className={`${styles.footer_title_social_info} footer-title`}>Social Media</div>
                            <ul className={styles.footer_list_social_info}>
                                <li className={styles.footer_item_social_info}>
                                    <img src={Facebook} alt="facebook" />
                                </li>
                                <li className={styles.footer_item_social_info}>
                                    <img src={Instagram} alt="instagram" />
                                </li>
                                <li className={styles.footer_item_social_info}>
                                    <img src={Twitter} alt="twitter" />
                                </li>
                                <li className={styles.footer_item_social_info}>
                                    <img src={Linkedin} alt="linkedin" />
                                </li>
                                <li className={styles.footer_item_social_info}>
                                    <img src={Union} alt="union" />
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer_accept_info}>
                            <div className={`${styles.footer_title_accept_info} footer-title`}>We accept</div>
                            <img src={MoneyService} className={styles.footer_money_service} />
                        </div>
                    </div>
                </div>
                <div className={styles.footer_sub_bottom}>
                    © 2021 GreenShop. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;