import { Typography } from '@mui/material'
import React from 'react'
import Thirdpart from './thirdpart'

export default function Secpart() {
  return (<>
    <div className='secpart'>
      <div>
      <Typography  sx={{fontWeight:'bold', textTransform:'uppercase', mb:1}}>New Looks Just Added</Typography>
        <Typography mb={2} variant='h3'>DESIGNER ARRIVALS
</Typography>
<Typography mb={2}>Shop the latest from your favorite brands</Typography>
<a href='#'><Typography>SHOP ALL NEW ARRIVALS</Typography></a>
      </div>
<div className='secpart-div'>
    <div className='secpart-img'><img src='https://res.cloudinary.com/nmg-prod/image/upload/c_scale,h_349,w_279/f_auto/cs_srgb,q_auto:good/v1674749909/product/nm_4368842_100030_a.tiff' alt=''/>
    <a href='#'><Typography>Off-White</Typography></a>
    </div>
    <div className='secpart-img'><img src='https://res.cloudinary.com/nmg-prod/image/upload/c_scale,h_349,w_279/f_auto/cs_srgb,q_auto:good/v1674749910/product/nm_4471983_100380_m.tiff' alt=''/>
    <a href='#'><Typography>Amina Muaddi</Typography></a>
    </div>
    <div className='secpart-img'><img src='https://res.cloudinary.com/nmg-prod/image/upload/c_scale,h_349,w_279/f_auto/cs_srgb,q_auto:good/v1674749911/product/nm_4451851_100664_m.tiff' alt=''/>
    <a href='#'><Typography>The Attico</Typography></a>
    </div>
    <div className='secpart-img'><img src='https://res.cloudinary.com/nmg-prod/image/upload/c_scale,h_349,w_279/f_auto/cs_srgb,q_auto:good/v1674749903/product/nm_4464795_100106_a.tiff' alt=''/>
    <a href='#'><Typography>Chloe</Typography></a>
    </div>
    
</div>

    </div>
    </>
  )
}
