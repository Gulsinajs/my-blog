import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    const userData = {
        name:"Sasha",
        age:30
    }

    const {name, age} = userData;

    return (
        <div className={styles.header}>
            <ul>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/about">О нас</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><NavLink className={setActive} to="/menu">Меню</NavLink></li>
                <li><NavLink className={setActive} to="/catalog">Каталог</NavLink></li>
                <li><NavLink to="/catalog/iphone">Iphone</NavLink></li>
                <li><NavLink to="/catalog/macBook">MacBook</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;