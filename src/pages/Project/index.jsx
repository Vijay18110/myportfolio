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
import img16 from '../../assets/logos/image.png';
import img17 from '../../assets/project/image.png';
import img19 from '../../assets/My-Portfolio_files/image.png';
import img18 from '../../assets/image.png';
import img12 from '../../assets/logos/chat.png';
import ProjectCard from '../../components/projectCard';
const About = () => {
    return (
        <div className={styles.cont}>
            {/* <div className='${styles.headingCont}'>
                <h1 className={styles.heading}>Projects</h1>
            </div> */}
            <div className={styles.content}>
                <ProjectCard url="https://cp.tantrash.com/#/Dashboard" img={img16} pname="Associate Panel" ptech="react.js,redux.js and bootstrap" />
                <ProjectCard url="https://dev.ravorganics.com/" img={img17} pname="Organic Web app" ptech="react,redux,bootstrap" />
                <ProjectCard url="https://propertyatm.in/" img={img18} pname="Property ATM" ptech="react,redux,bootstrap" />
                <ProjectCard url="https://customer.ravgroup.org/" img={img19} pname="Customer Panel" ptech="react,node,bootstrap" />
                <ProjectCard url="https://student-grievance.netlify.app/" img={img1} pname="Student-greivance-system" ptech="react,node,mongodb" />
                <ProjectCard url="https://vijayatm.netlify.app/" img={img2} pname="ATM machine webapp" ptech="react,bootstrap,database" />
                <ProjectCard url="" img={img3} pname="Text Editor not live now" ptech="react,database" />
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