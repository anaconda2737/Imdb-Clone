import React from 'react'
import Logo from './MovieLogo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return <>
  <div className=' border pl-12  flex space-x-8 items-center py-4'   >
    <img src={Logo} alt=""></img>
     <Link to='/' className='text-blue-400 font-bold text-xl md:text-3xl'>Movies</Link>
     <Link to='/favourite' className='text-blue-400 font-bold text-3xl'>Favourites</Link>


  </div>
 


  </>;
}

export default Navbar