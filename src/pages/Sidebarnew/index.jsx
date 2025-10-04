import React from 'react';
import styles from './index.module.css';
import { motion } from 'framer-motion';
import { Navigation } from '../NavigationBar';
import { MdDelete } from 'react-icons/md';
import { GrCut } from 'react-icons/gr';
import { TiUserDelete } from 'react-icons/ti';
import { GiCrossMark } from 'react-icons/gi';
import Container from '../../components/Container';
const Sidebarnew = ({ setToggle }) => {
    return (
        <>
            <motion.div className={styles.sidebarCont}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}>
                <div className='text-end  fs-3 text-danger'>

                    <span onClick={() => setToggle((p) => !p)} className='bg-light px-2 py-1 rounded-1'
                    ><GiCrossMark /></span>
                </div>
                <Navigation setToggle={setToggle} />
            </motion.div>
            <div className={styles.sidebarCont2}>
            </div>
        </>
    )
}
export default Sidebarnew