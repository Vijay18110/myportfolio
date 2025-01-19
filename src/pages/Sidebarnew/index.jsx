import React from 'react';
import styles from './index.module.css';
import { motion } from 'framer-motion';
import { Navigation } from '../NavigationBar';
const Sidebarnew = ({ setToggle }) => {
    return (
        <>
            <motion.div className={styles.sidebarCont}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}>
                <Navigation setToggle={setToggle} />
            </motion.div>
            <div className={styles.sidebarCont2}>
            </div>
        </>
    )
}
export default Sidebarnew