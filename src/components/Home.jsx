import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import back from '../assets/new.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen bg-[#09162a]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm Yash Shah
        </h2>
        <h1 className="text-gray-500">
          software developer,full Stack Developer
        </h1>
        <p className="text-gray-500 py-4 max-w-md">
           I am a New-Grad with projects and internships as my experience .
          Currently, I love to work on application using technologies like
          Java, Javascript, React, Next.js and Mongodb.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div  class="bg-blend-lighten md:bg-blend-darken">
        <img
          src={back}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;