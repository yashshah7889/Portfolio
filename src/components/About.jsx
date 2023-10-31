
import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#09162a] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Yash Shah. Thanks for visiting my portfolio.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Having recently graduated with a master's degree in applied computer science from Concordia University, I come equipped with the invaluable experience of two substantial internships that have allowed me to refine my abilities as a software developer. 
                With a strong grasp of various programming languages and software development approaches, I excel in the art of creating software applications, skillfully identifying and resolving coding challenges, and thriving within the dynamics of collaborative team environments.
                My comprehensive familiarity with a diverse range of software development tools and technologies underscores my eagerness to further enhance my skills and bring valuable contributions to innovative, tech-driven enterprises.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

