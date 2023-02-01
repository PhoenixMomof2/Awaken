import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="main">
      <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home/>} /> 
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>} /> 
        </Routes>
    </div>
  )
}

export default App
