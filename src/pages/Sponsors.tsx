import { Grid } from '@mui/material'
import React from 'react'
import spon from '../static/vectors/sponsors9.svg';
import bg from '../static/vectors/sponsors10.svg'; 

function Sponsors() {
  return (
    <div>
      <div className='projectPageHeading'>
        Sponsors
      </div>
      <div className='projectHeaderTrans' style={{backgroundImage: `url(${spon})`, height: '12rem', backgroundPosition: 'center', backgroundSize: '200vw'}}></div>
      
      <div style = {{paddingBottom:"7%"}}/>
    </div>
  )
}

export default Sponsors
