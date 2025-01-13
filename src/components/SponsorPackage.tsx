import React from 'react'

interface SponsorPackageProps {
  tier: string
  perks: string[]
}

function SponsorPackage(props: SponsorPackageProps) {
  return (
  <div>
    <div className='tierCardHolder' style={{border: '0px solid #7fd6ff'}}>
      <div className={`tierCard`} style={{}}>
        <div className='tierCardContent'>
          <div className={`tierTitle ${props.tier}`} > {props.tier} </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <div className="divHolder" style={{width:'70%', paddingTop:'0.5rem', paddingBottom:'0.6rem'}}>
              <span className='popupDividerSD' style={{borderColor:""}}></span>
            </div>
          </div>
          <ul className='perkList'>
            {props.tier !== 'Silver' && (<li className={props.tier}>All Prior Perks</li>)}
            {props.perks.map((perk, index) =>
              <li key={index}>{perk}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SponsorPackage