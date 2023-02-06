import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SignUp from "../components/authorization/SignUp";
import BookList from "../components/books/BookList";
import Group from "../components/groups/Group";
import UserProfile from "../components/users/UserProfile";
import { UserProvider } from "../context/UserContext";

const App = () => {
  return (
    <div className="main">
      <UserProvider>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/groups" element={<Group />} />
          <Route exact path="/users/:id" element={<UserProfile />} />
        </Routes>
      </UserProvider>
    </div>
  );
};
export default App;
