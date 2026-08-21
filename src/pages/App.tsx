import React, {  useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Homepage from './Homepage';
import Projects from './Projects';
import Login from './Login';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Contact from './Contact';
import Footer from '../components/Footer';
import Sponsors from './Sponsors';
import EclairDrawer from '../components/EclairDrawer';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey:            process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:     process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// testing API key security


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const homepage = () => {
  return <Homepage />
}
const about = () => {
  return <About />
}
const members = () => {
  return <Sponsors />
}
const projects = () => {
  return <Projects />
}
const contact = () => {
  return <Contact />
}
const login = () => {
  return <Login />
}

const App: React.FC = () => {

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSmol, setIsSmol] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmol(window.innerWidth < 1000);
    };

    const userAgent = navigator.userAgent.toLowerCase();

    setIsMobile(
      /iphone|ipad|ipod|android|blackberry|windows phone/.test(userAgent)
    );

    // Check the screen size immediately when the page loads
    handleResize();

    // Then continue checking whenever the window is resized
    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component is removed
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Router>

      <div style={{ position: 'fixed', zIndex: '100', width: '100%' }}>

        {isMobile || isSmol ? (<EclairDrawer />) : (<ResponsiveAppBar />)}

        {/* <ResponsiveAppBar /> */}
        {/* <EclairDrawer /> */}
      </div>
      <Routes>
        <Route path="/" Component={homepage} />
        <Route path="/about" Component={about} />
        <Route path="/sponsors" Component={members} />
        <Route path="/projects" Component={projects} />
        <Route path="/contact" Component={contact} />
        <Route path="/login" Component={login} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App