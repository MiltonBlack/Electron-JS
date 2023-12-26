import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { useAuth } from '../ContextAPI';
import QuestionPaper from './QuestionPaper';
import jspdf from 'jspdf'
import { useReactToPrint } from 'react-to-print'

const GeneratePaper = () => {
  const docRef = useRef(null)
  const { courses, questions } = useAuth();
  const [formData, setFormData] = useState({
    sectionNumber: "1",
    instructions: "",
    title: "",
    sectionA: "",
    numA: "",
    sectionB: "",
    numB: "",
    sectionC: "",
    numC: "",
    sectionD: "",
    numD: "",
  });

  const [course, setCourse] = useState(null);
  const [objectives, setObjectives] = useState(null);
  const [filterObjectives, setFilterObjectives] = useState(objectives);
  const [subjective, setSubjective] = useState(null);
  const [filterSubjective, setFilterSubjective] = useState(subjective);
  const [torf, setTorf] = useState(null);
  const [filterTorf, setFilterTorf] = useState(torf);
  const [essay, setEssay] = useState(null);
  const [filterEssay, setFilterEssay] = useState(essay);
  const [qLengthObj, setQLengthObj] = useState(null);
  const [qLengthSub, setQLengthSub] = useState(null);
  const [qLengthTF, setQLengthTF] = useState(null);
  const [qLengthE, setQLengthE] = useState(null);
  const { sectionNumBer, instructions, title, sectionA, numA, sectionB, numB, sectionC, numC, sectionD, numD } = formData;

  // find a Particular Course with all the questions
  function runCourse() {
    setCourse(courses?.find((item) => item.courseCode === title));
  }

  useEffect(() => {
    if (title) {
      runCourse();
      console.log("runcourse");
    }
    if (course) {
      setTimeout(() => {
        runSections();
        console.log("runsection");
      }, 2000);
    }
  }, [course, title]);

  useEffect(() => {
    if (objectives) {
      setQLengthObj(objectives.length);
    } else if (subjective) {
      setQLengthSub(subjective.length);
    } else if (torf) {
      setQLengthTF(torf.length);
    } else if (essay) {
      setQLengthE(essay.length);
    }
  }, [objectives, subjective, torf, essay]);

  async function runSections() {
    // Find all course questions that are objective
    setObjectives(questions?.filter((item) => item.type === "Objectives" && item.course_code === title));
    // Find all course questions that are subjective
    setSubjective(questions?.filter((item) => item.type === "Subjective" && item.course_code === title));
    // Find all course questions that are true or false
    setTorf(questions?.filter((item) => item.type === "True/False" && item.course_code === title));
    // Find all course questions that are essay
    setEssay(questions?.filter((item) => item.type === "Essay" && item.course_code === title));
  }

  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handlePrint = useReactToPrint({
    content: () => docRef.current,
  });

  function handleGenerate() {
    const doc = new jspdf({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });
    doc.html(docRef.current, {
      async callback(doc) {
        await doc.save(`${course.title}`);
      }
    })
  }

  console.log(courses);
  console.log(course);
  console.log(objectives);
  console.log(qLengthObj, "Objectives");
  console.log(qLengthSub, "Subjectives");
  console.log(qLengthTF, "True/False");
  console.log(qLengthE, "Essay");
  return (
    <div className=''>
      <Header title={'Generate Question Paper'} />
      <div className='my-4'></div>
      <Card>
        <span className='uppercase my-1 font-medium'>Select A Course to Display all Questions</span>
        <select name="title" id="" className='border rounded border-slate-400 p-2 my-2' onChange={onChange}>
          <option value="">Choose a Course</option>
          {courses.map((item, idx) => (
            <option key={idx} value={item.courseCode}>{item.title}</option>
          ))}
        </select>
      </Card>
      <Card>
        <div className='flex w-full justify-end mb-2'>
          <input type="date" name="date" id="" className='p-1 border' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <span className='uppercase font-normal mr-2'>Instructions</span>
            <input type="text" placeholder='Set Instruction for this Question Paper' className='border rounded border-slate-400 p-1 mr-2 w-full' name='instructions' value={instructions} onChange={onChange} />
          </div>
          <div className='flex flex-col'>
            <span className='uppercase font-normal mr-2'>Number of Sections</span>
            <select name="sectionNumber" id="" className='p-1 border' onChange={onChange}>
              <option value="">Choose</option>
              <option value="1">One (A)</option>
              <option value="2">Two (A, B)</option>
              <option value="3">Three (A, B, C)</option>
              <option value="4">Four (A, B, C, D)</option>
            </select>
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section A</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="sectionA" id="" className='p-1 border' onChange={onChange}>
              <option value="">Choose Type</option>
              <option value="Objectives">Objective</option>
              <option value="Subjective">Subjective</option>
              <option value="True/False">True/False</option>
              <option value="Essay">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section A</span>
            <input type="number" name="numA" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' onChange={onChange} />
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section B</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="sectionB" id="" className='p-1 border' onChange={onChange}>
              <option value="">Choose Type</option>
              <option value="Objectives">Objective</option>
              <option value="Subjective">Subjective</option>
              <option value="True/False">True/False</option>
              <option value="Essay">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section B</span>
            <input type="number" name="numB" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' onChange={onChange} />
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section C</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="sectionC" id="" className='p-1 border' onChange={onChange}>
              <option value="">Choose Type</option>
              <option value="Objectives">Objective</option>
              <option value="Subjectives">Subjective</option>
              <option value="True/False">True/False</option>
              <option value="Essay">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section C</span>
            <input type="number" name="numC" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' onChange={onChange} />
          </div>
        </div>
        <span className='my-3 font-bold text-2xl'>Section D</span>
        <div className='grid grid-cols-2'>
          <div>
            <span className='uppercase font-normal mr-3'>Question Type</span>
            <select name="sectionD" id="" className='p-1 border' onChange={onChange}>
              <option value="">Choose Type</option>
              <option value="Objectives">Objective</option>
              <option value="Subjectives">Subjective</option>
              <option value="True/False">True/False</option>
              <option value="Essay">Essay</option>
            </select>
          </div>
          <div className='flex items-center'>
            <span className='mr-3'>Number of Questions in Section D</span>
            <input type="number" name="numD" id="" className='border rounded border-slate-400 p-1 mr-2 w-14' onChange={onChange} />
          </div>
        </div>
        <div ref={docRef} className='w-full'>
          <QuestionPaper 
          school={"federal University Otuoke"} 
          form={formData} 
          title={title} 
          instruction={instructions} 
          noOfSections={sectionNumBer} 
          sectionA={sectionA} 
          sectionB={sectionB} 
          sectionC={sectionC} 
          sectionD={sectionD} 
          objectives={objectives} 
          subjectives={subjective} 
          essay={essay} 
          torf={torf} 
          course={course} 
          numA={numA} 
          numB={numB} 
          numC={numC} 
          numD={numD} />
        </div>
        <div className='flex items-center w-full justify-between mt-6 text-white font-semibold'>
          <button className='border p-1 px-8 bg-amber-600 rounded uppercase' onClick={handleGenerate}>Generate</button>
          <button className='border p-1 px-8 bg-lime-600 rounded uppercase' onClick={handlePrint}>Print</button>
          <button className='border p-1 px-8 bg-rose-600 rounded uppercase'>Cancel</button>
        </div>
      </Card>
    </div>
  )
}

export default GeneratePaper