import React from 'react'
import styles from './index.module.css';
import { motion } from 'framer-motion';
const ContactCart = ({ icon, place, type, num }) => {
    return (
        <>
            <motion.div
                initial={{ x: 400 }}
                transition={{ duration: .5 * num }}
                animate={{ x: 0 }}
                className={styles.contCard}>
                <div className={styles.left}>{icon}</div>
                <div className={styles.right}>
                    <span>{type}</span>
                    <span>{place}</span>
                </div>
            </motion.div>
        </>
    )
}

export default ContactCart