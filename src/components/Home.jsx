import React from 'react'
import btc from '../assets/btc.png'
import '../css/home.css'

const Home = () => {

  return (
    <>
      <div className='h-[90vh] flex flex-col items-center justify-center space-y-5'>
        <p className='text-3xl font-bold '>Welcome to <span className='text-[#eab308]'>CoinX</span></p>
        <img className='w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw]' id='bounce' src={btc} alt="btc" />
      </div>
    </>
  )
}

export default Home
