import React from 'react'
import styles from './index.module.css';
import { motion } from 'framer-motion';
const Handw = () => {
    return (
        <>
            <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className={styles.cont}>
                <motion.div className={styles.hand}>Logical reasoning</motion.div>
                <motion.div className={styles.hand}>version control</motion.div>
                <motion.div className={styles.hand}>debuging </motion.div>
                <motion.div className={styles.hand}>clean coding</motion.div>
                <motion.div className={styles.hand}>Rest APIs</motion.div>
                <motion.div className={styles.hand}>Problem solving</motion.div>
            </motion.div>
        </>
    )
}

export default Handw