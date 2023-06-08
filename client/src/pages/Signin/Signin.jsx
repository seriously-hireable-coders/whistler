import React, { useState } from 'react'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailed } from '../../redux/userSlice';

import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    if (!username || !password) {
      window.alert('Please enter a username and password.');
      return;
    }

    try {
      const res = await axios.post("/auth/signin", { username, password });
      dispatch(loginSuccess(res.data));
      navigate('/');
      // console.log('res', res.data);
    } catch (err) {
      dispatch(loginFailed());
      // console.log(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    if (!email) {
      window.alert("Email is required to create a Whistler account");
      return;
    }

    if (!username) {
      window.alert("Username is required to create a Whistler account");
      return;
    }

    if (!password) {
      window.alert("Password is required to create a Whistler account");
      return;
    }
  
    try {
      const res = await axios.post("/auth/signup", { username, password, email });
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (err) {
      dispatch(loginFailed());
      // console.log(err);
    }
  };


  return <form className="bg-pink-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
    <h2 className="text-3xl text-black font-bold text-center">Sign in to your Whistler account you beautiful person!</h2>

    <input
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      placeholder="username"
      className="text-xl text-black py-2 rounded-full px-4"
      data-testid="signIn-username-input"
    />
    <input
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="password"
      className="text-xl text-black py-2 rounded-full px-4"
      data-testid="signIn-pw-input"
    />

    <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white" data-testid="signIn-btn" onClick={handleLogin}>
      Sign In
    </button>

    <p className="text-center text-black text-xl">Don't have an account? Why?</p>

    <input
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      placeholder="username"
      className="text-xl text-black py-2 rounded-full px-4"
    />
    <input
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="password"
      className="text-xl text-black py-2 rounded-full px-4"
    />
    <input
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="email"
      required
      className="text-xl text-black py-2 rounded-full px-4"
    />

    <button
      onClick={handleSignup}
      className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
      type="submit"
    >
      Sign Up
    </button>
  </form>
};

export default Signin;
