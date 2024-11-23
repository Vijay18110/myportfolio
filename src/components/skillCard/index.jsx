import React from 'react'
import styles from './index.module.css';
import { motion } from 'framer-motion';

const SkillCart = ({ simg, sname, num }) => {
    return (
        <motion.div
            initial={{ x: 200 }}
            transition={{ duration: .1 * (num + 1) }}
            animate={{ x: 0 }}
            className={styles.mainCont}>
            <div className={styles.skillCard}>
                <span> {simg}</span>
            </div>
            <span className={styles.c}>{sname}</span>
        </motion.div>
    )
}
export default SkillCart;