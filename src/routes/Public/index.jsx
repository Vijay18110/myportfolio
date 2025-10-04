import React from 'react'
import NavBar from '../../components/navbar';
import { Outlet } from 'react-router-dom';
import Container from '../../components/Container'
const Public = ({ element }) => {
    return (
        <Container>
            <NavBar />

            <div>{element}</div>
        </Container>
    )
}
export default Public;