import React from 'react'
import styles from './index.module.css';
import { motion } from 'framer-motion';
const AboutCart = ({ value, text, num }) => {
    return (
        <motion.div
            initial={{ x: 400 }}
            transition={{ duration: .5 * num }}
            animate={{ x: 0 }}
            className={styles.cardCont}>
            <span>{value}</span>
            <span>{text}</span>
        </motion.div>
    )
}

export default AboutCart