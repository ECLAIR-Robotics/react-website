import React from 'react'
import '../styles/sponsors.css';
import texelArts from '../static/images/sponsor-images/texelArts.png'
import texasRobotics from '../static/images/sponsor-images/texasRobotics.jpg'
import serviceNow from '../static/images/sponsor-images/serviceNow.png'
import CurrentSponsorCard from './CurrentSponsorCard';
function CurrentSponsorRow() {

  return (
    <div className='currentSponsorRow'>
      <CurrentSponsorCard img={serviceNow} color='rgb(30, 59, 61)' link='https://www.servicenow.com/?campid=223920&cid=p:all:dg:b:rmkt:exa:goog_en_top-res-enterprise:ams:all&s_kwcid=AL!11692!3!729322432205!e!!g!!servicenow&ds_c=GOOG_AMS_All_EN_DEMANDGEN_ALBU_RLSA_Brand_EXA_Top-Res-Enterprise&cmcid=71700000121085979&ds_ag=ServiceNow_EXA&cmpid=58700008837571500&ds_kids=p81376383604&gad_source=1&gclid=Cj0KCQiA4rK8BhD7ARIsAFe5LXIyES94ECRa8US5GU_B1JMIUY_Ml7u5RmpAfR7Gj0AEGSxgqNOKyiYaAnzMEALw_wcB&gclsrc=aw.ds'/>
      <CurrentSponsorCard img={texasRobotics} color='white' link='https://robotics.utexas.edu/'/>
      <CurrentSponsorCard img={texelArts} color='white' link='https://texel-arts.com/'/>
    </div>
  )
}

export default CurrentSponsorRow