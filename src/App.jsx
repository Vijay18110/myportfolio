import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import ContextProvider from './store/context.jsx'
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/about'));
const Education = React.lazy(() => import('./pages/Education'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Skill = React.lazy(() => import('./pages/skills'));
const Project = React.lazy(() => import('./pages/Project'));
const Public = React.lazy(() => import('./routes/Public'));
function App() {
    return (
        <ContextProvider>
            <Suspense>
                <Routes>
                    <Route path='/' element={<Navigate to="/home" />} />
                    <Route path='/home' element={<Public element={<Home />} />} />
                    <Route path='/about' element={<Public element={<About />} />} />
                    <Route path='/education' element={<Public element={<Education />} />} />
                    <Route path='/project' element={<Public element={<Project />} />} />
                    <Route path='/contact' element={<Public element={<Contact />} />} />
                    <Route path='/skills' element={<Public element={<Skill />} />} />
                </Routes>
            </Suspense>
        </ContextProvider>
    )
}
export default App