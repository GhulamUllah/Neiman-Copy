import React from 'react'
import Secpart from './secpart'


export default function Mainpage() {
  return (<>
    <div className='f-images'>
        <div className='imge'>
          <img src='https://res.cloudinary.com/nmg-prod/image/upload/f_auto/cs_srgb,q_auto:good/v1659644731/content/marketing/r_HP_Womens_PopsOfColor_1a_080822.jpg' alt=''/>
        </div>
        <div className='imge2'>
            <img src='https://res.cloudinary.com/nmg-prod/image/upload/f_auto/cs_srgb,q_auto:good/v1674488897/content/marketing/r_HP_Womens_1b_Louboutin_012523.jpg' alt=''/>
        </div>
        <Secpart/>

    </div>
        </>
  )
}
