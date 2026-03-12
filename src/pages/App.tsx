import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import Nav      from '../components/Nav';
import Footer   from '../components/Footer';
import Homepage from './Homepage';
import About    from './About';
import Projects from './Projects';
import Sponsors from './Sponsors';
import Contact  from './Contact';

import { useCursor } from '../hooks/useCursor';

import '../styles/globals.css';

// ─── Firebase ──────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey:            'AIzaSyApKv2_Muv15F14Vfuo04rwuqxUcTtMy9o',
  authDomain:        'eclair-website-387316.firebaseapp.com',
  projectId:         'eclair-website-387316',
  storageBucket:     'eclair-website-387316.appspot.com',
  messagingSenderId: '664767979379',
  appId:             '1:664767979379:web:7904edda15a1350c3b6f06',
  measurementId:     'G-XVQ8FB05W1',
};

initializeApp(firebaseConfig);

// ─── Scroll to top on route change ─────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ─── App shell ─────────────────────────────────────────────────────────────
function AppShell() {
  useCursor();

  return (
    <>
      {/* Atmosphere layers */}
      <div className="grid-bg" />
      <div className="noise" />
      <div className="scanline" />

      {/* Custom cursor */}
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursor-ring" />

      <Nav />

      <main>
        <Routes>
          <Route path="/"         element={<Homepage />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppShell />
    </Router>
  );
}
