import React from 'react';
import styles from './index.module.css';
import EducationIcon from '../EducationIcon';
const EducationCart = ({ year, uname, course, icon }) => {
    return (
        <div className={styles.cardCont}>
            <EducationIcon />
            <span>{year}</span>
            <span>{course}</span>
            <span>{uname}</span>
        </div>
    )
}
export default EducationCart;