import React from 'react'

import img from "../../assets/e27de81ebcd4ea40fd6f4f4dff686cafacecaf9e.jpg"
export default function Hero() {
  return (
  <>
  
  
      <section className=''>
      <div className='container h-screen flex items-center '>
    <div className='h-full clip  '>
    <img src={img} alt="Trash" className='h-full   '  />
</div>



         <div className=" absolute h-full  m-auto text-center inset-0 flex flex-col justify-around items-center ">
        <div className='text-center'>
        <h1 className='font-bold text-4xl tracking-widest uppercase   text-[#5180F6]'>Round Rock  <span className='font-medium flex tracking-widest text-[#5180F6] '>Trush Hauling</span> </h1>
       
        </div>
        <div className='flex flex-col flex-wrap mx-auto text-center justify-center items-center gap-y-5'>
                  <span className='bg-[#5180F6] px-9 text-center m-auto py-2 rounded-2xl'>Experts</span>

          <span className='text-6xl font-extralight tracking-widest text-[#4F4F4F] '>Lorem</span>
        <h1 className="text-6xl font-extrabold  text-[#4F4F4F]">Lorem lorem</h1>
        <p className="text-gray-600 font-bold text-sm max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi qui recusandae omnis cumque cum similique ex modi amet quasi adipisci facere, at praesentium vitae odio assumenda libero nihil fugiat inventore iure reiciendis. Nulla laudantium id ipsa architecto ab eligendi nostrum dolore, quod totam soluta accusantium accusamus deleniti. Maiores, amet!
        </p>
        </div>
        <button className=" bg-[#5180F6] text-white px-12 py-2 rounded-full">
          Help Me
        </button>
      </div>
      </div>
  
</section>

  </>
  )
}


//  <section className="relative w-full   overflow-hidden  h-screen rounded-b-4xl">
//       <img
//         src={img}
//         alt="hero"
//         className="w-full h-full  "
//       />


//       <div className="absolute top-0 left-0 rounded-b-[80px] rounded-t-[80px]  w-full h-full bg-white origin-bottom-right scale-y-200   -skew-y-[35deg]  "></div>
//       <div className=" absolute h-[80%]     m-auto text-center inset-0 flex flex-col justify-around items-center px-10 overflow-hidden">
//         <div className='text-center'>
//         <h1 className='font-bold text-4xl tracking-widest uppercase   text-[#5180F6]'>Round Rock  <span className='font-medium flex tracking-widest text-[#5180F6] '>Trush Hauling</span> </h1>
       
//         </div>
//         <div className='flex flex-col flex-wrap mx-auto text-center justify-center items-center gap-y-3'>
//                   <span className='bg-[#5180F6] px-9 text-center m-auto py-2 rounded-2xl'>Experts</span>

//           <span className='text-6xl font-extralight tracking-widest text-[#4F4F4F] '>Lorem</span>
//         <h1 className="text-6xl font-extrabold  text-[#4F4F4F]">Lorem lorem</h1>
//         <p className="text-gray-600 font-bold text-sm max-w-md">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi qui recusandae omnis cumque cum similique ex modi amet quasi adipisci facere, at praesentium vitae odio assumenda libero nihil fugiat inventore iure reiciendis. Nulla laudantium id ipsa architecto ab eligendi nostrum dolore, quod totam soluta accusantium accusamus deleniti. Maiores, amet!
//         </p>
//         </div>
//         <button className="mt-4 bg-[#5180F6] text-white px-12 py-2 rounded-full">
//           Help Me
//         </button>
//       </div>
//     </section> 