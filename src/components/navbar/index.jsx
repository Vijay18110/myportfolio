import React from 'react'
import styles from './index.module.css';
import { Sidebar } from '../sidebar/Example';
const NavBar = () => {
    return (
        <div className={styles.cont1}>
            <Sidebar />
        </div>
    )
}

export default NavBar