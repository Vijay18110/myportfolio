import React from 'react'
import styles from './index.module.css';
import Toggle from '../../pages/toggle/index.jsx';
import Sidebarnew from '../../pages/sidebarnew/index.jsx';
const NavBar = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <>
            <div className={styles.cont1}>
                <Toggle setToggle={setToggle} />
            </div>
            {toggle && <Sidebarnew setToggle={setToggle} />
            }
        </>
    )
}

export default NavBar