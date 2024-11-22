import React, { useContext } from 'react'
import styles from './index.module.css';
import { ctx } from '../../store/context';
import AboutCart from '../../components/AboutCart';
import Icon from '../../components/IconCont';
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.pagename}><span>About</span></div>
            <div className={styles.content}>
                <div className={styles.right}>
                    <h1>
                        about me
                    </h1>
                    <p>I'm Vijay,Software Engineer with expertise in React.js, Redux, Next.js, Node.js, and Express, known for strong problem-solving skills and leadership abilities. I am committed to delivering high-quality frontend and backend solutions, while staying up to date with industry advancements. I am seeking a challenging role as a web and app developer where I can leverage my proficiency in modern development tools to contribute to organizational growth. A team player who thrives in collaborative environments, I am always eager to learn new technologies and skills to enhance my impact and meet company objectives.</p>
                    <div className={styles.socialIConCont}>
                        <Icon icon={<FaInstagramSquare />} />
                        <Icon icon={<FaGithub />} />
                        <Icon icon={<FaLinkedin />} />
                        <Icon icon={<FaTwitter />} />
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.n}>
                        <AboutCart text="project" value="20+" />
                        <AboutCart text="experince" value=".6+" />
                    </div>
                    <div className={styles.n}>
                        <AboutCart text="completed" value="10+" />
                        <AboutCart text="mini projects" value="10+" />
                    </div>
                    <div className={styles.n}>
                        <AboutCart text="large webapp" value="8+" />
                        <AboutCart text="with backend" value="5+" />
                    </div>
                </div>
            </div>


        </div >
    )
}

export default About