import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

const Questions = () => {
  return (
    <div>
      <Header title='All Questions' />
      <div className='my-10'></div>
      <Card>
        <span className='uppercase my-1 font-medium'>Select A Course to Display all Questions</span>
        <select name="" id="" className='border rounded border-slate-400 p-2 my-2'>
          <option value="1">Computer Science and Informatics</option>
          <option value="1">Petroleum and Gas Engineering</option>
          <option value="1">Mechanical Engineering</option>
          <option value="1">Chemical Engineering</option>
          <option value="1">PHYSICS</option>
        </select>
      </Card>
      <Card>
        <table>
          <thead>
          </thead>
          <tbody>
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Questions