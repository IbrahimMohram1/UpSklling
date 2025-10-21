import React from 'react'
import img from '../../assets/services1.png' 
import img1 from '../../assets/services2.jpg'
import img2 from '../../assets/services1.png'


export default function Services() {
  const cards = [
    {
      id: 1,
      image: img2,
      title: "lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse ducimus ipsum dignissimos placeat mollitia repellat tenetur, excepturi voluptatem, voluptas rem. Deserunt quo, temporibus incidunt totam nemo provident esse unde non, quasi neque, voluptatem praesentium quae assumenda porro quis dolorem.."
    },
    {
      id: 2,
      image: img1,
      title: "lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse ducimus ipsum dignissimos placeat mollitia repellat tenetur, excepturi voluptatem, voluptas rem. Deserunt quo, temporibus incidunt totam nemo provident esse unde non, quasi neque, voluptatem praesentium quae assumenda porro quis dolorem.."
    },
    {
      id: 3,
      image: img,
      title: "lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse ducimus ipsum dignissimos placeat mollitia repellat tenetur, excepturi voluptatem, voluptas rem. Deserunt quo, temporibus incidunt totam nemo provident esse unde non, quasi neque, voluptatem praesentium quae assumenda porro quis dolorem.."
    }
  ];

    
  return (
   <>
   

<div className="max-w-6xl  m-auto ">
    <div className='flex flex-wrap  justify-center items-center   rounded-2xl '>
   {cards.length > 0 ? (
  cards.map((card) => (
    <div key={card.id} className='md:w-1/3 w-full flex  flex-col'>
        <div className='p-2 '>
      <img 
        className="rounded-t-lg w-full h-72 object-cover " 
        src={card.image} 
        alt={card.title} 
      />
      <div className="p-5 bg-white rounded-xl">
          <h5 className="mb-2 text-lg font-extrabold  text-[#324473]">
            {card.title}
          </h5>
        <p className="mb-3 text-sm text-gray-700">
          {card.description}
        </p>
      </div>
      </div>
    </div>
  ))
) : (
  <p>No cards available</p>
)}
      <button className='bg-[#5180F6] px-14 py-3 rounded-2xl my-5 text-white font-semibold text-xl'>Help Me</button>

    </div>

</div>

   
   
   
   </>
  )
}
