import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { redirect } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [age, setAge] = useState("")
  const { signup, setErrors } = useContext(UserContext)
  
  const handleSubmit = (e) => {
    e.preventDefault();
      fetch('/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          age
        }),
      })
      .then(res => res.json())
      .then(user => {
        if(!user.errors){
          signup(user)
          redirect('/me')
        } else {
          setUsername("")
          setPassword("")
          setPasswordConfirmation("")
          setAge("")
          const errorLis = user.errors.map(e => <li>{e}</li>)
          setErrors(errorLis)
        }
      });
    }

  return (
    <div className="masthead-content">
      <div className="container px-5">
        <form onSubmit={handleSubmit}>
          <label for="exampleInputPassword1" class="form-label">Username</label>
          <input
            type="text"
            id="user_name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="integer"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;