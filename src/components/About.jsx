import React from "react";
import "./portfolio.css";


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white detail">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 sm: mt-10">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I completed my Graduation in Bachelor of Arts in the year 2020. Then after I took training on Full-Stack
           development course. As I am a fresher seeking a challenging position in a reputable organization to expand and utilize  my learning,
           skills and knowledge. Possess excellent communication skills and have an eye for detail. Looking to start the career as an
           entry-level web developer with a reputed firm driven by technology.
        </p>

        <br />

        
      </div>
    </div>
  );
};

export default About;