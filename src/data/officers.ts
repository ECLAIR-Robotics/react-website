import arnavImg   from '../static/images/officer/arnav.webp';
import cameronImg from '../static/images/officer/cameronProfessional.webp';
import manasImg   from '../static/images/officer/manas.webp';
import manavImg   from '../static/images/officer/manav.webp';
import nogaImg    from '../static/images/officer/noga.webp';
import yashImg     from '../static/images/officer/yash.webp';
import devImg  from '../static/images/officer/dev.webp';
import rizkyImg   from '../static/images/officer/rizky.webp';
import vidyaImg  from '../static/images/officer/vidyaProfessional.webp';
import tanayImg   from '../static/images/officer/tanay.webp';
import annikaImg   from '../static/images/officer/annika.webp';
import chrisImg   from '../static/images/officer/chris.webp';
import ethanImg   from '../static/images/officer/ethan.webp';
import shreyaImg   from '../static/images/officer/shreya.webp';
import nithyaImg   from '../static/images/officer/nithya.webp';
//import navyaImg   from '../static/images/officer/navya.webp';
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
    bio: "Hi, I'm Arnav! I'm a fourth year C.S. major minoring in robotics. I've been making robots going on six years now, and particularly enjoy being somewhere in between the hardware and the software. In other news, I like running, climbing, hiking (motion may be a trend here), and playing music, and just about any sport. Open to song recommendations, welcome to ECLAIR",
    email: 'arnavjoshi@utexas.edu',
    img: arnavImg
  },
  {
    initials: 'CC',
    name: 'Cameron Cox',
    role: 'Vice President',
    bio: "Hey y'all, my name is Cameron! I'm a senior in computer science, minoring in robotics. I love combat robotics, systems design, and my goal is to one day make robots that improve our home lives. In my free time I play the piano, chess, D&D, Zelda, sing, country dance, and West Coast swing. My favorite project I've worked on is the CRACKLE drive train! All the power electronics for it were super fun!!!",
    email: 'cameron.cox@utexas.edu',
    img: cameronImg
  },
  {
    initials: 'MA',
    name: 'Manas Agrawal',
    role: 'Corporate Relations Director',
    bio: "Hi, my name is Manas. I'm the CR director at ECLAIR. I'm majoring in Computer Science and have a minor in Robotics. I love TTRPGs, swimming, and trying out new foods. I'm super interested in Robot Perception and Computer Vision. Join me in ICARUS (the best ECLAIR Project). We have tons of fun!",
    email: 'manas.agrawal2@utexas.edu',
    img: manasImg
  },
  {
    initials: 'MK',
    name: 'Manav Karonde',
    role: 'Events Director',
    bio: "Hello friend, My name is Manav and I'm a junior in Computer Science here at UT. I've lived in Austin for the past decade, but am from New York originally. I've spent the past two semesters on CRACKLE, but when I'm not doing that or building wacky personal robotics projects, I like to play the drums / guitar (especially rock punk and blues), dabble in photography, drive around windows down with my dog, or just stare at a blank wall and contemplate life.",
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
    initials: 'YK',
    name: 'Yash Karandikar',
    role: 'Public Relations Director',
    bio: "Hi! I am a Junior CS major. I am interested in Robotics, Linux, and computing in general.",
    email: 'yashkarandikar158@gmail.com',
    img: yashImg
  },
  {
    initials: 'DP',
    name: 'Dev Patel',
    role: 'Technology Director',
    bio: "Hi, I'm Dev! I'm a sophomore biomedical engineering major on the pre-med track. I'm interested in all things that intersect engineering and medicine. I also enjoy playing tennis and reading!",
    email: 'dap4675@utexas.edu',
    img: devImg
  },
  {
    initials: 'RP',
    name: 'Rizky Pratama',
    role: 'Financial Director',
    bio: "CS major from Katy, TX. Into robotics, computer vision, and AI. I boulder, dance, play D&D, and eat lots. Never challenge me to a card game.",
    email: 'rapratama2005@gmail.com',
    img: rizkyImg
  },
  {
    initials: 'VP',
    name: 'Vidya Puralasetty',
    role: 'Freshman Representative',
    bio: "Hi! My name is Vidya, and I'm a freshman majoring in Informatics. I'm interested in AI, data analytics, software development, and robotics! In my free time, I love playing pickleball, watching shows, and trying new food.",
    email: 'vidya.puralasetty@gmail.com',
    img: vidyaImg
  },
];

