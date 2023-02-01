import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';

const App = () => {
  return (
    <div className="main">
      <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home/>} /> 
        </Routes>
    </div>
  )
}

export default App
