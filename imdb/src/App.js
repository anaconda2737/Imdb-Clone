// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
// import Pagination from './Components/Pagination';
import {Routes,Route} from 'react-router-dom'
import Favourite from './Components/Favourite';
import Pagination from './Components/Pagination';

function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<>
      <Navbar/>
      <Banner/>
      <Movies/>
      
      </>}/>
      
      <Route path='favourite' element={<>
      <Navbar/>
      <Favourite/>

      </>}  />
    </Routes>



    </>    
    
  );
}

export default App;
