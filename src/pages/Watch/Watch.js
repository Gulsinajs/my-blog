import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useParams, useSearchParams} from 'react-router-dom';
import {watches} from "../../constants/watches";
import styles from './Watch.module.css';

const Watch = () => {

    const params = useParams();
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/watches`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Произошла ошибка. Статус ошибки:' + response.status);
                }
            })
            .then(data => setWatches(data))
    }, [])

    // const [searchParams, setSearchParams] = useSearchParams();
    // const watch = watches.find(item => item.id === +params.id);
    // const watchArray = watches.map(item => (
    //    <div className={styles.watchBox}>
    //        <Link to={`/productWatch/${item.id}`}>
    //            <img src={item.img} alt=""/>
    //            <h2>{item.name}</h2>
    //            <h3>{item.price}<span> сом</span></h3>
    //        </Link>
    //        <button>добавить в корзину</button>
    //    </div>
    // ));

    return (
        <div className={styles.watch}>
            <h1>Watch</h1>
            <div className={styles.watchCard}>
                    {
                        watches.map(item => {
                            return <div className={styles.watchBox}>
                                <Link to={`/productWatch/${item.id}`}>
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

export default Watch;