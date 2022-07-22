import React from "react";
import styles from "./ComponentA.module.css";

const ComponentC = () => {
    return (
        <h1 className={styles.myText}>ComponentC</h1>
    )
}

const ComponentA = () => {

    console.log(styles);
    return (
        <>
            <ComponentC/>
            <h1 className={styles.myText}>ComponentA</h1>
        </>

    )
}

export default ComponentA;