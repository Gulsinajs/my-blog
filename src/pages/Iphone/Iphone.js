import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {iphones} from "../../constants/iphones";
import styles from "./Iphone.module.css";

const Iphone = () => {

    const params = useParams();
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/iphones')
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Произошла ошибка. Статус ошибки:' + response.status);
                }
            })
            .then(data => setPhones(data))
    }, [])

    // const iphone = iphones.find(item => item.id === +params.id);
    // // console.log(iphone);
    // const iphoneArray = iphones.map(item => (
    //     <div className={styles.iphoneBox}>
    //         <Link>
    //             <img src={item.img} alt=""/>
    //             <h2>{item.name}</h2>
    //             <h3>{item.price}<span> сом</span></h3>
    //         </Link>
    //         <button>добавить в корзину</button>
    //     </div>
    // ));

    return (
        <div className={styles.iphone}>
            <h1 className={styles.title}>Iphone</h1>
            <div className={styles.iphoneCard}>
                {
                    phones.map(item => {
                        return <div className={styles.iphoneBox}>
                            <Link to={`/product/${item.id}`}>
                                <img src={item.img} alt=""/>
                                <h2>{item.name}</h2>
                                <h3>{item.price}<span> сом</span></h3>
                            </Link>
                            <button>добавить в корзину</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Iphone;