import React from 'react'
import styles from './index.module.css';
const AboutCart = ({ value, text }) => {
    return (
        <div className={styles.cardCont}>
            <span>{value}</span>
            <span>{text}</span>
        </div>
    )
}

export default AboutCart