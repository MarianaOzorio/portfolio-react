import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage.tsx';
import About from './Pages/About/About.tsx';
import Contacts from './Pages/Contacts/Contacts.tsx';
import Projects from './Pages/Projects/Projects.tsx';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
