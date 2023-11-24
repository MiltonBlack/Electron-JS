import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

const AddMarks = () => {
  return (
    <div>
      <Header title='Add Marks' />
      <div className='my-10'></div>
      <Card>
        <input type="text" placeholder='search...' />
        <span className='uppercase my-1 font-medium'>Question</span>
        <textarea className='border rounded border-slate-400 px-2' placeholder='Type Your Question Here...' />
        <div className='flex my-4 items-center'>
          <span className='uppercase font-medium mr-2'>Assign a Score (Mark)</span>
          <input type="text" className='border rounded border-slate-400 p-2 mr-2 w-14' />
        </div>
        <div className='my-4 flex w-[300px] justify-between text-white font-normal'>
          <button className='border-black border py-2 px-6 bg-lime-700'>Submit</button>
          <button className='border border-black py-2 px-6 bg-red-700'>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default AddMarks