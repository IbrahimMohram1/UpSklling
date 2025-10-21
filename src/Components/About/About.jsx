import React from 'react'
import img from '../../assets/43449ec75ab4770fb0ff3123d0ae01db31c409a7.jpg'
import img2 from '../../assets/2374e1aafd6f05b7e4f0277ac5571d9a15a12ddb.png'

export default function About() {
  return (
  <>

<section>
<div className='relative w-full min-h-screen my-5'>
  
  <div className='absolute inset-0 z-0'>
    <img src={img} className='object-cover w-full h-full' alt="Background" />
  </div>

  <div className='absolute inset-0 bg-[#6D91EEB2] opacity-80 z-10'></div>

  <div className='container relative z-20 h-full'>
    <div className='w-full md:flex flex-wrap h-full'>
      
   <div className='md:w-1/3 w-full flex flex-col justify-center items-center md:text-right text-center '>
  <div className='  md:relative md:-right-2/6  pr-8'>
    <h1 className='text-white text-5xl font-bold mb-6  '>About Us</h1>
    <p className='text-white max-w-md mb-8 '>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
    </p>
    
    <div className='flex md:justify-end  justify-center md:relative  '>
      <img src={img2} className='w-[300px] h-auto rounded-lg shadow-lg' alt="Trash bags" />
    </div>
  </div>
</div>
      
  <div className='md:w-2/3 w-full relative z-30 md:[clip-path:polygon(44%_0,100%_0,100%_100%,2%_100%)] h-[98%] m-auto p-5'
    
 >
  <div className='absolute inset-0 bg-[#19284f] h-[98%] m-auto rounded-3xl'></div>
  
  <div className='relative z-40 flex flex-col items-center justify-center p-12 min-h-screen'>
    <h1 className='text-white text-5xl font-bold mb-6'>Where</h1>
    <p className='text-white text-center max-w-md leading-relaxed'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>

    <button className='bg-yellow-400 text-gray-800 font-bold px-10 py-3 rounded-full mt-8 hover:bg-yellow-500 transition-colors md:self-start md:absolute md:bottom-10 md:left-1/5 md:mb-12'>
      Help Me
    </button>
  </div>
</div>

    </div>
  </div>

</div></section>
  
  </>
  )
}
