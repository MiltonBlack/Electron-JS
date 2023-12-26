import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../ContextAPI'

const Header = ({ title }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  function Logout() {
    logout();
    navigate('/login');
  }
  return (
    <div className='flex justify-between w-full'>
      <h1 className='font-bold text-2xl text-slate-900 uppercase'>{title}</h1>
      <button className='border p-1 text-white bg-red-500 font-bold' onClick={Logout}>Logout</button>
    </div>
  )
}

export default Header