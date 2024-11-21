import React from 'react'
import NavBar from '../../components/navbar';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
const Public = ({ element }) => {
    return (
        <>
            <NavBar />
            <Outlet />
            <div>{element}</div>
        </>
    )
}
export default Public;