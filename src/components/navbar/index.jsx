import React from 'react'
import styles from './index.module.css';
import Sidebar2 from '../../pages/sidebarnew/index.jsx';
import Switch from '../../pages/toggle/index.jsx';
const NavBar = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <>
            <div className={styles.cont1}>
                <Switch setToggle={setToggle} />
            </div>
            {toggle && <Sidebar2 setToggle={setToggle} />
            }
        </>
    )
}

export default NavBar