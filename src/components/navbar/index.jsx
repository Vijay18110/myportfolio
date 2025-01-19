import React from 'react'
import styles from './index.module.css';
import Switch from '../../pages/toggle';
// import Sidebarnew from '../../pages/sidebarnew/index.jsx';
const NavBar = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <>
            <div className={styles.cont1}>
                <Switch setToggle={setToggle} />
            </div>
            {toggle && <Sidebarnew setToggle={setToggle} />
            }
        </>
    )
}

export default NavBar