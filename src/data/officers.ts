import arnavImg   from '../static/images/officer/arnav.webp';
import cameronImg from '../static/images/officer/cameron.webp';
import manasImg   from '../static/images/officer/manas.webp';
import manavImg   from '../static/images/officer/manav.webp';
import nogaImg    from '../static/images/officer/noga.webp';
import zoeImg     from '../static/images/officer/zoe.webp';
import nuzhatImg  from '../static/images/officer/nuzhat.webp';
import rizkyImg   from '../static/images/officer/rizky.webp';
// import vishnuImg  from '../static/images/officer/vishnu.webp';
import sahilImg  from '../static/images/officer/sahil.webp';
import conradImg  from '../static/images/officer/conrad.webp';
export interface Officer {
  initials: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  linkedin?: string;
  img?: string;           // ← add this

}

export const OFFICERS: Officer[] = [
  {
    initials: 'AJ',
    name: 'Arnav Joshi',
    role: 'President',
    bio: "Hi, I'm Arnav! I'm a third year C.S. major minoring in robotics. I've been making robots going on six years now, and particularly enjoy being somewhere in between the hardware and the software. In other news, I like running, climbing, hiking (motion may be a trend here), and playing music, and just about any sport. Open to song recommendations, welcome to ECLAIR",
    email: 'arnavjoshi@utexas.edu',
    img: arnavImg
  },
  {
    initials: 'CC',
    name: 'Cameron Cox',
    role: 'Vice President',
    bio: "CS major, robotics minor. I love combat robotics and dream of making robots that improve home life. Piano, chess, D&D, Zelda, singing, and ballroom dance when I'm not building.",
    email: 'cameron.cox@utexas.edu',
    img: cameronImg
  },
  {
    initials: 'MA',
    name: 'Manas Agrawal',
    role: 'Corporate Relations Director',
    bio: "Hi, my name is Manas. I'm the CR director at ECLAIR. I'm majoring in Computer Science and have a minor in Robotics. I love TTRPGs, swimming, and trying out new foods. I'm super interested in Robot Perception and Computer Vision. Join me in CRACKLE (the best ECLAIR Project). We have tons of fun!",
    email: 'manas.agrawal2@utexas.edu',
    img: manasImg
  },
  {
    initials: 'MK',
    name: 'Manav Karonde',
    role: 'Events Director · C.R.A.C.K.L.E. Lead',
    bio: "Hello friend, My name is Manav and I'm a sophmore in Computer Science here at UT. I've lived in Austin for the past decade, but am from New York originally. I've spent the past two semesters on CRACKLE, but when I'm not doing that or building wacky personal robotics projects, I like to play the drums / guitar (especially rock punk and blues), dabble in photography, drive around windows down with my dog, or just stare at a blank wall and contemplate life.",
    email: 'karonde.manav@gmail.com',
    img : manavImg
  },
  {
    initials: 'NR',
    name: 'Noga Rosenberg',
    role: 'Outreach Director',
    bio: "CS major interested in software development and cybersecurity. Video games, TTRPGs, and watching too many movies in my free time.",
    email: 'noga.rosenberg007@gmail.com',
    img: nogaImg
  },
  {
    initials: 'ZV',
    name: 'Zoe Vo',
    role: 'Public Relations Director',
    bio: "Hi I'm Zoe and I'm a Mechanical Engineering major. My favorite book series, movie franchise, and religion is The Hunger Games. Please marry me Thida",
    email: 'zk4thyv@gmail.com',
    img: zoeImg
  },
  {
    initials: 'NN',
    name: 'Nuzhat Nabi',
    role: 'Technology Director',
    bio: "Hello! My name is Nuzhat. I am a Computer Science major interested in robotics, AI, and full-stack web development. I mainly do software stuff but hoping to learn more hardware content. I enjoy playing games (board, card, and video games) and hanging out with friends.",
    email: 'nuzhat.nabi@utexas.edu',
    img: nuzhatImg
  },
  {
    initials: 'RP',
    name: 'Rizky Pratama',
    role: 'Financial Director · TAKOS Lead',
    bio: "CS major from Katy, TX. Into robotics, computer vision, and AI. I boulder, dance, play D&D, and eat lots. Never challenge me to a card game.",
    email: 'rapratama2005@gmail.com',
    img: rizkyImg
  },
  {
    initials: 'VS',
    name: 'Vishnu Sharma',
    role: 'Freshman Representative',
    bio: "CS major from New Jersey, interested in software, AI, and robotics. I like reading, learning new things, and hanging out with friends.",
    email: 'vishnuamogha.sharma@gmail.com',
    // img: vishnuImg
  },
];

export const FOUNDERS: Officer[] = [
  {
    initials: 'SJ',
    name: 'Sahil Jain',
    role: 'Co-Founder',
    bio: "Software developer interested in robotics, creative writing, and pandas (especially those that know kung fu).",
    email: 'sahil.jain.1@outlook.com',
    linkedin: 'https://www.linkedin.com/in/sahil-jain-ab012614b/',
    img: sahilImg
  },
  {
    initials: 'CL',
    name: 'Conrad Li',
    role: 'Co-Founder',
    bio: "Recently graduated CS, neuroscience, and chemistry major from UT Austin. Aspiring physician at the intersection of medicine and technology.",
    email: 'conradliste@utexas.edu',
    linkedin: 'https://www.linkedin.com/in/conradfli/',
    img: conradImg
  },
];
