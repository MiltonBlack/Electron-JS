import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-slate-700 w-screen h-screen flex text-white' id='login'>
      <div className='flex-1 backdrop-blur-sm backdrop-brightness-75'>
        <form class="px-8 py-32 flex flex-col items-start justify-between h-full text-sm font-thin">
          <h1 class="text-3xl font-light">Login</h1>
          <div class="flex flex-col w-full">
            <label for="">Email</label>
            <input type="text" placeholder="customer@gmail.com" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
          </div>
          <div class="flex flex-col w-full">
            <label for="">Access Code</label>
            <input type="text" placeholder="your access code" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
          </div>
          <div class="flex flex-col w-full">
            <label for="">Password</label>
            <div>
              <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
              <i class=""></i>
            </div>
          </div>
          <div class="flex flex-col">
            <Link to='/dashboard'>
              <button class="border p-2 bg-cyan-900 text-white font-medium w-[80%] mr-2">Login</button>
            </Link>
            <Link to='/dashboard' class="text-sm">Dont Have an Account?</Link>
          </div>
        </form>
      </div>
      <div className='flex-1 bg-teal-600/50'></div>
    </div>
  )
}

export default Login