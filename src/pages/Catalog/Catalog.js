import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Catalog.module.css';

const Catalog = () => {

    return (
        <div className={styles.catalog}>
            <h1>Каталог</h1>
            <div className={styles.container}>
                <div className={styles.catalog_card}>
                    <NavLink to="/catalog/watch">
                        <img src="https://istore.kg/media/category/watches.webp" alt=""/>
                        <h2>Watch</h2>
                    </NavLink>
                </div>
                <div className={styles.catalog_card}>
                    <NavLink to="/catalog/iphone">
                        <img src="https://istore.kg/media/category/iphones.webp" alt=""/>
                        <h2>Iphone</h2>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Catalog;