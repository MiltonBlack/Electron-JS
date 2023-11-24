import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

const AddQuestions = () => {
  return (
    <div>
      <Header title='Add Questions' />
      <div className='my-7'></div>
      <Card>
        <span className='uppercase my-1 font-medium'>course</span>
        <select name="" id="" defaultValue='select' className='border rounded border-slate-400 p-2 my-2'>
          <option value="1">Computer Science and Informatics</option>
          <option value="1">Petroleum and Gas Engineering</option>
          <option value="1">Mechanical Engineering</option>
          <option value="1">Chemical Engineering</option>
          <option value="1">PHYSICS</option>
        </select>
        <div className='flex my-2 items-center'>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-1 font-medium uppercase'>Course Code</span>
            <input type='' className='border rounded border-slate-400 p-1 mr-2' />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-1 font-medium uppercase'>Semester</span>
            <select name="" id="" className='border rounded border-slate-400 p-1 ml-2'>
              <option value="">1st Semester</option>
              <option value="">2nd Semester</option>
            </select>
          </div>
          <div className='flex-1 items-start flex flex-col ml-3'>
            <span className='uppercase font-medium mr-2 my-1'>Score (Mark)</span>
            <input type="text" className='border rounded border-slate-400 p-1 w-24' />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-1 font-medium uppercase'>Type</span>
            <select name="" id="" className='border rounded border-slate-400 p-1 ml-2'>
              <option value="">Objective</option>
              <option value="">Subjective</option>
              <option value="">True/False</option>
              <option value="">Theory/Essay</option>
            </select>
          </div>
        </div>
        <span className='uppercase my-1 font-medium'>Question</span>
        <textarea className='border rounded border-slate-400 px-2' placeholder='Type Your Question Here...' />
        <div className='flex my-2 font-medium'>
          <span className='uppercase'>objective</span>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option A' />
          <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option B' />
          <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option C' />
          <input type="text" className='border rounded border-slate-400 p-1 mr-2' placeholder='Option D' />
        </div>
        <div className='my-7 flex w-[300px] justify-between text-white font-normal'>
          <button className='border-black border py-2 px-6 bg-lime-700'>Submit</button>
          <button className='border border-black py-2 px-6 bg-red-700'>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default AddQuestions