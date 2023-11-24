import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

function AddCourse() {
  return (
    <div>
      <Header title={'Add Course'}/>
      <div className='my-10'></div>
      <Card>
        <span className='uppercase my-2 font-medium'>course title</span>
        <input type="text" className='border rounded border-slate-400 p-2' placeholder='Type Your Question Here...'/>
        <div className='grid grid-cols-4 gap-4 my-4'>
          <div className='flex-1 flex flex-col'>
            <span className='mr-2 my-2 font-medium uppercase'>Course Code</span>
            <input type='' className='border rounded border-slate-400 p-2 mr-2' />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-2 font-medium uppercase'>Access ID</span>
            <input type='' className='border rounded border-slate-400 p-2 mr-2' />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-2 my-2 font-medium uppercase'>Semester</span>
            <select name="" id="" className='border rounded border-slate-400 p-2 ml-2'>
              <option value="">1st Semester</option>
              <option value="">2nd Semester</option>
            </select>
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-2 my-2 font-medium uppercase'>Time Allowed</span>
            <select name="" id="" className='border rounded border-slate-400 p-2 ml-2'>
              <option value="">30 mins</option>
              <option value="">1 Hour</option>
              <option value="">1 Hour 15 mins</option>
              <option value="">1 Hour 30 mins</option>
              <option value="">1 Hour 45 mins</option>
              <option value="">2 Hours</option>
              <option value="">2 Hours 30 mins</option>
            </select>
          </div>
        </div>
        <span className='uppercase my-2 font-medium'>Lecturer Name</span>
        <input className='border rounded border-slate-400 p-2' placeholder='Type Your Question Here...' />
        <div className='my-8 flex w-[300px] justify-between text-white font-normal'>
          <button className='border-black border py-2 px-6 bg-lime-700'>Add Course</button>
          <button className='border border-black py-2 px-6 bg-red-700'>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default AddCourse