import React from 'react'
import styles from './index.module.css';
import { FaChrome, FaPlus } from "react-icons/fa";
const ProjectCard = ({ img, pname, ptech }) => {
    return (
        <>
            <div className={styles.cartCont}>
                <img src={img} alt="" />
                <span className={styles.plus}><FaPlus /></span>
                <div className={styles.onhover}>
                    <div className={styles.text}>
                        <span>{pname}</span>
                        <span>{ptech}</span>
                    </div>
                    <span className={styles.iconCont}><FaChrome /></span>
                </div>
            </div>
        </>
    )
}

export default ProjectCard