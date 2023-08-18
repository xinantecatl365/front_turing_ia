import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";

const initialForm = {
  username: "",
  password: "",
  admin: 0,
  name: ""
};

const RegisterScreen = () => {
  const [form, setForm] = useState(initialForm);
  const [isAdmin, setIsAdmin] = useState(false);


  const { registerUser, currentUser } = UserAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdminChange = (event) => {
    setIsAdmin(event.target.value === 'admin');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    isAdmin === 'admin' ? form.admin = 1 : form.admin = 0;
    if (!form.username || !form.password || !form.name) {
      alert("Verify you introduced all the fields");
      return;
    }
    try {
      await registerUser(form.username, form.password, form.admin, form.name);
      navigate('/login')
    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-md p-6 bg-secondary rounded shadow-md text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4 font-roboto">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-m font-medium text-primary">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              className="mt-1 p-2 w-full border-primary rounded-md focus:ring-primary focus:border-primary text-primary" />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-m font-medium text-primary">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              onChange={handleChange}
              className="mt-1 p-2 w-full border-primary rounded-md focus:ring-primary focus:border-primary text-primary" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-m font-medium text-primary">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter a password"
              onChange={handleChange}
              className="mt-1 p-2 w-full border-primary rounded-md focus:ring-primary focus:border-primary text-primary" />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-m font-medium text-primary mr-2">Role:</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="user"
                name="role"
                value="user"
                checked={!isAdmin}
                onChange={handleAdminChange}
                className="hidden" />
              <label htmlFor="user" className={`relative cursor-pointer select-none flex items-center text-sm text-primary ${!isAdmin ? 'mr-4' : ''}`}>
                <div className={`w-4 h-4 rounded-full border border-primary mr-2 ${!isAdmin ? 'bg-primary' : ''}`} />
                User
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={isAdmin}
                onChange={handleAdminChange}
                className="hidden" />
              <label htmlFor="admin" className={`relative cursor-pointer select-none flex items-center text-sm text-primary ${isAdmin ? 'mr-4' : ''}`}>
                <div className={`w-4 h-4 rounded-full border border-primary mr-2 ${isAdmin ? 'bg-primary' : ''}`} />
                Admin
              </label>
            </div>
          </div>
          <div className="btn-animation">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md w-full hover:bg-secondary hover:text-primary hover:animate-bounce focus:ring focus:ring-primary focus:ring-offset-2 focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className="text-sm mt-4 text-primary">Already have an account? <a href="http://localhost:3000/login" className="text-secondary hover:text-primary">Login</a></p>
      </div>
    </div>
  );
};

export default RegisterScreen;