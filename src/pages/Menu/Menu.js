import React from 'react';
import styles from './Menu.module.css';
import Arrow from '../../media/icons/arrow.png';

const Menu = () => {
    return (
        <div className={styles.menu}>
          <h1>Меню</h1>
            <img src="{Arrow}" alt=""/>
        </div>
    );
};

export default Menu;