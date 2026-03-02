import arnavImg from '../images/officer/arnav.webp'
import cameronImg from '../images/officer/cameronProfessional.webp'
import manasImg from '../images/officer/manas.webp'
import zoeImg from '../images/officer/zoe.webp'
import rizkyImg from '../images/officer/rizky.webp'
import aniketImg from '../images/officer/aniket.webp'
import annaImg from '../images/officer/anna.webp'
import manavImg from '../images/officer/manav.webp'
import nogaImg from '../images/officer/noga.webp'
import nuzhatImg from '../images/officer/nuzhat.webp'

import tanayImg from '../images/officer/tanay.webp'
import sahanaImg from '../images/officer/sahana.webp'
import umerImg from '../images/officer/umer.webp'
import suhasImag from '../images/officer/suhas.webp'
import yashImg from '../images/officer/yash.webp'
import chrisImg from '../images/officer/chris.webp'
import devImg from '../images/officer/dev.webp'
import marcusImg from '../images/officer/marcus.webp'
import victorImg from '../images/officer/victor.webp'


import placeholderImg from '../images/officer/placeholder.webp'

export const OFFICER_KEYS = [
  "PRESIDENT",
  "VICE_PRESIDENT",
  "CORPORATE",
  "OUTREACH",
  "EVENT",
  "PR",
  "TECHNOLOGY",
  "FINANCIAL",
//   "FRESHMAN_REP",
];

export const OFFICER_POSITIONS: { [key: string]: string } = {
    PRESIDENT: "President",
    VICE_PRESIDENT: "Vice President",
    CORPORATE: "Corporate Director",
    OUTREACH: "Outreach Director",
    EVENT: "Event Director",
    PR: "Public Relations Director",
    TECHNOLOGY: "Technology Director",
    FINANCIAL: "Financial Director",
    // FRESHMAN_REP: "Freshman Representative"
}

export const OFFICER_NAMES: { [key: string]: string } = {
    PRESIDENT: "Arnav Joshi",
    VICE_PRESIDENT: "Cameron Cox",
    CORPORATE: "Manas Agrawal",
    OUTREACH: "Nosa Rosenberg",
    EVENT: "Manav Karonde",
    PR: "Zoe Vo",
    TECHNOLOGY: "Nuzhat Nabi",
    FINANCIAL: "Rizky Pratama",
    // FRESHMAN_REP: "Vishnu Sharma",
}

export const OFFICER_EMAILS: { [key: string]: string } = {
    PRESIDENT: "arnavjoshi@utexas.edu",
    VICE_PRESIDENT: "cameron.cox@utexas.edu",
    CORPORATE: "manas.agrawal2@utexas.edu",
    OUTREACH: "anoga.rosenberg007@gmail.com",
    EVENT: "karonde.manav@gmail.com",
    PR: "zk4thyv@gmail.com",
    TECHNOLOGY: "nuzhat.nabi@utexas.edu",
    FINANCIAL: "rizkyapratama100@gmail.com",
    // FRESHMAN_REP: "vishnuamogha.sharma@gmail.com",
}

export const OFFICER_LINKED_INS: { [key: string]: string } = {
    PRESIDENT: "https://www.linkedin.com/in/arnavsjoshi/",
    VICE_PRESIDENT: "https://www.linkedin.com/in/cameron-cox-ut/",
    CORPORATE: "https://www.linkedin.com/in/manas-agrawal-41231a245/",
    OUTREACH: "https://www.linkedin.com/in/nogarosenberg/",
    EVENT: "https://www.linkedin.com/in/manav-karonde-678b39319/",
    PR: "https://www.linkedin.com/in/zoe-vo-b73b9b317/",
    TECHNOLOGY: "https://www.linkedin.com/in/nuzhat-nabi-b3111b368/",
    FINANCIAL: "https://www.linkedin.com/in/rapratama1/",
    // FRESHMAN_REP: "";
}

