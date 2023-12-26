import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Card from '../components/Card'
import { useAuth } from '../ContextAPI'

const DeleteQuestions = () => {
    const { deleteQuestion } = useParams()
    const { RemoveQuestion, questions, info, courses } = useAuth();

    const [id, setId] = useState(null);
    const [accessId, setAccessId] = useState(info?.accessID);
    const [title, setTitle] = useState('');

    const course = courses?.find((item) => item.title === title);
    const single = questions?.find((item) => item.id === deleteQuestion && item.course === course);

    function handleDelete() {
        if (single) {
            RemoveQuestion(id)
        }
    }

    //logs
    console.log(courses);
    console.log(questions);
    console.log(course);
    console.log(single);
    console.log(title);
    console.log(accessId);
    console.log(id);

    return (
        <div>
            <Header title='Delete Question' />
            <div className='my-10'></div>
            <Card>
                <span className='uppercase my-2 font-medium'>course</span>
                <select name="title" id="" defaultValue='select' className='border rounded border-slate-400 p-2 my-2' value={title} onChange={(e) => setTitle(e.target.value)}>
                    {courses.map((item, idx) => <option key={idx} value="1">{item.title}</option>)}
                </select>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex flex-col'>
                        <span className='mr-4 my-2 font-medium uppercase'>Question ID</span>
                        <input type="text" className='border rounded border-slate-400 p-2 mr-2' name='id' value={id} onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='mr-4 my-2 font-medium uppercase'>Access ID</span>
                        <input name='accessId' type="text" className='border rounded border-slate-400 p-2 mr-2' value={accessId} onChange={(e) => setAccessId(e.target.value)} />
                    </div>
                </div>
                <span className='uppercase my-2 font-medium'>Question</span>
                <textarea className='border rounded border-slate-400 px-2' placeholder='Type Your Question Here...' value={single.question} readOnly={true} />
                <div className='my-8 flex w-[300px] justify-between text-white font-normal'>
                    <button className='rounded border py-2 px-6 bg-amber-700' onChange={handleDelete}>Delete</button>
                    <button className='border border-black py-2 px-6 bg-red-700'>Cancel</button>
                </div>
            </Card>
        </div>
    )
}

export default DeleteQuestions