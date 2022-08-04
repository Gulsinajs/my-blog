import React from 'react';
import {Link} from "react-router-dom";
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.not_found}>
            <Link to="/">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/000/534/948/original/404-error-page-not-found-concept-in-white-background-for-sites-under-constructions-vector.jpg"
                    alt=""/>
            </Link>
        </div>
    );
};

export default NotFound;