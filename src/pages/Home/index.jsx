import React, { useContext } from 'react'
import styles from './index.module.css';
import { Sidebar } from '../../components/sidebar/Example';
import { ctx } from '../../store/context';
import img from '../../assets/vijay2.png.jpg'
import { GrDownload } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import resume from '../../assets/r2updatedrecently.pdf'
const Home = () => {
    const { manuName } = useContext(ctx)
    return (
        <>
            <div className={styles.cont}>
                <div className={styles.pagename}><span>{manuName}</span></div>
                <div className={styles.content}>
                    <div>
                        <h1>Hello,</h1>
                        <h2>I'm</h2>
                        <p>
                            Experienced Software Engineer with expertise in React.js, React Native, Next.js, Node.js, and Express, known for strong problem-solving skills and leadership abilities. I am committed to delivering high-quality frontend and backend solutions, while staying up to date with industry advancements. And Also I can leverage my proficiency in modern development tools, including Azure DevOps and AWS, to contribute to organizational growth. A team player who thrives in collaborative environments, I am always eager to learn new technologies and skills to enhance my impact and meet company objectives.
                        </p>
                    </div>
                    <div className={styles.imgCont}>
                        <img src={img} alt="pic" />
                    </div>
                </div>

                <div className={styles.nn}>
                    <a href={resume} className={styles.btnCont}>
                        <span className={styles.btnCont_name}>download cv</span> <span className={styles.icon}><GrDownload size={20} /></span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home