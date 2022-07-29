import React from 'react';
import styles from './Header.module.css';
import Logo from '../../media/icons/LOgo.png';
import Arrow from '../../media/icons/arrow.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={Logo} alt=""/>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contacts">Контакты</a></li>
                <li><a href="/menu">Меню</a><img src={Arrow} alt=""/></li>
                <li><a href="/catalog">Каталог</a></li>
            </ul>
        </div>
    );
};

export default Header;