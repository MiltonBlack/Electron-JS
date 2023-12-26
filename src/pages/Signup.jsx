import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI';

const Signup = () => {
    const navigate = useNavigate();
    const { CreateLecturer, success } = useAuth();
    const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        schoolName: "",
        accessID: "",
        password: "",
        confirmPassword: ""
    });
    const { email, firstName, lastName, schoolName, accessID, password, confirmPassword } = form;

    function onChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    console.log(form);

    function Register(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            CreateLecturer(firstName, lastName, email, password, accessID, schoolName)
        } else {
            console.log("Passwords Dont Match");
        }
        console.log("register");
    }

    useEffect(() => {
        if (success === true) {
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [success]);
    console.log(success);
    return (
        <div id="register" className='bg-slate-700 w-screen h-screen flex text-white'>
            <div className='flex-1 h-full justify-between flex flex-col p-16'>
                <div class="font-semibold text-xl uppercase">Dice</div>
                <div class="text-sm">
                    <h1 class="text-4xl font-thin mb-3">Dont Have An Account?</h1>
                    <p>Register to access all the features of our services.</p>
                    <p>Manage your Business in one Place. it's free!</p>
                    <div></div>
                </div>
            </div>
            <div className='flex-1 backdrop-blur-sm backdrop-brightness-75'>
                <form class="px-8 py-10 flex flex-col items-start justify-between h-full text-sm font-thin">
                    <h1 class="text-3xl font-light">Sign up</h1>
                    <div class="flex flex-col w-full">
                        <label for="">Email</label>
                        <input type="text" placeholder="customer@gmail.com" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name="email" value={email} onChange={onChange} />
                    </div>
                    <div class="flex flex-col w-full">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="First Name" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name='firstName' value={firstName} onChange={onChange} />
                    </div>
                    <div class="flex flex-col w-full">
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Last Name" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name='lastName' value={lastName} onChange={onChange} />
                    </div>
                    <div class="flex flex-col w-full">
                        <label htmlFor="">School Name</label>
                        <input type="text" placeholder="Your School Name..." class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name='schoolName' value={schoolName} onChange={onChange} />
                    </div>
                    <div class="flex flex-col w-full">
                        <label htmlFor="">Access ID Code</label>
                        <div className='flex'>
                            <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name='accessID' value={accessID} onChange={onChange} />
                            <FaKey />
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <label htmlFor="">Password</label>
                        <div className='flex'>
                            <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name='password' onChange={onChange} />
                            <FaEye />
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <label htmlFor="">Confirm Password</label>
                        <div className='flex'>
                            <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name='confirmPassword' value={confirmPassword} onChange={onChange} />
                            <FaEyeSlash />
                        </div>
                    </div>
                    <div class="flex items-center text-sm w-full">
                        <input type="checkbox" name="" id="" class="mr-3 p-2 rounded bg-transparent" />
                        <span class="text-xs">I agree to the policies in <b class="font-medium">Terms of Service</b></span>
                    </div>
                    <div class="">
                        <button class="border p-2 bg-cyan-900 text-white font-medium w-28 mr-2" onClick={Register}>
                            Sign up
                        </button>
                        <Link to='/login' class="text-sm">Have an Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup