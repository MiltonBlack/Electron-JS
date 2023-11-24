import React, { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

const GeneratePaper = () => {
  const [formData, setFormData] = useState({
    sectionNumBer: "",
    instructions: "",
    sectionA: "",
    sectionB : "",
    sectionC : "",
    sectionD : "",
  });
  function onChange(e) {
    setFormData((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div>
      <Header title={'Generate Question Paper'} />
      <div className='my-4'></div>
      <Card>
        <div className='flex w-full justify-end mb-2'>
          <input type="date" name="" id="" className='p-1 border' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <span className='uppercase font-normal mr-2'>Instructions</span>
            <input type="text" placeholder='Set Instruction for this Question Paper' className='border rounded border-slate-400 p-1 mr-2 w-full' />
          </div>
          <div className='flex flex-col'>
            <span className='uppercase font-normal mr-2'>Number of Sections</span>
            <select name="sectionNumber" value={formData.sectionNumBer} id="" className='p-1 border' onChange={(e) => onChange(e)}>
              <option value="">One (A)</option>
              <option value="">Two (A, B)</option>
              <option value="">Three (A, B, C)</option>
              <option value="">Four (A, B, C, D)</option>
            </select>
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section A</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="" id="" className='p-1 border'>
              <option value="">Objective</option>
              <option value="">Subjective</option>
              <option value="">True/False</option>
              <option value="">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section A</span>
            <input type="number" name="" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' />
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section B</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="" id="" className='p-1 border'>
              <option value="">Objective</option>
              <option value="">Subjective</option>
              <option value="">True/False</option>
              <option value="">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section B</span>
            <input type="number" name="" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' />
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section C</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="" id="" className='p-1 border'>
              <option value="">Objective</option>
              <option value="">Subjective</option>
              <option value="">True/False</option>
              <option value="">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section C</span>
            <input type="number" name="" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' />
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section D</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="" id="" className='p-1 border'>
              <option value="">Objective</option>
              <option value="">Subjective</option>
              <option value="">True/False</option>
              <option value="">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section D</span>
            <input type="number" name="" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' />
          </div>
        </div>
        <div className='flex items-center w-full justify-between mt-6 text-white font-semibold'>
          <button className='border p-1 px-8 bg-lime-600 rounded uppercase'>Generate</button>
          <button className='border p-1 px-8 bg-rose-600 rounded uppercase'>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default GeneratePaper