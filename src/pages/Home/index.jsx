import React, { useContext, useState } from 'react'
import styles from './index.module.css';
import { Sidebar } from '../../components/sidebar/Example';
import { ctx } from '../../store/context';
import img from '../../assets/vijay2.png.jpg'
import { GrDownload } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import resume from '../../assets/r2updatedrecently.pdf'
const Home = () => {

    const [text, setText] = useState("a Software Engineer".split(' '));
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { straggerChildren: .2 } }
    };
    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <>
            <div className={styles.cont}>
                <div className={styles.content}>
                    <div>
                        <h1>Hello,</h1>
                        <h2 style={{ display: "flex", gap: ".5rem" }}>I'm <motion.strong
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className={styles.typingnaimation}
                            style={{ display: "flex", gap: ".5rem" }}
                        >
                            {text.map((w, index) => <motion.span key={index} variants={child}>{w}</motion.span>)}

                        </motion.strong>
                        </h2>
                        <p>
                            A web developer with expertise in React.js, Redux, Next.js, Node.js, and Express, known for strong problem-solving skills and leadership abilities. I am committed to delivering high-quality frontend and backend solutions, while staying up to date with industry advancements. And Also I can leverage my proficiency in modern development tools, to contribute to organizational growth. A team player who thrives in collaborative environments, I am always eager to learn new technologies and skills to enhance my impact and meet company objectives.
                        </p>
                    </div>
                    <motion.div
                        initial={{ x: 500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className={styles.imgCont}>
                        {/* <img src={img} alt="pic" /> */}
                    </motion.div>
                </div>
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    className={styles.nn}>
                    <a href={resume} className={styles.btnCont}>
                        <span className={styles.btnCont_name}>download cv</span> <span className={styles.icon}><GrDownload size={20} /></span>
                    </a>
                </motion.div>
            </div>
        </>
    )
}

export default Home