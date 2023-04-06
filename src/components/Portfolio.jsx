import React from "react";
import "./portfolio.css";



import foodMunch from '../portfoliopics/foodMunch.png';
import netflix from '../portfoliopics/netflix.png';
import youtube from '../portfoliopics/youtube.png';
import gym from '../portfoliopics/gym.png';
import wikipedia from '../portfoliopics/wikipedia.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodMunch,
      link: "https://drive.google.com/file/d/1wJSTmBABCq8nk9uR2hoUpBwO6cKEy-Qs/view",
      gitCode: "https://github.com/priyankagit098/FoodMunch-StaticWebsite"
    },
    {
      id: 2,
      src: netflix,
      link:  "https://drive.google.com/file/d/1rvFS4DESqvhqQL3jnFOHmB99L2jzAlgh/view",
      gitCode: "https://github.com/priyankagit098/Netflix-clone-app"
    },
    {
      id: 3,
      src: youtube,
      link: "https://drive.google.com/file/d/19QJAs--L_BgXfZv06Tk1wTL5ItPqmLFA/view",
      gitCode: "https://github.com/priyankagit098/youtube-clone"
    },
    {
      id: 4,
      src: gym,
      link: "https://drive.google.com/file/d/1zls34wnjfH-EIkZPX3E4sYt_YcVYNDku/view?usp=share_link",
      gitCode: "https://github.com/priyankagit098/Gym-Exercise-App"
    },
    {
      id: 5,
      src: wikipedia,
      link: "https://drive.google.com/file/d/1Gtp321IGN6xyjX6M4hpThR3pX28mDKfO/view",
      gitCode: "https://github.com/priyankagit098/wikipedia-website"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className=" w-full text-white md:h-screen details sm: mt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 detail">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-5">
          {portfolios.map(({ id, src, link, gitCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              
               
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 images"
              />
              
              
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={link} target="_">Demo</a>
                  
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={gitCode} target="_">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;