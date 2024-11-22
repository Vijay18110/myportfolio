import styles from './index.module.css';
import img1 from '../../assets/logos/Screenshot1.png'
import img2 from '../../assets/logos/Screenshot2.png'
import img3 from '../../assets/logos/Screenshot3.png'
import img4 from '../../assets/logos/Screenshot4.png';
import img5 from '../../assets/logos/Screenshot5.png';
import img6 from '../../assets/logos/Screenshot6.png';
import img7 from '../../assets/logos/Screenshot7.png';
import img8 from '../../assets/logos/Screenshot8.png';
import img9 from '../../assets/logos/Screenshot9.png';
// import img11 from '../../assets/logos/Screenshot11.png';
import ProjectCard from '../../components/projectCard';
const About = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.content}>
                <ProjectCard img={img1} pname="Student-greivance-system" ptech="react,node,mongodb" />
                <ProjectCard img={img2} pname="ATM machine webapp" ptech="react,bootstrap,database" />
                <ProjectCard img={img3} pname="Text Editor" ptech="react,database" />
                <ProjectCard img={img4} pname="Unbrew" ptech="react and bootstrap" />
                <ProjectCard img={img5} pname="Student-greivance-system" ptech="react,node,mongodb" />
                <ProjectCard img={img6} pname="Flipkart Clone" ptech="react,node,mongodb" />
                <ProjectCard img={img7} pname="password generator" ptech="react" />
                <ProjectCard img={img8} pname="social media app" ptech="react" />
            </div>
        </div >
    )
}

export default About