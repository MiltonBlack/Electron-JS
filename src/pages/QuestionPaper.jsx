import React, { useEffect, useState } from 'react'
import Options from '../components/Options'
import { useAuth } from '../ContextAPI';

const QuestionPaper = React.forwardRef(({ school, form, title, instruction, noOfSections, sectionA, sectionB, sectionC, sectionD, objectives, subjectives, essay, torf, course, numA, numB, numC, numD }, ref ) => {
    const { options, info } = useAuth();
    const [secA, setSecA] = useState(objectives);
    const [secB, setSecB] = useState(subjectives);
    const [secC, setSecC] = useState(torf);
    const [secD, setSecD] = useState(essay);

    useEffect(() => {
        arrangeSectionA();
        noOfSections === "2" && arrangeSectionB();
        if (noOfSections === "3") {
            arrangeSectionB();
            arrangeSectionC();
        } else if (noOfSections === "4") {
            arrangeSectionB();
            arrangeSectionC();
            arrangeSectionD();
        }
    }, [form]);

    function shuffleQuestions(array) {
        for (let i = array?.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Function to set Section A to the question type and generate a shuffled question section
    function arrangeSectionA() {
        if (sectionA === "Objectives") {
            const shuffledSecA = shuffleQuestions(objectives);
            setSecA(numA ? shuffledSecA.filter((item, idx) => parseInt(numA) !== 0 && idx < parseInt(numA)) : shuffledSecA);
            console.log("objectives... A");
        } else if (sectionA === "Subjectives") {
            const shuffledSecA = shuffleQuestions(subjectives);
            setSecA(numA ? shuffledSecA.filter((item, idx) => parseInt(numA) !== 0 && idx < parseInt(numA)) : shuffledSecA);
        } else if (sectionA === "Essay") {
            const shuffledSecA = shuffleQuestions(torf);
            setSecA(numA ? shuffledSecA.filter((item, idx) => parseInt(numA) !== 0 && idx < parseInt(numA)) : shuffledSecA)
        } else if (sectionA === "True/False"){
            const shuffledSecA = shuffleQuestions(essay);
            setSecA(numA ? shuffledSecA.filter((item, idx) => parseInt(numA) !== 0 && idx < parseInt(numA)) : shuffledSecA);
        }
    }

    function arrangeSectionB() {
        if (sectionB === "Objectives") {
            setSecB(objectives.filter((item, idx) => parseInt(numB) !== 0 && idx < parseInt(numB)));
        } else if (sectionB === "Subjectives") {
            setSecB(subjectives.filter((item, idx) => parseInt(numB) !== 0 && idx < parseInt(numB)));
        } else if (sectionB === "Essay") {
            setSecB(essay.filter((item, idx) => parseInt(numB) !== 0 && idx < parseInt(numB)))
        } else {
            setSecB(torf.filter((item, idx) => parseInt(numB) !== 0 && idx < parseInt(numB)))
        }
    }

    function arrangeSectionC() {
        if (sectionC === "Objectives") {
            setSecC(objectives.filter((item, idx) => parseInt(numC) !== 0 && idx < parseInt(numC)));
        } else if (sectionC === "Subjectives") {
            setSecC(subjectives.filter((item, idx) => parseInt(numC) !== 0 && idx < parseInt(numC)));
        } else if (sectionC === "Essay") {
            setSecC(essay.filter((item, idx) => parseInt(numC) !== 0 && idx < parseInt(numC)))
        } else {
            setSecC(torf.filter((item, idx) => parseInt(numC) !== 0 && idx < parseInt(numC)))
        }
    }

    function arrangeSectionD() {
        if (sectionD === "Objectives") {
            setSecD(objectives.filter((item, idx) => parseInt(numD) !== 0 && idx < parseInt(numD)));
        } else if (sectionD === "Subjectives") {
            setSecD(subjectives.filter((item, idx) => parseInt(numD) !== 0 && idx < parseInt(numD)));
        } else if (sectionD === "Essay") {
            setSecD(essay.filter((item, idx) => parseInt(numD) !== 0 && idx < parseInt(numD)))
        } else {
            setSecD(torf.filter((item, idx) => parseInt(numD) !== 0 && idx < parseInt(numD)))
        }
    }

    const shuffledObj = shuffleQuestions(objectives);
    // const shuffledSub = shuffleQuestions(subjectives);
    // const shuffledTF = shuffleQuestions(torf);
    // const shuffledE = shuffleQuestions(essay);

    console.log(shuffledObj);
    // console.log(shuffledSub);
    // console.log(shuffledTF);
    // console.log(shuffledE);

    console.log(secA);
    console.log(numA);
    console.log(objectives);
    console.log(secB);
    console.log(secC);
    console.log(secD);
    
    return (
        <div ref={ref} className='w-full h-full p-6 flex flex-col items-center justify-center text-sm'>
            <div className='w-full flex flex-col justify-center items-center py-2'>
                <h1 className='text-center uppercase font-semibold'>Federal University Otuoke, Bayelsa State</h1>
                <h2 className=' uppercase'>{course?.title}  Course Code: {title}</h2>
                <h2>Lecturer: {info.firstName} {info.lastName},  Duration: {course?.timeAllowed}</h2>
                <span className=' uppercase'>Instructions: {instruction}</span>
            </div>
            <section className='w-full'>
                <h3>Section A: {sectionA}</h3>
                {secA !== null && secA?.map((item, idx) => (
                    <div className='py-2' key={idx}>
                        <p>({idx + 1}). {item.question}</p>
                        {item.type === "Objectives" &&
                            <Options id={item._id} options={options} />
                        }
                    </div>)
                )}
            </section>
            <section>
                {secB && noOfSections === "2" && secB?.map((item, idx) =>
                    <div className='py-2' key={idx}>
                        <p>({idx + 1}). {item.question}</p>
                        {item.type === "Objectives" &&
                            <Options id={item._id} options={options} />
                        }
                    </div>
                )}
            </section>
            <section>
                {secC && noOfSections === "3" && secC?.map((item, idx) =>
                    <div className='py-2' key={idx}>
                        <p>({idx + 1}). {item.question}</p>
                        {item.type === "Objectives" &&
                            <Options id={item._id} options={options} />
                        }
                    </div>
                )}
            </section>
            <section>
                {secD && noOfSections === "4" && secD?.map((item, idx) =>
                    <div className='py-2' key={idx}>
                        <p>({idx + 1}). {item.question}</p>
                        {item.type === "Objectives" &&
                            <Options id={item._id} options={options} />
                        }
                    </div>
                )}
            </section>
        </div>
    )
})

export default QuestionPaper