import React from 'react'
import styles from './index.module.css';
import Toggle2 from '../../pages/Toggle/index.jsx';
import Sidebarnew from '../../pages/Sidebarnew/index.jsx';
import Container from '../Container/index.jsx';
const NavBar = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <Container>
            <div className={styles.cont1}>
                <Toggle2 setToggle={setToggle} />
            </div>
            {toggle && <Sidebarnew setToggle={setToggle} />}
        </Container>
    )
}

export default NavBar