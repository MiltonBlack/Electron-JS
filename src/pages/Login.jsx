import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CircularProgress, Snackbar, Alert, Slide } from '@mui/material';
import { useAuth } from '../ContextAPI';

const Login = () => {
  const navigate = useNavigate();
  const { LoginUser, info, success, error, loading } = useAuth();
  const [anyError, setAnyError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    accessID: ""
  });
  const { email, password, accessID } = form;

  function onChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    };
  };
  console.log(form);

  async function Signin(e) {
    e.preventDefault();
    if (form.email !== "" && form.password !== "" && form.accessID !== "") {
      LoginUser(email, password, accessID);
      console.log("login");
    } else {
      console.log("empty data" + form);
    };
    console.log(info);
  }
  useEffect(() => {
    if (info) {
      navigate('/dashboard')
    }
  }, [info])
  return (
    <div className='bg-slate-700 w-screen h-screen flex text-white relative' id='login'>
        <Snackbar autoHideDuration={4000} open={error} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert sx={{ width: '100%' }} severity='warning' >
            {error}
          </Alert>
        </Snackbar>
        <Snackbar autoHideDuration={3000} open={success} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert sx={{ width: '100%' }} severity='success' >
            Signin Successfull!!
          </Alert>
        </Snackbar>
      <div className='flex-1 backdrop-blur-sm backdrop-brightness-75'>
        <form class="px-8 py-32 flex flex-col items-start justify-between h-full text-sm font-thin">
          <h1 class="text-3xl font-light">Login</h1>
          <div class="flex flex-col w-full">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="customer@gmail.com" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name="email" onChange={onChange} value={form.email} />
          </div>
          <div class="flex flex-col w-full">
            <label htmlFor="">Access Code</label>
            <input type="text" placeholder="your access code" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name="accessID" onChange={onChange} value={form.accessID} />
          </div>
          <div class="flex flex-col w-full">
            <label htmlFor="">Password</label>
            <div>
              <input type="password" placeholder="xxxxxxxxxxxx" class="border-b-2 w-full bg-transparent border-stone-400/25 outline-none active:border-stone-500 hover:border-stone-500" name='password' onChange={onChange} value={form.password} />
              <i class=""></i>
            </div>
          </div>
          <div class="flex flex-col">
            <button class="border p-2 bg-cyan-900 text-white font-medium w-[80%] mr-2" onClick={Signin}>{loading ? <CircularProgress size={28} /> : "Login"}</button>
            <Link to='/dashboard' class="text-sm">Dont Have an Account?</Link>
          </div>
        </form>
      </div>
      <div className='flex-1 bg-teal-600/50 h-full justify-between flex flex-col p-16 items-end w-full'>
        <div class="font-semibold text-xl uppercase">Automated MCQ</div>
        <div class="text-sm text-right">
          <h1 class="text-4xl font-thin mb-3">Already Have An Account?</h1>
          <p>Login to access all the features of our services.</p>
          <p>Manage all your Automated MCQs in one Place. it's free!</p>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Login