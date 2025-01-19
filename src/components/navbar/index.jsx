import React from 'react'
import styles from './index.module.css';
import { Sidebar } from '../sidebar/Example';
import Sidebar2 from '../sidebar2';
import Switch from '../toggle';
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