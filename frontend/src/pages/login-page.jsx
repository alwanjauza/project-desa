import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        const { token } = response.data;
        login(token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='bg-cover bg-center bg-[url("/images/background-login.jpg")] h-screen flex items-center justify-center font-Poppins'>
      <div className='bg-white/50 backdrop-blur-lg p-12 rounded-lg shadow-lg w-full max-w-lg'>
        <h2 className='text-3xl font-bold mb-8 text-center text-white'>
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              className='block text-white text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-8 relative'>
            <label
              className='block text-white text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id='password'
              value={password}
              onChange={handlePasswordChange}
              className='shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
            <div
              className='absolute inset-y-3 right-0 pr-3 flex items-center justify-center h-full cursor-pointer'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='gray'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-eye'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
                  <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='gray'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='icon icon-tabler icons-tabler-outline icon-tabler-eye-closed'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4' />
                  <path d='M3 15l2.5 -3.8' />
                  <path d='M21 14.976l-2.492 -3.776' />
                  <path d='M9 17l.5 -4' />
                  <path d='M15 17l-.5 -4' />
                </svg>
              )}
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
