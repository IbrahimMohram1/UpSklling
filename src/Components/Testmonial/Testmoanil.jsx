import React from 'react'
    import img from '../../assets/services3.png'
export default function Testmoanil() {
    const data = [
         {
    id: 1,
    name: "Ibrahim Mohram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
image:img
  },
  {
    id: 2,
    name: "Ibrahim Mohram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
image:img
  },
  {
    id: 3,
    name: "Ibrahim Mohram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
image:img
  },
  {
    id: 4,
    name: "Ibrahim Mohram",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
image:img
  },
    ]
  return (
<>
<section className='max-w-6xl m-auto p-4'>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {data.length > 0 ? (
      data.map((item) => (
        <div 
          key={item.id} 
          className='border rounded-xl p-4 border-blue-300 bg-white'
        >
          <div className='flex gap-4'>
            <img 
              className="object-cover rounded-full h-24 w-24 flex-shrink-0" 
              src={item.image} 
              alt={item.name} 
            />
            
            <div className="flex flex-col justify-start flex-1">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {item.name}
              </h5>
              <p className="text-sm font-normal text-gray-700">
                {item.text}
              </p>
          <div className="flex gap-2 text-blue-500 text-2xl">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No Found Data</p>
    )}
  </div>
</section>
</>

  )
}
