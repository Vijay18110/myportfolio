import AboutCart from '../../components/AboutCart';
import EducationCart from '../../components/Education&experiencsCard';
import styles from './index.module.css';

const About = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.pagename}><span>Education</span></div>
            <div className={styles.content}>
                <div className={styles.right}>
                    <h1>Education</h1>
                    <EducationCart year="2021-2025" course="B.tech (Information Technology)" uname="Dr. APJ Abdul Kalam Technical University" />
                    <EducationCart year="2019-2021" course="Intermediate (PCM)" uname="Om Kamal Public School Inter College" />
                    <EducationCart year="2017-2019" course="Matriculation" uname="Om Kamal Public School Inter College" />
                </div>
                <div className={styles.left}>
                    <h1> Experience</h1>
                    <EducationCart year="Jan-2024 to Sep-2024" course="MERN Stack (web developer)" uname="Zn Infotech (Lucknow)" />
                    <EducationCart year="Sep-2024 to Feb-2025" course="MERN Stack (web developer)" uname="Softlew smart solution (Lucknow)" />
                </div>
            </div>
        </div >
    )
}

export default About