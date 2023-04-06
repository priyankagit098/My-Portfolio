import React from 'react'
import "./Banner.css"
import {Link} from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profilePic from "../portfoliopics/proPic.jpg";

const Banner = () => {
  return (
    <section className="home" id="homepage">
      <div className="home-content">
       <h3>Hi, It's Me</h3>
       <h1>Priyanka Nallamothu</h1>
       <h3>Aspiring to be an <span>Frontend Developer  </span></h3>
      {/* <p className="paragraph">Lorem dollar sit amn,f cjcmnc ccakc cacak ckamca akmma </p> */}
      {/*   */}
      <div className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer btn"><Link to="portfolio" spy={true} offset={50} duration={500}>Projects</Link>
      <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} className="ml-1"/></span>
      </div>
      
      </div>
      <div className="home-img">
        <img src={profilePic} className="heading" alt="profile-pic"/>
      </div>
    </section>
  )
}

export default Banner