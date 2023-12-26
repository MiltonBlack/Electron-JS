import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { useAuth } from '../ContextAPI'
import { FaTrash, FaPencil } from 'react-icons/fa6'

const Questions = () => {
  const { questions, courses, getQuestions } = useAuth();
  const [title, setTitle] = useState(null);
  const [list, setList] = useState(questions);

  useEffect(() => {
    getQuestions();
    if (title) {
      filtered()
    }
  }, [title]);

  function truncate(input, len) {
    if (input.length > len) {
      return input.substring(0, len) + '...'
    }
    return input;
  };

  function onChange(e) {
    setTitle(e.target.value)
  };

  const filtered = () => setList(questions?.filter((item) => item.title === title));
  // console.log(filtered);
  console.log(title);
  console.log(questions);
  console.log(list);
  return (
    <div>
      <Header title='All Questions' />
      <div className='my-10'></div>
      <Card>
        <span className='uppercase my-1 font-medium'>Select A Course to Display all Questions</span>
        <select name="" id="" className='border rounded border-slate-400 p-2 my-2' onChange={onChange}>
          <option value="">Choose a Course</option>
          {courses.map((item, idx) => (
            <option key={idx} value={item.title}>{item.title}</option>
          ))}
        </select>
      </Card>
      <Card>
        <table>
          <thead>
            <tr className='bg-black/75 text-white md:text-lg text-sm'>
              <th>ID</th>
              <th>Question</th>
              <th>Type</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='font-light text-center md:text-lg text-base'>
            {questions?.map((item, idx) =>
            (<tr key={idx}>
              <td>{truncate(item._id, 8)}</td>
              <td className=''>{truncate(item.question, 30)}</td>
              <td>{item.type}</td>
              <td>{item.createdAt}</td>
              <td className='flex'>
                <FaTrash className='mr-2 cursor-pointer'/>
                <FaPencil className='ml-2 cursor-pointer' />
              </td>
            </tr>))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Questions