import React from 'react'
import styles from './index.module.css';
const Icon = ({ icon }) => {
    return (
        <div className={styles.icon}>{icon}</div>
    )
}

export default Icon