export const OFFICER_DESCS: { [key: string]: string } = {
    PRESIDENT: "Hi, I'm Arnav! I'm a third year C.S. major minoring in robotics. I've been making robots going on six years now, and particularly enjoy being somewhere in between the hardware and the software. In other news, I like running, climbing, hiking (motion may be a trend here), and playing music, and just about any sport. Open to song reccomendations, welcome to ECLAIR",
    VICE_PRESIDENT: "Hey y'all my name is Cameron! I'm a CS major minoring in robotics. I love combat robotics and my goal is to one day make robots that improve our home lives. In my free time I play the piano, chess, D&D, Zelda games and I love to sing ang ballroom dance.",
    CORPORATE: "Hi, my name is Manas. I'm the technology director at ECLAIR. I'm majoring in Computer Science and have a minor in Robotics. I love TTRPGs, swimming, and trying out new foods. I'm super interested in Robot Perception and Computer Vision. Join me in CRACKLE (the best ECLAIR Project). We have tons of fun!",
    OUTREACH:  "Hi! My name is Noga and I'm major in Computer Science. My interests include software development and cybersecurity. In my free time, I enjoy playing video games, TTRGs, and watching too many movies.",
    EVENT: "Hello friend, My name is Manav and I'm a sophmore in Computer Science here at UT. I've lived in Austin for the past decade, but am from New York originally. I've spent the past two semesters on CRACKLE, but when I'm not doing that or building wacky personal robotics projects, I like to play the drums / guitar (especially rock punk and blues), dabble in photography, drive around windows down with my dog, or just stare at a blank wall and contemplate life.",
    PR: "Hi I'm Zoe and I'm a Mechanical Engineering major. My favorite book series, movie franchise, and religion is The Hunger Games. Please marry me Thida",
    TECHNOLOGY: "Hello! My name is Nuzhat. I am a Computer Science major interested in robotics, AI, and full-stack web development. I mainly do software stuff but hoping to learn more hardware content. I enjoy playing games (board, card, and video games) and hanging out with friends.",
    FINANCIAL: "Hi! I'm Rizky. I'm a 2nd year CS major from Katy, Texas with an interest in Robotics, Computer Vision, and AI. Outside of that, I boulder, play D&D, dance, and eat lots. Never challenge me to a card game.",
    // FRESHMAN_REP: "Hey, I'm Vishnu! I'm a CS major from New Jersey interested in software, AI, and robotics. In my free time, I like reading, learning new things, and hanging out with friends.",
}

export const OFFICER_FUN_IMAGES: { [key: string]: any } = {
    PRESIDENT: arnavImg,
    VICE_PRESIDENT: cameronImg,
    CORPORATE: manasImg,
    OUTREACH: nogaImg,
    EVENT: manavImg,
    PR: zoeImg,
    TECHNOLOGY: nuzhatImg,
    FINANCIAL: rizkyImg,
}

export const CUR_TECH_LEAD_KEYS = [
    "CRACKLE1",
    "CRACKLE2",
    "MCQUEEN1",
    "MCQUEEN2",
    "TAKOS1",
    "TAKOS2",
    "AUTONOMOUS_CAR1",
    "AUTONOMOUS_CAR2",
    "EYE_TRACKER",
];

export const TECH_LEAD_NAMES: { [key: string]: string} = {
    CRACKLE1: "Tanay Garg",
    CRACKLE2: "Manav Karonde",
    MCQUEEN1: "Suhas Voolla",
    MCQUEEN2: "Yash Karandikar",
    TAKOS1: "Christopher Elwood",
    TAKOS2: "Rizky Pratama",
    EYE_TRACKER: "Dev Patel",
    TRACE1: "Arnav Joshi",
    TRACE2: "Rizky Pratama",
    AUTONOMOUS_CAR1: "Marcus Fojas",
    AUTONOMOUS_CAR2: "Victor Sanchez",
    TEXEL_ARTS: "Umer Khan",
    BEGINNERS_TRACK1: "Daniel Lagoye",
    BEGINNERS_TRACK2: "Tanooj Kanike",
    EPIC1: "Tanya Nikam",
    EPIC2: "Tanvi Nikam",
    DUCKDUCKFLOW: "Isabella Yim",
    PCR1: "Angelica Sharma",
    PCR2: "Vishal Kantahraju",
    CHESS_TEACHER1: "Hursh Jha",
    CHESS_TEACHER2: "Anik Patel",
    AUTONOMOUS_DRONE: "Carson Stark",
    MUSIC_MOOD: "Sahana Ganapathy",
    ROBOTIC_ARM:"Sahil Jain",
    FITNESS_TRACKER: "Kyrylo Boiko",
    SMART_MIRROR: "Sahil Jain",
}

