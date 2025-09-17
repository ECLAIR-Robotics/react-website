import arnavImg from '../images/officer/arnav.webp'
import cameronImg from '../images/officer/cameronProfessional.webp'
import manasImg from '../images/officer/manas.webp'
import zoeImg from '../images/officer/zoe.webp'
import rizkyImg from '../images/officer/rizky.webp'
import aniketImg from '../images/officer/aniket.webp'
import annaImg from '../images/officer/anna.webp'
import manavImg from '../images/officer/manav.webp'

import tanayImg from '../images/officer/tanay.webp'
import sahanaImg from '../images/officer/sahana.webp'
import umerImg from '../images/officer/umer.webp'
import tanyaImg from '../images/officer/tanya.webp'
import tanviImg from '../images/officer/tanvi.webp'
import isabellaImg from '../images/officer/isabella.webp'
import danielImg from '../images/officer/daniel.webp'


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
}

export const OFFICER_NAMES: { [key: string]: string } = {
    PRESIDENT: "Arnav Joshi",
    VICE_PRESIDENT: "Cameron Cox",
    CORPORATE: "Aniket Gupta",
    OUTREACH: "Anna Iskra",
    EVENT: "Manav Karonde",
    PR: "Zoe Vo",
    TECHNOLOGY: "Manas Agrawal",
    FINANCIAL: "Rizky Pratama",
}

export const OFFICER_EMAILS: { [key: string]: string } = {
    PRESIDENT: "arnavjoshi@utexas.edu",
    VICE_PRESIDENT: "campatcox@gmail.com",
    CORPORATE: "aniketg@utexas.edu",
    OUTREACH: "anna.iskra@utexas.edu",
    EVENT: "karonde.manav@gmail.com",
    PR: "zk4thyv@gmail.com",
    TECHNOLOGY: "manas.agrawal2@utexas.edu",
    FINANCIAL: "rizkyapratama100@gmail.com",
}

export const OFFICER_LINKED_INS: { [key: string]: string } = {
    PRESIDENT: "https://www.linkedin.com/in/arnavsjoshi/",
    VICE_PRESIDENT: "https://www.linkedin.com/in/cameron-cox-ut/",
    CORPORATE: "https://www.linkedin.com/in/aniketgupta25/",
    OUTREACH: "https://www.linkedin.com/in/a-spark/",
    EVENT: "https://www.linkedin.com/in/manav-karonde-678b39319/",
    PR: "https://www.linkedin.com/in/zoe-vo-b73b9b317/",
    TECHNOLOGY: "https://www.linkedin.com/in/manas-agrawal-41231a245/",
    FINANCIAL: "https://www.linkedin.com/in/rapratama1/",
}

export const OFFICER_DESCS: { [key: string]: string } = {
    PRESIDENT: "Hi, I'm Arnav! I'm a third year C.S. major minoring in robotics. I've been making robots going on six years now, and particularly enjoy being somewhere in between the hardware and the software. In other news, I like running, climbing, hiking (motion may be a trend here), and playing music, and just about any sport. Open to song reccomendations, welcome to ECLAIR",
    VICE_PRESIDENT: "Hey y'all, my name is Cameron! I'm a CS major minoring in robotics. I love combat robotics but my end goal is to make robots that improve our home lives. In my free time I play the piano, sing, ballroom dance, and play chess, D&D, and Zelda games.",
    CORPORATE: "Hi, I’m Aniket Gupta, a junior majoring in Computer Science at UT Austin, from Bentonville, Arkansas. I previously led ECLAIR’s Beginner’s Track for two semesters and enjoy delivering technical lectures at hackathons. I’m passionate about AI and SWE, and I’m excited to help expand ECLAIR’s corporate footprint this year (please dm me on LinkedIn!)",
    OUTREACH: "Hi y’all, I’m Anna! I’m a Mathematics and Plan II dual major pursing a minor in SDS and way too many certificates (all related to scientific computing, my hopeful career field!). In my free time, I love to read and write screenplays, develop interactive fiction games, and GM tabletop RPGs. Honk if you love computer vision :)",
    EVENT: "Hello friend, My name is Manav and I'm a sophmore in Computer Science here at UT. I've lived in Austin for the past decade, but am from New York originally. I've spent the past two semesters on CRACKLE, but when I'm not doing that or building wacky personal robotics projects, I like to play the drums / guitar (especially rock punk and blues), dabble in photography, drive around windows down with my dog, or just stare at a blank wall and contemplate life.",
    PR: "Hi I'm Zoe and I'm a Mechanical Engineering major. My favorite book series, movie franchise, and religion is The Hunger Games. Please marry me Thida",
    TECHNOLOGY: "Hi, my name is Manas. I'm the technology director at ECLAIR. I'm majoring in Computer Science and have a minor in Robotics. I love TTRPGs, swimming, and trying out new foods. I'm super interested in Robot Perception and Computer Vision. Join me in CRACKLE (the best ECLAIR Project). We have tons of fun!",
    FINANCIAL: "Hi! I'm Rizky. I'm a 2nd year CS major from Katy, Texas with an interest in Robotics, Computer Vision, and AI. Outside of that, I boulder, play D&D, dance, and eat lots. Never challenge me to a card game.",
}

