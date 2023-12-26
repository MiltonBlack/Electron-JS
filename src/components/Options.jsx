import React from 'react'

const Options = ({ id, options }) => {
    const single = options?.find((item) => item.question_id === id);
    return (
        <div className='px-4 grid grid-cols-2 gap-2'>
            <p>(a) {single?.a}</p>
            <p>(b) {single?.b}</p>
            <p>(c) {single?.c}</p>
            <p>(d) {single?.d}</p>
        </div>
    )
}

export default Options