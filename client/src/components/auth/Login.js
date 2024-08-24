import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Validate input fields
    const errors = {};
    if (!id) errors.id = 'ID is required';
    if (!password) errors.password = 'Password is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Submit form data to API
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        // Handle successful login
        console.log('Login successful');
        // Redirect to the appropriate dashboard based on user type
        // For demonstration, assume we receive userType from the API
        const data = await response.json();
        const userType = data.userType; // Assume this is received from API response

        switch (userType) {
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'staff':
            navigate('/staff-dashboard');
            break;
          case 'instructor':
            navigate('/instructor-dashboard');
            break;
          default:
            navigate('/'); // Redirect to a default or error page
        }
      } else {
        // Handle login errors
        const data = await response.json();
        setErrors(data.errors || {});
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: 'An error occurred' });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container p-4 bg-white rounded shadow-sm border">
        <h1 className="mb-4 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          {errors.general && (
            <div className="alert alert-danger" role="alert">
              {errors.general}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={`form-control ${errors.id ? 'is-invalid' : ''}`}
              placeholder="Enter your ID"
            />
            {errors.id && <div className="invalid-feedback">{errors.id}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Enter your password"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <a href="#" className="text-decoration-none">Forgot password?</a>
            <div className="form-check">
              <input type="checkbox" id="captcha" className="form-check-input" required />
              <label htmlFor="captcha" className="form-check-label">I'm not a robot</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center text-muted">By continuing, you agree to our <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>.</p>
      </div>
    </div>
  );
}

export default LoginPage;