export const LEADS: Officer[] = [
  {
    initials: 'MK',
    name: 'Manav Karonde',
    role: 'ICARUS Lead',
    bio: "Hello friend, My name is Manav and I'm a junior in Computer Science here at UT. I've lived in Austin for the past decade, but am from New York originally. I've spent the past two semesters on CRACKLE, but when I'm not doing that or building wacky personal robotics projects, I like to play the drums / guitar (especially rock punk and blues), dabble in photography, drive around windows down with my dog, or just stare at a blank wall and contemplate life.",
    email: 'karonde.manav@gmail.com',
    img: manavImg
  },
  {
    initials: 'TK',
    name: 'Tanay Garg',
    role: 'ICARUS Lead',
    bio: "Hi! I am Tanay, and I am a CS major at UT Austin. I love Formula 1, soccer, and playing the guitar! I want to use AI to revolutionize educational technology!",
    email: 'Tanay.garg@utexas.edu',
    img: tanayImg
  },
  {
    initials: 'DP',
    name: 'Dev Patel',
    role: 'EyeTracker Lead',
    bio: "Hi, I'm Dev! I'm a sophomore biomedical engineering major on the pre-med track. I'm interested in all things that intersect engineering and medicine. Out of class, I enjoy playing tennis and reading.",
    email: 'dap4675@utexas.edu',
    img: devImg
  },
  {
    initials: 'AS',
    name: 'Annika Shivam',
    role: 'AMAZE Lead',
    bio: "Hey! I'm Annika, a sophomore majoring in computer science and minoring in robotics. I love engineering projects where I can work with my hands—and no, typing nonstop C code does not count ;). I also enjoy music, bouldering, puns, and anything space-related. I hope to work in mission control or at the intersection of space & robotics!",
    email: 'dap4675@utexas.edu',
    img: annikaImg
  },
  {
    initials: 'RP',
    name: 'Rizky Pratama',
    role: 'Takos Lead',
    bio: "CS major from Katy, TX. Into robotics, computer vision, and AI. I boulder, dance, play D&D, and eat lots. Never challenge me to a card game.",
    email: 'rapratama2005@gmail.com',
    img: rizkyImg
  },
  {
    initials: 'CE',
    name: 'Chris Elwood',
    role: 'Takos Lead',
    bio: "Hello, I'm Chris. I am a third year CS student. I am from Austin and I enjoy reading, watching films, and basketball. I really enjoy systems programming.",
    email: 'christopher.elwood2024@gmail.com',
    img: chrisImg
  },
  {
    initials: 'EG',
    name: 'Ethan Gopez',
    role: 'H.A.N.D Lead',
    bio: "Heyo, I'm Ethan! I'm a third-year Computer Science major minoring in Robotics. I'm very passionate about AI and robot planning. Outside of work, you can find me bouldering, making music with friends, playing games, writing puzzles, and just generally sidequesting.",
    email: 'ethangopez@gmail.com',
    img: ethanImg
  },
  {
    initials: 'SG',
    name: 'Shreya Ganti',
    role: 'ARGO III Lead',
    bio: "Hi! I'm Shreya, a senior Biomedical Engineering Major. I love working on cool project ideas especially in medical/laboratory contexts. Outside of robots, I enjoy cooking and baking, trying new restaurants, and board games!",
    email: 'shreyaganti1@gmail.com',
    img: shreyaImg
  },
  {
    initials: 'NC',
    name: 'Nithya Challa',
    role: 'ARGO III Lead',
    bio: "Hi! My name is Nithya and I'm a senior majoring in Aerospace Engineering and minoring in robotics. I love building legos, watching random shows and anime, and trying new coffee shops. I'm mostly interested in computer vision, controls, and mechatronics!",
    email: 'nithyachalla@utexas.edu',
    img: nithyaImg
  },
  {
    initials: 'NS',
    name: 'Navya Swali',
    role: 'ARGO III Lead',
    bio: "",
    email: 'swalinav000@gmail.com',
    //img: navyaImg
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
