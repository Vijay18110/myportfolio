import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './app.css'
import ContextProvider from './store/context.jsx'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Project from './pages/Project'
import Skill from './pages/skills'
import Public from './routes/Public/index.jsx'
function App() {
    return (
        <ContextProvider>
            <Routes>
                {/* <Route path='/' element={<Navigate to="/home" />} /> */}
                <Route path='/' element={<Public element={<Home />} />} />
                <Route path='/about' element={<Public element={<About />} />} />
                <Route path='/education' element={<Public element={<Education />} />} />
                <Route path='/project' element={<Public element={<Project />} />} />
                <Route path='/contact' element={<Public element={<Contact />} />} />
                <Route path='/skills' element={<Public element={<Skill />} />} />
            </Routes>
        </ContextProvider>
    )
}
export default App