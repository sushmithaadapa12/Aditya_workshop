import React, { useState } from 'react';
import './App.css'; // Optional CSS file for styling

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful!');
        window.location.href = '/dashboard'; // Change to the desired route
      } else {
        const data = await response.json();
        alert(data.message || 'Registration failed!');
      }
    } catch (error) {
      alert('Error connecting to the server.');
    }
  };

  return (
    <div className="app">
      <nav className="nav">
        <h1>Registration Page</h1>
      </nav>
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Registration Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
