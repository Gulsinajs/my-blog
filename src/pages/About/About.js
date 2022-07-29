import React from "react";
import styles from "./About.module.css";

const About =(data)=> {
    console.log(data);
    return (
        <div className={styles.about}>
            <h1>Страничка о нас</h1>
            <p>{data.text}</p>
        </div>
    )
}

export default About;