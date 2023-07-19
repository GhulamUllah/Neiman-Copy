import './App.css';
import { Typography} from '@mui/material'
import './index.css'
import {BrowserRouter,RouteProps,Route} from 'react-router-dom'

import Nonauth from './components/header/nonauth';
import Category from './components/category';
import Mainpage from './components/mainpage';
import { Routes } from 'react-router-dom/dist';
import Thirdpart from './components/thirdpart';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div className='update' style={{background:'black',width:'100%',color:'#fff', textAlign:'center', padding:3}}>
        <Typography sx={{fontWeight:'bolder'}}>The New Neiman Marcus app is here! Discover Now</Typography>
      </div>
      <Nonauth/>
      <Category/>
      <Mainpage/>
      <Thirdpart/>
    
      <Routes>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
