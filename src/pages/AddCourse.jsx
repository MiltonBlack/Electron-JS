import React, { useState } from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import Header from '../components/Header';
import Card from '../components/Card';
import { useAuth } from '../ContextAPI';
// import { v4 as uuidv4 } from 'uuid';

function AddCourse() {
  const { RegisterCourse, info, user } = useAuth();
  const [accessID, setAccessID] = useState(user.accessID);
  const [anyError, setAnyError] = useState(false);
  // const id = uuidv4();
  // const id = Math.floor(Math.random() * 200);

  const [form, setForm] = useState({
    user_id: user._id,
    title: "",
    courseCode: "",
    semester: "1",
    timeAllowed: "2 Hours, 30 Mins",
    lecturer: info?.firstName + " " + info?.lastName,
  });

  const { user_id, title, courseCode, semester, timeAllowed, lecturer } = form;

  function onChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setAnyError(false);
      return;
    };
  };

  function handleClear() {
    setForm({
      user_id: user._id,
      title: "",
      courseCode: "",
      semester: "",
      timeAllowed: "",
      lecturer: info?.firstName + " " + info?.lastName,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || courseCode === "" || semester === "") {
      setAnyError(true);
    } else if (info?.accessID === accessID) {
      RegisterCourse(user_id, title, courseCode, semester, timeAllowed, lecturer);
    }
  }

  return (
    <div>
      <Header title={'Add Course'} />
      <div className='my-10'></div>
      <Snackbar autoHideDuration={4000} open={anyError} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning'>
          "Data Input Fields cannot be empty!!!"
        </Alert>
      </Snackbar>
      <Card>
        <span className='uppercase my-2 font-medium'>course title</span>
        <input type="text" className='border rounded border-slate-400 p-2' placeholder='Type Your Question Here...' name='title' onChange={onChange} value={form.title} />
        <div className='grid grid-cols-4 gap-4 my-4'>
          <div className='flex-1 flex flex-col'>
            <span className='mr-2 my-2 font-medium uppercase'>Course Code</span>
            <input type='' className='border rounded border-slate-400 p-2 mr-2' name='courseCode' onChange={onChange} value={form.courseCode} />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-2 font-medium uppercase'>Access ID</span>
            <input type='' className='border rounded border-slate-400 p-2 mr-2' name='accessID' onChange={(e) => setAccessID(e.target.value)} />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-2 my-2 font-medium uppercase'>Semester</span>
            <select id="" className='border rounded border-slate-400 p-2 ml-2' name='semester' onChange={onChange} >
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
            </select>
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-2 my-2 font-medium uppercase'>Time Allowed</span>
            <select name="timeAllowed" id="" className='border rounded border-slate-400 p-2 ml-2' onChange={onChange}>
              <option value="30 Mins">30 mins</option>
              <option value="1 Hour">1 Hour</option>
              <option value="1 Hour 15 Mins">1 Hour 15 mins</option>
              <option value="1 Hour 30 Mins">1 Hour 30 mins</option>
              <option value="1 Hour 45 Mins">1 Hour 45 mins</option>
              <option value="2 Hours">2 Hours</option>
              <option value="2 Hours 30 Mins">2 Hours 30 mins</option>
              <option value="2 Hours 45 Mins">2 Hours 45 mins</option>
              <option value="3 Hours">3 Hours</option>
            </select>
          </div>
        </div>
        <span className='uppercase my-2 font-medium'>Lecturer Name</span>
        <input className='border rounded border-slate-400 p-2' value={form.lecturer} readOnly />
        <div className='my-8 flex w-[300px] justify-between text-white font-normal'>
          <button className='border-black border py-2 px-6 bg-lime-700' onClick={handleSubmit}>Add Course</button>
          <button className='border border-black py-2 px-6 bg-red-700' onClick={handleClear}>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default AddCourse