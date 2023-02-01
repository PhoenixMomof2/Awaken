import React from 'react'

const Login = ({ onLogin }) => {

  const [user_name, setUser_Name] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user_name}
        onChange={(e) => setUser_Name(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login