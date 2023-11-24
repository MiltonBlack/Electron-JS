import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

const EditQuestions = () => {
  return (
    <div>
      <Header title={'Edit Questions'} />
      <div className='my-10'></div>
      <Card>
        <span className='uppercase my-2 font-medium'>course</span>
        <select name="" id="" defaultValue='select' className='border rounded border-slate-400 p-2 my-2'>
          <option value="1">Computer Science and Informatics</option>
          <option value="1">Petroleum and Gas Engineering</option>
          <option value="1">Mechanical Engineering</option>
          <option value="1">Chemical Engineering</option>
          <option value="1">PHYSICS</option>
        </select>
        <div className='flex my-4'>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-2 font-medium uppercase'>Course Code</span>
            <input type='' className='border rounded border-slate-400 p-2 mr-2' />
          </div>
          <div className='flex-1 flex flex-col'>
            <span className='mr-4 my-2 font-medium uppercase'>Semester</span>
            <select name="" id="" className='border rounded border-slate-400 p-2 ml-2'>
              <option value="">1st Semester</option>
              <option value="">2nd Semester</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <span className='mr-4 my-2 font-medium uppercase'>Question ID</span>
            <input type="text" className='border rounded border-slate-400 p-2 mr-2' />
          </div>
          <div className='flex flex-col'>
            <span className='mr-4 my-2 font-medium uppercase'>Access ID</span>
            <input type="text" className='border rounded border-slate-400 p-2 mr-2' />
          </div>
        </div>
        <span className='uppercase my-2 font-medium'>Question</span>
        <textarea className='border rounded border-slate-400 px-2' placeholder='Type Your Question Here...' />
        <div className='my-8 flex w-[300px] justify-between text-white font-normal'>
          <button className='border-black border py-2 px-6 bg-lime-700'>Update</button>
          <button className='border border-black py-2 px-6 bg-red-700'>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default EditQuestions