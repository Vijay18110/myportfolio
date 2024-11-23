import React from 'react';
import styles from './index.module.css';
import EducationIcon from '../EducationIcon';
import { motion } from 'framer-motion';
const EducationCart = ({ year, uname, course, icon, num, trans }) => {
    return (
        <motion.div
            initial={{ x: -trans }}
            transition={{ duration: .5 * num }}
            animate={{ x: 0 }}
            className={styles.cardCont}>
            <EducationIcon />
            <span>{year}</span>
            <span>{course}</span>
            <span>{uname}</span>
        </motion.div>
    )
}
export default EducationCart;