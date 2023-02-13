import React from 'react'

const Radio = (props) => {
  return (
    <div className='flex justify-center my-5'>
        <form action="" className='flex justify-center space-x-3 sm:space-x-5 bg-black px-9 sm:px-10 py-5 rounded-xl text-white'>
          <input type="radio" value="inr" name='curr' onChange={props.curr} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#eab308] checked:border-[#eab308] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
          <label>INR</label>
          <input type="radio" value="usd" name='curr' onChange={props.curr} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#eab308] checked:border-[#eab308] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
          <label>USD</label>
          <input type="radio" value="eur" name="curr" onChange={props.curr} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#eab308] checked:border-[#eab308] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
          <label>EUR</label>
        </form>
      </div>
  )
}

export default Radio
