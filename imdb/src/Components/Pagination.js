import React from 'react'

function Pagination({pageProp,goAhead,backward}) {
  
  
  return (
    <>
    <div className='w-full
     flex justify-center
     mb-10'> 
    <button className='
      p-2
      border-4
      border-indigo-500
      text-indigo-500
      border-r-0
      rounded-l-xl
     text-lg' 
     onClick={backward}
     >Previous</button>
    <button className=' p-2
      border-4
      border-indigo-500
      text-indigo-500
       bg-gray-300'>
        {pageProp}
       </button>
    <button className=' p-2
      border-4
      border-indigo-500
      text-indigo-500
      border-l-0
       rounded-r-xl' 
       onClick={goAhead}
       >Next</button>

    </div>
    </>
  )
}

export default Pagination