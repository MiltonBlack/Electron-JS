import React from 'react'

const Card = ({children}) => {
  return (
    <div className='p-6 bg-white shadow shadow-black rounded flex flex-col h-full w-full my-2'>{children}</div>
  )
}

export default Card