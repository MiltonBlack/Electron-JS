import React, { useEffect, useState } from 'react'
import { Switch, Slide, Snackbar, Alert } from '@mui/material'
import Header from '../components/Header'
import Card from '../components/Card'
import { useAuth } from '../ContextAPI'

const AddQuestions = () => {
  const { CreateQuestions, courses, error } = useAuth();
  const [anyError, setAnyError] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const [code, setCode] = useState('');
  const [courseError, setCourseError] = useState(false);
  const [option, setOption] = useState({
    a: "",
    b: "",
    c: "",
    d: ""
  });

  function findCourse() {
    const single = courses?.find(item => item.title === course);
    setCode(single.courseCode);
  }

  const [form, setForm] = useState({
    course: "",
    course_code: code,
    semester: "1",
    question: "",
    mark: "",
    type: "Objectives",
  });

  const { course, course_code, question, mark, type } = form;

  useEffect(() => {
    if (courses && course) {
      findCourse()
    }
  }, [course]);

  const { a, b, c, d } = option

  function handleOptions(e) {
    setOption({
      ...option,
      [e.target.name]: e.target.value
    })
  }

  function handleCheck(event) {
    setChecked(event.target.checked);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setAnyError(false);
      setCourseError(false);
      return;
    };
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      course_code: code
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      course_code, question, mark, type
    }
    if (code === "" || course_code === "") {
      setCourseError(true);
    } else if (question === "" || type === "") {
      setAnyError(true);
    } else {
      CreateQuestions(body, option);
    }
  }

  function handleClear() {
    setForm({
      course: "",
      course_code: code,
      semester: "1",
      question: "",
      mark: "",
      type: "Objectives",
    });

    setOption({
      a: "",
      b: "",
      c: "",
      d: ""
    });
  }

  return (
    <div>
      <Header title='Add Questions' />
      <div className='my-7'></div>
      <Snackbar autoHideDuration={4000} open={courseError} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning'>
          "Course not Found!!!"
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={4000} open={anyError} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning'>
          "Question Input Field cannot be empty!!!"
        </Alert>
      </Snackbar>
      <Card>
        <span className='uppercase my-1 font-medium'>course</span>
        <select name="course" id="" className='border rounded border-slate-400 p-2 my-2' value={course} onChange={handleChange}>
          <option value="">Select a Course</option>
          {courses.map((item, idx) =>
            <option value={item.title}>{item.title}</option>
          )}
        </select>
        <div className='grid grid-cols-4 gap-4 my-2 items-center'>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-1 font-medium uppercase'>Course Code</span>
            <input type='text' placeholder='Course Code...' className='border rounded border-slate-400 p-1 mr-2' name='course_code' value={code} readOnly />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-1 font-medium uppercase'>Semester</span>
            <select name="semester" id="" className='border rounded border-slate-400 p-1 ml-2' value={form.semester}>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
            </select>
          </div>
          <div className='flex-1 items-start flex flex-col ml-3'>
            <span className='uppercase font-medium mr-2 my-1'>Score (Mark)</span>
            <input type="text" placeholder='Mark...' className='border rounded border-slate-400 p-1 w-24' name='mark' value={mark} onChange={handleChange} />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-1 font-medium uppercase'>Type</span>
            <select name="type" id="" className='border rounded border-slate-400 p-1 ml-2' onChange={handleChange}>
              <option value="Objectives">Objective</option>
              <option value="Subjective">Subjective</option>
              <option value="True/False">True/False</option>
              <option value="Essay">Essay</option>
            </select>
          </div>
        </div>
        <span className='uppercase my-1 font-medium'>Question</span>
        <textarea className='border rounded border-slate-400 px-2' placeholder='Type Your Question Here...' name='question' value={question} onChange={handleChange} />
        <div className='flex my-2 items-center font-medium'>
          <span className='uppercase'>objective</span>
          <Switch
            checked={checked}
            // value={checked}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'controlled' }} />
        </div>
        {type === "Objectives" &&
          (<div className='grid grid-cols-2 gap-4'>
            <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option A' name='a' value={a} onChange={handleOptions} />
            <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option B' name='b' value={b} onChange={handleOptions} />
            <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option C' name='c' value={c} onChange={handleOptions} />
            <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option D' name='d' value={d} onChange={handleOptions} />
          </div>)}
        <div className='my-7 flex w-[300px] justify-between text-white font-normal'>
          <button className='border-black border py-2 px-6 bg-lime-700 hover:scale-95' onClick={handleSubmit}>Submit</button>
          <button className='border border-black py-2 px-6 bg-red-700' onClick={handleClear}>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default AddQuestions