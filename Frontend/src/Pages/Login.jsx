import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Authintication/action';

import Loader from '../Component/Loader';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading} = useSelector(st=>st.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {token,isAuth} = useSelector(st=>st.authReducer)
  console.log(isAuth);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here
    const payload = {
      email,
      password,
    };

    dispatch(login(payload)).then((result) => {
      navigate('/chat');
    })
    
  };
  if(isLoading){
    return <Loader/>
  }
console.log(token);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Log In Here ✌️</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="submit"
            >
              Log In
            </button>
          </div>
          <br />
        </form>
        <div className=" justify-center">
          <button className="flex bg-blue-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto">
            <FcGoogle width={'50px'} className='mt-1 mr-4' />
            <p> Continue with Google</p>
          </button>
          <br />

          <button className="flex bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto">
            <AiFillGithub width={'50px'} className='mt-1 mr-4' />
            <p> Continue with GitHub</p>
          </button>
        </div>
        <br />
        <Link to={'/signup'}>No Account Make a Account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
