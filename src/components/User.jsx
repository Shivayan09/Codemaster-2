import React from 'react'

const User = (onClick) => {
  return (
    <div className=''>
      <div className='h-[20vh] w-[27vw] md:w-[12vw] bg-black/50 absolute right-9 md:right-3 top-28 md:top-16 z-10 
      rounded-2xl flex flex-col gap-5 justify-center items-center'>
        <button className='h-10 w-20 md:w-28 hover:cursor-pointer bg-stone-900 text-white rounded-xl transition transform duration-300 border-0 hover:border-white hover:border-1'>Sign In</button>
        <button className='h-10 w-20 md:w-28 hover:cursor-pointer bg-stone-900 text-white rounded-xl transition transform duration-300 border-0 hover:border-white hover:border-1'>Register</button>
      </div>
    </div>
  )
}

export default User
