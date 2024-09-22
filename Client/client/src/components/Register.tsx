import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { registerUser } from '../models/authApi'; // Import the registerUser function

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      await dispatch(registerUser(formData));
      // Handle success, redirect, or display a success message
    } catch (error) {
      // Handle error, display error message
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;

