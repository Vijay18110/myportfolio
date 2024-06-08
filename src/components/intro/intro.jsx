import img from '../../../public/vijay1.jpg';
import { Link } from 'react-router-dom'
// import '../../css/intro.css'
import style from '../../css/intro.module.css';
const Intro = () => {
    return (
        <>
            <section id={style.intro}>
                <div className={style.introcontent}>
                    <span className={style.hello}> hello,
                    </span> <span> I'm <span className={style.name}> Vijay raj</span> <span> <br /> software & web designer </span></span>
                    <p className={style.introdunction}>
                        I am a skilled web designer with exprience in creating <br /> visually appealing and user friendly webside.
                    </p>
                    <Link> <button className={style.hirebtn}> <img className={style.hireimg} src={img} alt="hireme" /> Hire me </button></Link>
                </div>
                <img src={img} alt="" className={style.bg} />
            </section>
        </>
    )
}
export default Intro;