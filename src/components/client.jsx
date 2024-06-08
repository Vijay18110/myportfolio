import img from '../../public/ui.jpeg';
import style from '../css/client.module.css';
const Client = () => {
    return (
        <>
            <section id={style.Client}>
                <h2 className={style.clienttitle}> My Client</h2>
                <p className={style.clientdescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam, obcaecati voluptates alias repellendus consectetur natus laudantium nam assumenda, maiores dolorem consequatur magni.
                    Accusamus perferendis a ipsam et reprehenderit molestiae.</p>
                <div className="clientimgs">
                    <img src={img} alt="" className={style.clientimg} />
                    <img src={img} alt="" className={style.clientimg} />
                    <img src={img} alt="" className={style.clientimg} />
                    <img src={img} alt="" className={style.clientimg} />
                </div>
            </section>
        </>
    )
}
export default Client;