import React, { memo, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Members from './Sponsors';
import Projects from './Projects';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Contact from './Contact';
import Footer from '../components/Footer';
import Sponsors from './Sponsors';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyApKv2_Muv15F14Vfuo04rwuqxUcTtMy9o",
  authDomain: "eclair-website-387316.firebaseapp.com",
  projectId: "eclair-website-387316",
  storageBucket: "eclair-website-387316.appspot.com",
  messagingSenderId: "664767979379",
  appId: "1:664767979379:web:7904edda15a1350c3b6f06",
  measurementId: "G-XVQ8FB05W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const homepage = () => {
  return  <Homepage/>
}
const about = () => {
  return  <About/>
}
const members = () => {
  return  <Sponsors/>
}
const projects = () => {
  return  <Projects/>
}
const contact = () => {
  return  <Contact/>
}


const App: React.FC = () => {

  return (
    <Router>

      <div style={{position:'fixed', zIndex:'100', width:'100%'}}>
      <ResponsiveAppBar />
      
      </div>
      <Routes>
        <Route path="/" Component={homepage} />
        <Route path="/about" Component={about} />
        <Route path="/sponsors" Component={members} />
        <Route path="/projects" Component={projects} />
        <Route path="/contact" Component={contact} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App