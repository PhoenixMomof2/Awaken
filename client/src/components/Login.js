import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { redirect } from 'react-router-dom';

const Login = () => {

  const [user_name, setUser_Name] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {login} = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      user_name,
      password
    }

    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
    if (res.ok){
      res.json().then((user) => login(user));
      redirect('/');
    } else {
      res.json().then(() => setError(error));
    }
  });
}

  return (
    <div className="container px-5">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={user_name}
          onChange={(e) => setUser_Name(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={redirect('/me')}>Login</button>
      </form>
      <ul>
        <h3>{error}</h3>
      </ul>
     </div>
  )
}

export default Login