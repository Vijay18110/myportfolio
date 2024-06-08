import style from '../css/portfolio.module.css';
import img from '../../public/web.webp'
const Works = () => {
    return (
        <>
            <section id={style.works}>
                <h2 className={style.workstitle}>my portfolio</h2>
                <span className={style.worksdescription}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus minima <br />accusamus vero similique in explicabo necessitatibus dolore molestias perferendis <br />    iure ipsam sapiente
                    quia nobis atque, vel aut. Eveniet, voluptates.</span>
                <div className="worksimgs">
                    <img src={img} alt="" className={style.worksimg} />
                    <img src={img} alt="" className={style.worksimg} />
                    <img src={img} alt="" className={style.worksimg} />
                    <img src={img} alt="" className={style.worksimg} />
                    <img src={img} alt="" className={style.worksimg} />
                    <img src={img} alt="" className={style.worksimg} />
                </div>
                <button className={style.worksbtn}> See More </button>

            </section>
        </>
    )
}
export default Works;