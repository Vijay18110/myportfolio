import AboutCart from '../../components/AboutCart';
import EducationCart from '../../components/Education&experiencsCard';
import styles from './index.module.css';

const About = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.content}>
                <div className={styles.right}>
                    <h1>Education</h1>
                    <EducationCart trans="400" num="1" year="2021-2025" course="B.tech (Information Technology)" uname="Dr. APJ Abdul Kalam Technical University" />
                    <EducationCart num="2" trans="400" year="2019-2021" course="Intermediate (PCM)" uname="Om Kamal Public School Inter College" />
                    <EducationCart num="2" trans="400" year="2017-2019" course="Matriculation" uname="Om Kamal Public School Inter College" />
                </div>
                <div className={styles.left}>
                    <h1> Experience</h1>
                    <EducationCart num="3" trans="-400" year="Dec-2024 to Present" course="MERN Stack (web developer)" uname="Papaya Coders Private Limited (Lucknow)" />
                    <EducationCart num="5" trans="-400" year="Sep-2024 to Feb-2025" course="MERN Stack (web developer Internship)" uname="Softlew smart solution (Lucknow)" />
                    <EducationCart num="4" trans="-400" year="Jan-2024 to Sep-2024" course="MERN Stack (web developer Internship)" uname="Zn Infotech (Lucknow)" />
                </div>
            </div>
        </div >
    )
}

export default About