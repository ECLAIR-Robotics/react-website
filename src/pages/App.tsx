import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
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
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
        <div className='box'>
          <ThemeProvider theme={theme}>
            <div className='header-left' >
              <img className='left-img' src={Logo} alt='logo' />
            </div>
            <div className='header-right' >
              <h2 className='header-text'>Our mission is to drive innovation in AI and robotics at the undergraduate level.</h2>
              <ECLAIRButton text = "PROJECTS"/>
            </div>
          </ThemeProvider>
        </div>
      </header>
    </div>
  );
}

export default App;