export const TECH_LEAD_EMAILS: { [key: string]: string } = {
    CRACKLE1: "tanay.garg@utexas.edu",
    CRACKLE2: "karonde.manav@gmail.com",
    MCQUEEN1: "suhasv@utexas.edu",
    MCQUEEN2: "yashkarandikar158@gmail.com",
    TAKOS1: "christopher.elwood2024@gmail.com",
    TAKOS2: "rapratama2005@gmail.com",
    EYE_TRACKER: "dap4675@my.utexas.edu",
    AUTONOMOUS_CAR1: "mtf758@my.utexas.edu",
    AUTONOMOUS_CAR2: "vjs653@eid.utexas.edu",
    TRACE1: "arnavjoshi@utexas.edu",
    TRACE2: "rapratama2005@gmail.com",
    AUTONOMOUS_CAR: "sahanagana@utexas.edu",
    TEXEL_ARTS: "umerkhan5110@gmail.com",
    BEGINNERS_TRACK1: "dan.lagoye@utexas.edu",
    BEGINNERS_TRACK2: "tanoojk.kanike@gmail.com",
    EPIC1: "tanyanikam@utexas.edu",
    EPIC2: "tanviknikam@utexas.edu",
    DUCKDUCKFLOW: "iyim@utexas.edu"
}

export const TECH_LEAD_LINKED_INS: { [key: string]: string } = {
    MCQUEEN1:"https://www.linkedin.com/in/suhasvoolla/",
    MCQUEEN2:"https://www.linkedin.com/in/yashkarandikar/",
    TAKOS1: "https://www.linkedin.com/in/christopherelwood23/",
    TAKOS2: "https://www.linkedin.com/in/rapratama1/",
    EYE_TRACKER: "",
    CRACKLE1: "https://www.linkedin.com/in/tanay-garg/",
    CRACKLE2: "https://www.linkedin.com/in/manav-karonde-678b39319/",
    TRACE1: "https://www.linkedin.com/in/arnavsjoshi/",
    TRACE2: "https://www.linkedin.com/in/rapratama1/",
    AUTONOMOUS_CAR1: "https://www.linkedin.com/in/marcusthaddeusroquefojas/",
    AUTONOMOUS_CAR2: "",
    TEXEL_ARTS: "https://www.linkedin.com/in/umerkhan000/",
    BEGINNERS_TRACK1: "https://www.linkedin.com/in/daniel-lagoye/",
    EPIC1: "https://www.linkedin.com/in/tanyaknikam/",
    EPIC2: "https://www.linkedin.com/in/tanvi-nikam-6736a827b/",
    DUCKDUCKFLOW: "https://www.linkedin.com/in/iyim/"
}

