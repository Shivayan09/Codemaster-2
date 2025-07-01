import React from 'react'

const LangBox = ({img, onClick}) => {
  return (
    <div>
      <div className='h-20 w-20 md:h-30 md:w-30 bg-white/5 flex items-center justify-center rounded-2xl border
       transform transition duration-300 hover:scale-[1.02] hover:cursor-pointer
        hover:bg-stone-900/60 hover:border-white' onClick={onClick}>
        <img src={img} alt="" className='h-[70%] w-[70%]'/>
      </div>
    </div>
  )
}

export default LangBox
