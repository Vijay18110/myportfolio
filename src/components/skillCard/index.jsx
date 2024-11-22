import React from 'react'
import styles from './index.module.css';
const SkillCart = ({ simg, sname }) => {
    return (
        <div className={styles.mainCont}>
            <div className={styles.skillCard}>
                <span> {simg}</span>
            </div>
            <span className={styles.c}>{sname}</span>
        </div>
    )
}
export default SkillCart;