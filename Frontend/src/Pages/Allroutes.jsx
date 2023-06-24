import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import LoginPage from './Login'
import SignupPage from './Signup'
import Contact from './Contact'
import Chat from './ChatPage'


const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/Signup' element={<SignupPage/>}/>
      <Route path='/help' element={<Contact/>}/>
      <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
