import React from 'react'

export default function Title({title}) {
  return (
    <div>
      <div className="flex items-center justify-center  py-8 my-5">
      <div className="flex flex-col gap-4">
        <div className="w-10 h-0.5 bg-blue-400 transform -rotate-45 origin-bottom-left"></div>
        <div className="w-10 h-0.5 bg-blue-400 transform rotate-45 origin-top-left"></div>
      </div>
      
      <h2 className="text-5xl font-bold text-[#5B8DEF]">{title}</h2>
      
     <div className="flex flex-col gap-6 ml-12">
        <div className="w-10 h-0.5 bg-blue-400 transform -rotate-140 origin-bottom-left"></div>
        <div className="w-10 h-0.5 bg-blue-400 transform rotate-140 origin-top-left"></div>
      </div>
    </div>
    </div>
  )
}
   