import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Header from './Header'
import { UserProvider } from '../context/UserContext';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import BookList from './BookList';
import Group from './Group';
//, { useState, useEffect } 

const App = () => {
  
  
  return (
    <div className="main">
      <UserProvider>
        <Navbar />
        <Header />
          <Routes>
            <Route exact path='/home' element={<Home />} /> 
            <Route exact path='/login' element={<Login />} /> 
            <Route exact path='/signup' element={<SignUp />} /> 
            <Route exact path='/books' element={<BookList />} /> 
            <Route exact path='/groups' element={<Group />} /> 
          </Routes>
      </UserProvider>
    </div>
  )
}
export default App
