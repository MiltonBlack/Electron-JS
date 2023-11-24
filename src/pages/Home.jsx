import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-screen h-screen text-white bg-zinc-900 px-6 py-12 flex flex-col items-start md:items-center justify-between'>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='text-slate-300 text-3xl font-extrabold uppercase text-center'>Automated Multi Choice Question Paper Generator System</h1>
        <p className='uppercase py-2'>Efficiently  Multi Choiced Typed Question Papers Automatically using this Application</p>
      </div>
      <div className='flex flex-col w-[65%] md:w-[60%] items-center'>
        <h2 className='text-6xl font-thin my-4'>Lets' Get You Started</h2>
        <div className='flex justify-between w-full my-4'>
          <Link to='register' className='flex-1 mr-2'>
            <button className='border w-full p-2 bg-slate-400 uppercase font-semibold text-stone-900 text-xl hover:scale-90'>Register</button>
          </Link>
          <Link to='login' className='flex-1 ml-2'>
          <button className='border w-full p-2 bg-slate-400 uppercase font-semibold text-stone-900 text-xl hover:scale-90'>Login</button>
          </Link>
        </div>
      </div>
      <span className='uppercase font-thin text-sm'>By: Milton Azibapu</span>
    </div>
  )
}

export default Home