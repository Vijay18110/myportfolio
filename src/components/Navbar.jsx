import { Link } from 'react-scroll';
import logo from '../../public/vnlogo.jpeg';
import '../css/navbar.css';
import style1 from '../css/skill.module.css';
import style from '../css/constactme.module.css';
import style2 from '../css/client.module.css';
import style3 from '../css/portfolio.module.css';
import style4 from '../css/intro.module.css';
import { MdDelete, MdWidthFull } from "react-icons/md";




const Navebar = () => {
    return (
        <>
            <nav id="navbar1" className=''>
                <img src={logo} alt="logo" className='logo' />
                <div className="desktopmanulistitem1">
                    <Link className='a' activeClass={style4.active} to={style4.intro} spy={true} smooth={true} offset={-100} duration={500}> home</Link>
                    <Link className='a' activeClass={style1.active} to={style1.skills} spy={true} smooth={false} offset={-70} duration={500} > about</Link>
                    <Link className='a' activeClass={style3.active} to={style3.works} spy={true} smooth={false} offset={-50} duration={500} > portfolio</Link>
                    <Link className='a' activeClass={style2.active} to={style2.Client} spy={true} smooth={false} offset={-50} duration={500}> client</Link>

                </div>

                <div className={style.btn}>
                    <button className='btn1' onClick={() => {
                        const obj = document.getElementById(style.Contactme);
                        obj.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <spna className={style.Contactmeimg}>
                            <MdDelete />
                        </spna>
                        contact me</button>
                </div>
            </nav >
        </>
    )
}
export default Navebar;