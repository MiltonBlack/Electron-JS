import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { useAuth } from '../ContextAPI'

const Overview = () => {
  const { info, courses, questions } = useAuth();
  const { firstName, lastName, accessID } = info;
  return (
    <div>
      <Header title={`Welcome ${firstName} ${lastName}`} />
      <div className='my-10'></div>
      <div className='grid grid-cols-3 gap-6'>
        <Card>
          <span className='uppercase my-1 font-medium'>Access ID</span>
          <span className='uppercase my-1 font-medium'>{accessID}</span>
        </Card>
        <Card>
          <span className='uppercase my-1 font-medium'>Total Courses</span>
          <span className='uppercase my-1 font-medium'>{courses?.length}</span>
        </Card>
        <Card>
          <span className='uppercase my-1 font-medium'>Total Questions</span>
          <span className='uppercase my-1 font-medium'>{questions?.length}</span>
        </Card>
      </div>
      <div className='my-5'></div>
      <Card>
        <span className=' font-light text-2xl'>Your Courses</span>
        <ul className='uppercase my-1 font-medium list-disc pl-6'>
          <li>Computer Science</li>
          <li>Animal Science</li>
          <li>Political Science</li>
        </ul>
      </Card>
    </div>
  )
}

export default Overview