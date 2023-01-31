import React from 'react'
import {Divider, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box } from '@mui/system';

export default function Nonauth() {
  return (
    <>
    <div className='header' >
        <div className='logo'>
        <img src='https://www.neimanmarcus.com/assets/images/neiman-marcus-logo-full-width.9aa925b08380615243af7abc5ed63919.svg' alt='no internet' height={'70px'}/>

        </div>
        <div className='bar'>
          <div className='shopping'>
          <Typography sx={{textTransform:'uppercase'}}>Shopping Bag </Typography>
          <ShoppingBagIcon fontSize={'medium'} sx={{ml:'5px'}}/>

          </div>
          <Box sx={{display:'flex'}}>
          <input type='text' style={{padding:'5px',width:'250px'}}/><button style={{cursor:'pointer',backgroundColor:'black',color:'white', display:'flex',justifyContent:'center',alignItems:'center'}}>Search <SearchIcon/></button>

          </Box>
        </div>
      </div>
      <Divider/>
     
    </>
  )
}
