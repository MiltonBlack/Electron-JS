import React from 'react'
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Images } from '../assets/Images';

const Signup = () => {
    return (
        <div id="register" className='bg-slate-700 w-screen h-screen flex text-white'>
            <div className='flex-1'></div>
            <div className='flex-1 backdrop-blur-sm backdrop-brightness-75'>
                <form class="px-8 py-10 flex flex-col items-start justify-between h-full text-sm font-thin">
                    <h1 class="text-3xl font-light">Sign up</h1>
                    <div class="flex flex-col w-full">
                        <label for="">Email</label>
                        <input type="text" placeholder="customer@gmail.com" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="">First Name</label>
                        <input type="text" placeholder="First Name" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="">Last Name</label>
                        <input type="text" placeholder="Last Name" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="">School Name</label>
                        <input type="text" placeholder="Your School Name..." class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="">Access ID Code</label>
                        <div className='flex'>
                            <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
                            <FaKey />
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="">Password</label>
                        <div className='flex'>
                            <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
                            <FaEye />
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="">Confirm Password</label>
                        <div className='flex'>
                            <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" />
                            <FaEyeSlash />
                        </div>
                    </div>
                    <div class="flex items-center text-sm w-full">
                        <input type="checkbox" name="" id="" class="mr-3 p-2 rounded bg-transparent" />
                        <span class="text-xs">I agree to the policies in <b class="font-medium">Terms of Service</b></span>
                    </div>
                    <div class="">
                        <Link to='/login' >
                            <button class="border p-2 bg-cyan-900 text-white font-medium w-28 mr-2">
                                Sign up
                            </button>
                        </Link>
                        <Link to='/login' class="text-sm">Have an Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup