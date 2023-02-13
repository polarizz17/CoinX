import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import bitImg from '../assets/bitImg.png'


const hamClick = () => {
    let hamburger = document.querySelector(".hamburger");
    let slide = document.getElementById("slide");
    hamburger.classList.toggle("is-active");
    slide.classList.toggle("-translate-x-full");
}

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between m-3 lg:hidden' id='sm'>
                <div id='nav'>
                    <button className="hamburger hamburger--slider" type="button" onClick={hamClick}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <NavLink to="/"><p className='text-xl font-bold '>CoinX</p></NavLink>
                <NavLink to="/"><img src={bitImg} alt="Bitcoin" className='w-10 h-10 m-3' /></NavLink>
            </div>
            <div className=' flex flex-col justify-center items-center py-8 pl-2 space-y-6 text-xl font-bold absolute z-10 bg-white w-full -translate-x-full transform duration-500 ease-in-out lg:hidden' id='slide' >
                <NavLink to="/" onClick={hamClick}><p>Home</p></NavLink>
                <NavLink to="/coins" onClick={hamClick}><p>Coins</p></NavLink>
                <NavLink to="/exchanges" onClick={hamClick}><p>Exchanges</p></NavLink>
            </div>

            <div className='hidden lg:flex justify-between items-center px-6 py-6'>
                <div className='flex items-center space-x-2'>
                    <NavLink to="/"><img src={bitImg} alt="Bitcoin" className='w-12 h-12 cursor-pointer' /></NavLink>
                    <NavLink to="/"><p className='text-2xl font-bold cursor-pointer hover:text-[#eab308]'>CoinX</p></NavLink>
                </div>
                <div className='flex items-center text-xl font-bold space-x-6'>
                    <NavLink to="/" ><p className='cursor-pointer hover:text-[#eab308]'>Home</p>
                    </NavLink>
                    <NavLink to="/coins"><p className='cursor-pointer hover:text-[#eab308]'>Coins</p></NavLink>
                    <NavLink to="/exchanges"><p className='cursor-pointer hover:text-[#eab308]'>Exchanges</p></NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar
