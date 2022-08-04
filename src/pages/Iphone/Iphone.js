import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {iphones} from "../../constants/iphones";
import styles from "./Iphone.module.css";

const Iphone = () => {

    const params = useParams();
    const iphone = iphones.find(item => item.id === +params.id);
    // console.log(iphone);
    const iphoneArray = iphones.map(item => (
        <div className={styles.iphoneBox}>
            <Link to={`/product/${item.id}`}>
                <img src={item.img} alt=""/>
                <h2>{item.name}</h2>
                <h3>{item.price}<span> сом</span></h3>
            </Link>
            <button>выбрать</button>
        </div>
    ));

    return (
        <div className={styles.iphone}>
            <h1 className={styles.title}>Iphone</h1>
            <div className={styles.iphoneCard}>
                {iphoneArray}
            </div>
        </div>
    );
};

export default Iphone;