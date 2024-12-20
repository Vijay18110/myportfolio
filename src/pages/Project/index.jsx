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
import img13 from '../../assets/logos/Screenshot13.png';
import img11 from '../../assets/logos/Screenshot11.png';
import img14 from '../../assets/logos/Screenshot14.png';
import img12 from '../../assets/logos/chat.png';
import ProjectCard from '../../components/projectCard';
const About = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.content}>
                <ProjectCard url="https://student-grievance.netlify.app/" img={img1} pname="Student-greivance-system" ptech="react,node,mongodb" />
                <ProjectCard url="https://vijayatm.netlify.app/" img={img2} pname="ATM machine webapp" ptech="react,bootstrap,database" />
                <ProjectCard url="" img={img3} pname="Text Editor not live now" ptech="react,database" />
                <ProjectCard url="" img={img4} pname="Unbrew not live" ptech="react and bootstrap" />
                <ProjectCard url="https://main--vnportfolio.netlify.app/" img={img5} pname="my initial portfolio" ptech="react,node,mongodb" />
                <ProjectCard url="" img={img6} pname="Flipkart Clone not live now" ptech="react,node,mongodb" />
                <ProjectCard url="https://main--vnpasswordgenerator.netlify.app/" img={img7} pname="password generator" ptech="react" />
                <ProjectCard url="" img={img9} pname="todo app not live now" ptech="react" />
                <ProjectCard url="https://phonebookweb.netlify.app/" img={img11} pname="phone book" ptech="react" />
                <ProjectCard url="" img={img12} pname="chat app not live now" ptech="react,node,mongodb" />
                <ProjectCard url="https://credentials-manager-webapp.netlify.app/" img={img13} pname="credentials app" ptech="react,firebase" />
                <ProjectCard url="" img={img14} pname="nest ecommercial webapp not live" ptech="react,firebase,mongodb,redux" />
            </div>
        </div >
    )
}

export default About