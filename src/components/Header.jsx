import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <h1 className='font-bold text-3xl text-slate-900 uppercase'>{title}</h1>
    </div>
  )
}

export default Header