export const TECH_LEAD_DESCS: { [key: string]: string } = {
    CRACKLE1: "Hi! I am Tanay, and I am a CS major at UT Austin. I love Formula 1, soccer, and playing the guitar! I want to use AI to revolutionize educational technology!",
    CRACKLE2: "Hello friend, My name is Manav and I'm a sophmore in Computer Science here at UT. I've lived in Austin for the past decade, but am from New York originally. I've spent the past two semesters on CRACKLE, but when I'm not doing that or building wacky personal robotics projects, I like to play the drums / guitar (especially rock punk and blues), dabble in photography, drive around windows down with my dog, or just stare at a blank wall and contemplate life.",
    MCQUEEN1: "Hey y'all, I'm Suhas. I'm from Austin, TX and I'm a sophomore at UT studying CS with minors in Robotics and Business. I enjoy flying drones, listening to music, and doomscrolling.",
    MCQUEEN2: "Hi! I am a sophomore CS major. I am interested in Robotics, Linux, and computing in general. When I’m not working on this project, I’m also a TA for CS 311!",
    TAKOS1: "I am Chris Elwood, I'm from Austin, TX, and I'm majoring in CS. I currently am a Sophomore and I have a special interest in hardware and robotics.",
    TAKOS2: "Hi! I'm Rizky. I'm a 2nd year CS major from Katy, Texas with an interest in Robotics, Computer Vision, and AI. Outside of that, I boulder, play D&D, dance, and eat lots. Never challenge me to a card game. :P",
    EYE_TRACKER: "Hi, I'm Dev! I'm a freshman biomedical engineering major on the pre-med track. I'm interested in all things that intersect engineering and medicine. Outside of school, I enjoy playing tennis and reading.",
    TRACE1: "Our unprofessional president does not know how to send descriptions on time so the technology director is leaving this here until he fixes it",
    TRACE2: "Hi! I'm Rizky. I'm a CS major from Katy, Texas with an interest in Robotics, Computer Vision, and AI. Outside of that, I boulder, dance, play D&D, and eat lots. Never challenge me to a card game:P",
    AUTONOMOUS_CAR1: "Hello! My name is Marcus, a third-year studying Economics (BS) and Philosophy along with four minors/certificates, one of which is \"the CS one\" (Programming and Computation). I have a dabbling interest in all technical/STEM fields in general, but you're also free to ask me about my majors relating to logic and ethics!",
    AUTONOMOUS_CAR2: "I'm Victor! I am a sophomore CS major and I am interested in AI, more specifically Reinforcement learning",
    TEXEL_ARTS: "Hey yall, I am CS and Math major that do be working on stuff.",
    BEGINNERS_TRACK1: " Hey! My name is Daniel and I'm an ECE major from Houston. I have quite a few things I'm interested in, but currently my main hobbies include badly learning guitar, making odd battlebots, and catching up on anime.",
    BEGINNERS_TRACK2: " I am a freshman at UT majoring in ECE Honors. I gained interest in robotics during my years competing in FTC, and have an interest in video game designing. I compete in online hackathons and program in MHCP",
    EPIC1: "Hi, I'm Tanvi! I'm a sophomore ECE major with a focus in power systems and power electronics. I love Formula !, dogs, and board games. In the furture, I hope to use electircal engineering to improve sustainable energy technology.",
    EPIC2: "Hi! My name is Tanya, and I’m studying ECE (Power Track) + Robotics. I like memes, escape rooms, Brawl Stars, and meeting/talking to people. I’m excited to be co-leading EPIC (self balancing robot :), and outside of that, I work at the Texas Inventionworks makerspace! My ultimate goal is to use engineering to protect our planet.",
    DUCKDUCKFLOW: "Hi! I'm a senior Computer Science major interested in website development and AI. I enjoy drawing, gardening, puns, and cooking (especially cooking up puns!)"
}

export const TECH_LEAD_FUN_IMAGES: { [key: string]: any }  = {
    CRACKLE1: tanayImg,
    CRACKLE2: manavImg,
    MCQUEEN1: suhasImag,
    MCQUEEN2: yashImg,
    TAKOS1: chrisImg,
    TAKOS2: rizkyImg,
    EYE_TRACKER: devImg,
    AUTONOMOUS_CAR1: marcusImg,
    AUTONOMOUS_CAR2: victorImg,
    TRACE1: arnavImg,
    TRACE2: rizkyImg,
    AUTONOMOUS_CAR: sahanaImg,
    TEXEL_ARTS: umerImg,

}