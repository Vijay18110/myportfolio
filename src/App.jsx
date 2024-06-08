import React from 'react'
import Navebar from './components/Navbar'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Works from './components/portfolio'
import Client from './components/client'
import Contactme from './components/constactme'
import Footer from './components/footer'
function App() {
    return (
        <>
            <Navebar></Navebar>
            <Intro></Intro>
            <Skills></Skills>
            <Works></Works>
            <Client></Client>
            <Contactme></Contactme>
            <Footer></Footer>
        </>
    )
}
export default App