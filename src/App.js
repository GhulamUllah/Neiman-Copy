import './App.css';
import { Typography} from '@mui/material'

import Nonauth from './components/header/nonauth';
import Category from './components/category';
import Mainpage from './components/mainpage';
function App() {
  return (
    <div className="App">
      <div className='update' style={{background:'black',width:'100%',color:'#fff', textAlign:'center', padding:3}}>
        <Typography sx={{fontWeight:'bolder'}}>The New Neiman Marcus app is here! Discover Now</Typography>
      </div>
      <Nonauth/>
      <Category/>
      <Mainpage/>
    </div>
  );
}

export default App;
