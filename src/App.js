import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Code from './components/Code';
import About from './components/About';
import Notes from './components/Notes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Dark Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#000000';
      setText("Light Mode");
    }
    else {
      setMode("light");
      setText("Dark Mode");
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} text={text} mode={mode} />
        <Routes>
          <Route exact path="/" element={<Code mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/notes" element={<Notes mode={mode}/>} />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}


export default App;
