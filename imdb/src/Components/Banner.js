import React,{useState,useEffect} from 'react'
import Im from './SpiderMan.jpg'
import axios from 'axios'


function Banner() {
  const[movie,setMovies] = useState([])

  useEffect(function(){
      axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=4d9f076d7fe3f047a046eada9bd54996').then((res)=>{
          console.table(res.data.results)
          setMovies(res.data.results[0])

      }
  
  )

  },[])
  return (
    <>
    <div className={`bg-[url(${Im})] h-[60vh]
    bg-center bg-cover
    flex items-end justify-center

    `}>
        <div className='text-5xl text-white 
        p-6 
        bg-gray-900 bg-opacity-50
        w-full
        flex justify-center'>{movie.title}</div>
    </div>
    </>
  )
}

export default Banner