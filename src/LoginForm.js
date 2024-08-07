// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ setIsAuthenticated }) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your actual user validation logic
    if (name === "yoga" && pass === "123") {
      setIsAuthenticated(true);
      sessionStorage.setItem('user', JSON.stringify({ name }));
      sessionStorage.setItem('expiresAt', new Date().getTime() + 60000); // 1 minute session
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
