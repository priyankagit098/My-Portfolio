import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import "./Nabar.css";
import {Link} from "react-scroll";

const Nabar = () => {

  const [nav, setNav]=useState(false);

  const links = [
    {
      id: 1,
      link: "homepage",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];


  return (
    <div className="header">
        <h1 className="font-signature cursor-pointer logo"> Portfolio.</h1>
     
        {/* <a href="#" className="active" style={{"--i" : 1}}>Home</a>
        <a href="#" style={{"--i" : 2}}>About</a>
        <a href="#" style={{"--i" : 3}}>Skills</a>
        <a href="#" style={{"--i" : 4}}>Portfolio</a>
        <a href="#" style={{"--i" : 5}}>Contact</a> */}
        <ul className="hidden md:inline-block navbar ">
        
          <li className="active" style={{"--i" : 1}}><Link to="homepage" spy={true} offset={50} duration={500}>Home</Link></li>
          <li style={{"--i" : 2}}><Link to="about" spy={true} offset={50} duration={500}>About</Link></li>
          <li style={{"--i" : 3}}><Link to="portfolio" spy={true} offset={50} duration={500}>Projects</Link></li>
          <li style={{"--i" : 4}}><Link to="skills" spy={true} offset={50} duration={500}>Skills</Link></li>
          <li style={{"--i" : 5}}><Link to="contact" spy={true} offset={50} duration={500}> Contact</Link></li>
          
          
         
          
        </ul>
     <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
      {nav ? (<FaTimes size={30}/>) : (<FaBars size={30}/>)}
      
     </div>
     {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>{link}</Link>
              
            </li>
          ))}
        </ul>
      )}


    </div>
  )
}

export default Nabar