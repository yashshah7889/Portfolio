import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {FaAws, FaReact,FaPython,FaJava,FaHtml5,FaCss3,FaNodeJs} from 'react-icons/fa';
import {SiMongodb,SiMysql,SiFirebase,SiJavascript} from 'react-icons/si';
import {FcAndroidOs} from 'react-icons/fc';
import {TbBrandCpp} from 'react-icons/tb';

import C from 'programming-languages-logos/src/c/c.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#09162a] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaHtml5 size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaCss3 size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaNodeJs size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaReact size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <AiFillGithub size={50} />
              </div>
              
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <FaJava size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <FaPython size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <SiJavascript size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={C} alt="C" width="50" height="20"></img>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <SiMongodb size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <SiMysql size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <SiFirebase size={50}/>
              </div>
             
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <FcAndroidOs size={50}/>
              </div>
              <div className='box-border h-14 w-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <FaAws size={50} />
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;