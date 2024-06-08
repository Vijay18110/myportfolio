import style from '../../css/skill.module.css';
import web from '../../../public/web.webp'
import ui from '../../../public/ui.jpeg'
import app from '../../../public/app.webp'

const Skills = () => {
    return (
        <>
            <section id={style.skills}>
                <span className={style.skilltitle}> What I do</span>
                <span className={style.aboutskills}>I am a skilled web designer with exprience in creating visually appealing and user friendly webside.
                    I have a strong understading of design and eye for detail. I am proficient in <strong> HTML ,css, java script</strong> and I also know about <strong> bootstrap,react js,node.js, mongodb</strong>.
                </span>


                <div className={style.skillbars}>
                    <div className={style.skillbar}>
                        <img src={ui} alt="" className={style.skillbarimg} />
                        <div className={style.skilltext}>
                            <h2>UI/UX design</h2>
                            <p> this is demo text . you can add your own text.</p>
                        </div>
                    </div>
                    <div className={style.skillbar}>
                        <img src={web} alt="" className={style.skillbarimg} />
                        <div className={style.skilltext}>
                            <h2> Web design</h2>
                            <p> this is demo text . you can add your own text.</p>
                        </div>
                    </div>
                    <div className={style.skillbar}>
                        <img src={app} alt="" className={style.skillbarimg} />
                        <div className={style.skilltext}>
                            <h2>App design</h2>
                            <p> this is demo text . you can add your own text.</p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
export default Skills;