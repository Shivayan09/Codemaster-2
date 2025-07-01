import React from 'react'
import user_icon from '../assets/user-icon.png'
import { Link } from 'react-router-dom'

const Navbar = ({onUserClick}) => {
  return (
    <div>
        <div className='text-white h-[10vh] mx-auto p-5 flex items-center justify-center md:justify-between gap-5 flex-wrap mb-5 md:mb-0'>
            <p className='font-bold text-[1.5rem]'>Codemaster</p>
            <ul className='flex gap-5 md:gap-14 items-center'>
                <li className=' transform transition duration-150 hover:cursor-pointer hover:text-red-500'>
                  <Link to="/">Home</Link>
                </li>
                <li className=' transform transition duration-150 hover:cursor-pointer hover:text-red-500'><a href='https://www.linkedin.com/in/shivayan-chakravarty-806702294/' target='blank'>About</a></li>
                <li className=' transform transition duration-150 hover:cursor-pointer hover:text-red-500'>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className='flex gap-5 items-center transform transition duration-150 hover:cursor-pointer hover:text-red-500' onClick={onUserClick}>User <img src={user_icon} alt="" className='h-8 w-8 border border-white rounded-full'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
