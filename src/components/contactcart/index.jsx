import React from 'react'
import styles from './index.module.css';
const ContactCart = ({ icon, place, type }) => {
    return (
        <>
            <div className={styles.contCard}>
                <div className={styles.left}>{icon}</div>
                <div className={styles.right}>
                    <span>{type}</span>
                    <span>{place}</span>
                </div>
            </div>
        </>
    )
}

export default ContactCart