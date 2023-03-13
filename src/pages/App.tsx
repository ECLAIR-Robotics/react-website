import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Members from './Members';
import Projects from './Projects';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
const homepage = () => {
  return  <Homepage/>
}
const about = () => {
  return  <About/>
}
const members = () => {
  return  <Members/>
}
const projects = () => {
  return  <Projects/>
}

function App() {
  return (
    <Router>
      <div>
      <ResponsiveAppBar />
      </div>
      <Routes>
      <Route path="/homepage" Component={homepage} />
      <Route path="/about" Component={about} />
      <Route path="/members" Component={members} />
      <Route path="/projects" Component={projects} />
      </Routes>
    </Router>
  )
}

export default App
