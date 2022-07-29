import React from 'react';
import styles from './Contacts.module.css';

const Contacts = (data) => {
    return (
        <div className={styles.contacts}>
            <h1>Страничка контакты</h1>
            <p>{data.text}</p>
        </div>
    );
};

export default Contacts;