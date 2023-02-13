import React from 'react'
import errorImg from '../assets/error.svg'

const Error = (props) => {
  return (
    <div className='flex flex-col items-center justify-between m-5' >
      <p className=' text-xl xs:text-3xl font-bold'>{props.msg}</p>
      <img src={errorImg} alt="error"  className=' h-[70vh]'/>
    </div>
  )
}

export default Error
