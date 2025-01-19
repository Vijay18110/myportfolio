import React from 'react'
import styles from './index.module.css';
import Switch from '../toggle';
import Sidebar2 from '../sidebarnew/index.jsx';
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