export const OFFICER_FUN_IMAGES: { [key: string]: any } = {
    PRESIDENT: arnavImg,
    VICE_PRESIDENT: cameronImg,
    CORPORATE: aniketImg,
    OUTREACH: annaImg,
    EVENT: manavImg,
    PR: zoeImg,
    TECHNOLOGY: manasImg,
    FINANCIAL: rizkyImg,
}

export const TECH_LEAD_KEYS = [
    "CRACKLE1",
    "CRACKLE2",
    "TRACE1",
    "TRACE2",
    "AUTONOMOUS_CAR",
    "TEXEL_ARTS",
    "BEGINNERS_TRACK1",
    "BEGINNERS_TRACK2",
    "EPIC1",
    "EPIC2",
    "DUCKDUCKFLOW"
];

export const TECH_LEAD_NAMES: { [key: string]: string} = {
    CRACKLE1: "Tanay Garg",
    CRACKLE2: "Manav Karonde",
    TRACE1: "Arnav Joshi",
    TRACE2: "Rizky Pratama",
    AUTONOMOUS_CAR: "Sahana Ganapathy",
    TEXEL_ARTS: "Umer Khan",
    BEGINNERS_TRACK1: "Daniel Lagoye",
    BEGINNERS_TRACK2: "Tanooj Kanike",
    EPIC1: "Tanya Nikam",
    EPIC2: "Tanvi Nikam",
    DUCKDUCKFLOW: "Isabella Yim"
}

export const TECH_LEAD_EMAILS: { [key: string]: string } = {
    CRACKLE1: "tanay.garg@utexas.edu",
    CRACKLE2: "karonde.manav@gmail.com",
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
    CRACKLE1: "https://www.linkedin.com/in/tanay-garg/",
    CRACKLE2: "https://www.linkedin.com/in/manav-karonde-678b39319/",
    TRACE1: "https://www.linkedin.com/in/arnavsjoshi/",
    TRACE2: "https://www.linkedin.com/in/rapratama1/",
    AUTONOMOUS_CAR: "https://www.linkedin.com/in/sahana-ganapathy/",
    TEXEL_ARTS: "https://www.linkedin.com/in/umerkhan000/",
    BEGINNERS_TRACK1: "https://www.linkedin.com/in/daniel-lagoye/",
    BEGINNERS_TRACK2: "",
    EPIC1: "https://www.linkedin.com/in/tanyaknikam/",
    EPIC2: "https://www.linkedin.com/in/tanvi-nikam-6736a827b/",
    DUCKDUCKFLOW: "https://www.linkedin.com/in/iyim/"
}

export const TECH_LEAD_DESCS: { [key: string]: string } = {
    CRACKLE1: "Hi! I am Tanay, and I am a CS major at UT Austin. I love Formula 1, soccer, and playing the guitar! I want to use AI to revolutionize educational technology!",
    CRACKLE2: "Hello friend, My name is Manav and I'm a sophmore in Computer Science here at UT. I've lived in Austin for the past decade, but am from New York originally. I've spent the past two semesters on CRACKLE, but when I'm not doing that or building wacky personal robotics projects, I like to play the drums / guitar (especially rock punk and blues), dabble in photography, drive around windows down with my dog, or just stare at a blank wall and contemplate life.",
    TRACE1: "Our unprofessional president does not know how to send descriptions on time so the technology director is leaving this here until he fixes it",
    TRACE2: "Hi! I'm Rizky. I'm a CS major from Katy, Texas with an interest in Robotics, Computer Vision, and AI. Outside of that, I boulder, dance, play D&D, and eat lots. Never challenge me to a card game:P",
    AUTONOMOUS_CAR: "Hello, I am Sahana. I'm a CS major and a senior with interests in system security and machine learning. Aside from that, I love painting, climbing, and gaming >:D",
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
    TRACE1: arnavImg,
    TRACE2: rizkyImg,
    AUTONOMOUS_CAR: sahanaImg,
    TEXEL_ARTS: umerImg,
    BEGINNERS_TRACK1: danielImg,
    BEGINNERS_TRACK2: placeholderImg, //Need
    EPIC1: tanyaImg,
    EPIC2: tanviImg,
    DUCKDUCKFLOW: isabellaImg
}