import styles from './index.module.css';
import SkillCart from '../../components/skillCard';
import { Skills } from '../../data/skills';
import Handw from '../../components/skillhandwritten';
const About = () => {
    return (
        <div className={styles.cont1}>
            <div className={styles.content}>
                <div className={styles.right}>
                    <h1>
                        Skills
                    </h1>
                    <div className={styles.cont}>
                        {Skills.map((s) => <SkillCart key={s.id} simg={s.simg} sname={s.sname} />)}
                    </div>
                    <div className={styles.cont}>
                        <Handw />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About