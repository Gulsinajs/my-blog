import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {watches} from "../../constants/watches";
import styles from './ProductWatch.module.css';

const ProductWatch = () => {

    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const productWatch = watches.find(item => item.id === +params.id);
    // console.log(useSearchParams()[0]);
    // console.log(typeof +searchParams.get('quantity'));

    return (
        <div className={styles.container}>
            <div>
                <img src={productWatch.img} alt=""/>
            </div>
            <div className={styles.info}>
                <h2>{productWatch.name}</h2>
                <h3>{productWatch.price}<span> сом</span></h3>
                <p>{productWatch.description}</p>
                <p className={styles.quantity_status}>
                    {+searchParams.get('quantity') === 0 ? 'нет в наличии' : 'товар в наличии'}
                </p>
                <p>
                    {+searchParams.get('memory')}
                </p>
            </div>
        </div>
    );
};

export default ProductWatch;