import React, { useState } from 'react'
import styles from './index.module.css';
import { motion } from 'framer-motion'
import { FaChrome, FaPlus } from "react-icons/fa";
const ProjectCard = ({ img, pname, ptech }) => {

    return (
        <>
            <motion.div
                initial={{ borderRadius: "50%" }}
                animate={{ borderRadius: "0%" }}
                className={styles.cartCont}>
                <motion.img
                    initial={{ borderRadius: "50%" }}
                    animate={{ borderRadius: "0%" }}
                    src={img} alt="" />
                <span className={styles.plus}><FaPlus /></span>
                {<div className={styles.onhover} >
                    <div className={styles.text}>
                        <span>{pname}</span>
                        <span>{ptech}</span>
                    </div>
                    <span className={styles.iconCont}><FaChrome /></span>
                </div>}
            </motion.div>
        </>
    )
}

export default ProjectCard