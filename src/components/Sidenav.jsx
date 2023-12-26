import React from 'react';
import { FaBook, FaCogs, FaEye, FaHome, FaPen, FaQuestionCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useAuth } from '../ContextAPI';

const Sidenav = () => {
  const { user } = useAuth();
  return (
    <div className='w-screen bg-slate-300 flex h-screen'>
      <div className='p-2 w-[200px] py-8 bg-white shadow shadow-black h-full flex flex-col justify-between uppercase'>
        <h1 className=' font-light flex items-center text-center w-full'>{user.firstName}</h1>
        <div className='h-[280px] flex flex-col justify-between px-1 text-slate-700 font-semibold text-sm'>
          <NavLink to='/dashboard' className='border-t flex items-center hover:translate-x-2 transition active'><FaHome className='mr-2' /> Overview</NavLink>
          <NavLink to='course' className='border-t flex items-center hover:translate-x-2 transition'><FaBook className='mr-2' />Add Course</NavLink>
          <NavLink to='add' className='border-t flex items-center hover:translate-x-2 transition'><FaQuestionCircle className='mr-2' />Add Question</NavLink>
          <NavLink to='delete' className='border-t flex items-center text-sm hover:translate-x-2 transition'><MdClose className='mr-2' />Delete Question</NavLink>
          <NavLink to='edit' className='border-t flex items-center hover:translate-x-2 transition'><FaPen className='mr-2' />Edit Question</NavLink>
          <NavLink to='view' className='border-t border-b pb-5 flex items-center text-sm hover:translate-x-2 transition'><FaEye className='mr-2' />View Question</NavLink>
        </div>
        <Link to='generate' className='font-bold text-slate-600 hover:translate-x-4 transition items-center text-sm flex hover:scale-125 bg-lime-400 p-1 hover:bg-transparent'><FaCogs className='mr-2' />Generate</Link>
      </div>
      <div className=' w-full pl-10 pr-3 pt-10 overflow-y-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Sidenav