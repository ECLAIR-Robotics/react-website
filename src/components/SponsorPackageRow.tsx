import React from 'react';
import '../styles/sponsors.css';
import SponsorPackage from './SponsorPackage';

interface SponsorPackageRowProps {
  isVisible:boolean,
}
function SponsorPackageRow(props : SponsorPackageRowProps) {
  const silver = [
  // "",
  "Listed as a sponsor on our club T-shirt worn by 30+ members (name only)",
  "Featured on a once-per-semester appreciation shoutout on our Instagram with 150+ followers",
  "Highlighted as a sponsor on our club website",
  "Provide us with your swag and flyers to distribute at our faculty talks and club meetings with a regular attendance of 30+"
  ];
  
  const gold =[
  // "",
  "Listed as a sponsor on our club T-shirt worn by 30+ members (logo)",
  "Secure a booth to advertise your company at our twice-semesterly Demo Days, which are attended by professors and 40+ UT Austin CS students",
  "Obtain invitations to host workshops & recruiting events for our members up to 2 times a semester and with a potential turnout of 30+ students"
  ];
  
  const diamond =[
  // "",
  "Gain access to our resume book containing the profiles of the 30+ members active on our engineering projects",
  "Attain higher priority for invitations to host workshops & recruiting events for our members",
  "Showcase your logo on ~50 club flyers posted around campus in areas such as the CS and engineering buildings, garnering ~10,000 views",
  "Advertise your campus events and other opportunities on our Discord and mailing list, reaching a network of 500+ UT Austin students and alumni"
  ]

  return (
    <div className={`tierHolder ${props.isVisible ? 'vi' : ''}`}  >
      <SponsorPackage tier='Silver' perks={silver}/>
      <SponsorPackage tier='Gold' perks={gold}/>
      <SponsorPackage tier='Diamond' perks={diamond}/>  
    </div>

  )
}

export default SponsorPackageRow