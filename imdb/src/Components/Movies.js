import React, { useState,useEffect } from 'react'
import Im from './SpiderMan.jpg'
import axios from 'axios'
import {Oval} from 'react-loader-spinner'
import Pagination from './Pagination'



function Movies() {

    const[movies,setMovies] = useState([])
    let[pageNumber,setPage]=useState(1)
    const[hover,setHover] = useState()
    const[favourite,setFavourite] = useState([]);

   let addToFavourite = (movie)=>{

    let newArray=[...favourite,movie]
    setFavourite([...newArray])
    console.log(newArray)
    localStorage.setItem("imdb",JSON.stringify(newArray))


   }
   let del = (movie)=>{
    let newArray = favourite.filter((m)=>m.id!==movie.id)
    setFavourite([...newArray])
    localStorage.setItem("imdb",JSON.stringify(newArray))
   }

  function goAhead(){
    setPage(pageNumber+1)
  }

  function backward(){
    if(pageNumber>1)
    setPage(pageNumber-1)
  }

    useEffect(function(){
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=4d9f076d7fe3f047a046eada9bd54996&page=${pageNumber}`).then((res)=>{
            console.table(res.data.results)
            setMovies(res.data.results)
            let oldFav = localStorage.getItem("imdb");
            oldFav = JSON.parse(oldFav) || [];
            setFavourite([...oldFav])


        }
    
    )

    },[pageNumber])


    

  return (<>
    <div className="mb-8">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">Trending Movies</div>
        {
            movies.length === 0?
            <div className='flex justify-center'>
            <Oval
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
            </div>:
        
        <div className="flex flex-wrap justify-center">{
            movies.map((movie)=>(
                <div className={`
                bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                md:h-[30vh] md:w-[250px] 
                h-[25vh] w-[150px]
                bg-center bg-cover
                rounded-xl
                flex items-end
                m-4
                hover:scale-110
                ease-out duration-300
                relative
            `}
            onMouseEnter={()=>{setHover(movie.id)
            console.log(movie.id)}}

            onMouseLeave={()=>{setHover('')}}

            
            >
                {
                    hover === movie.id && <>
                    {
                        !favourite.find((m)=>m.id===movie.id) ? 
                        <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={()=>addToFavourite(movie)}>😍</div> : <div className='absolute top-2 right-10 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={()=>del(movie)}>❌</div>
                     }

                    
                    </> 
                }
                
                   
                    <div className="w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl">{movie.title} </div>
                </div>

            

            ))

        }
           
            
        </div>
       }

    </div>
    <Pagination pageProp={pageNumber} goAhead={goAhead} backward={backward}/>
</>
    
  )
}

export default Movies