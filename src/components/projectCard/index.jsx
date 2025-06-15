import React from 'react'
import styles from './index.module.css';
// import { motion } from 'framer-motion'
import { FaChrome, FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const ProjectCard = ({ img, pname, ptech, url }) => {
    const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate('');
    // }
    return (
        <>
            <div
                initial={{ borderRadius: "50%" }}
                animate={{ borderRadius: "0%" }}
                className={styles.cartCont}>
                <img
                    initial={{ borderRadius: "50%" }}
                    animate={{ borderRadius: "0%" }}
                    src={img} alt="" />
                <span className={styles.plus}><FaPlus /></span>
                <div className={styles.onhover}>
                    <div className={styles.text}>
                        <span className={styles.fontSize}>{pname}</span>
                        <span className={styles.fontSize}>{ptech}</span>
                    </div>
                    <a target='_blank' href={url}>  <span className={styles.iconCont}><FaChrome /></span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;