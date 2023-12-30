import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { IoIosChatboxes } from "react-icons/io";
import {
    FaReact,
    FaCss3,
    FaHtml5,
    FaPhp,
    FaLaravel,
    FaGithub,
    FaGithubAlt,
  } from "react-icons/fa";
  import { TbBrandJavascript } from "react-icons/tb";
  import { PiDevToLogo } from "react-icons/pi";
  import { 
    SiJest, 
    SiRedux, 
    SiMysql, 
    SiVercel, 
    SiDaisyui, 
    SiWebpack, 
    SiNodedotjs, 
    SiRuby, 
    SiRubyonrails, 
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiBootstrap,
  } from "react-icons/si";  
import Hero from "../components/Hero";

function AboutMe() {
    const [activeTab, setActiveTab] = useState('all');
    const [frontendTools, setFrontendTools] = useState([]);
    const [backendDatabases, setBackendDatabases] = useState([]);
    const [SkillTools, setSkillTools] = useState([]);

    const technologyStack = {
        frontend: {
          tools: [
            { name: 'JavaScript', icon: <TbBrandJavascript />, color: 'bg-newYellow' },
            { name: 'React', icon: <FaReact />, color: 'bg-blue-300' },
            { name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500' },
            { name: 'CSS3', icon: <FaCss3 />, color: 'bg-blue-600' },
            { name: 'Redux', icon: <SiRedux />, color: 'bg-purple-500' },
            { name: 'Tailwind', icon: <SiTailwindcss />, color: 'bg-teal-500' },
            { name: 'Bootstrap', icon: <SiBootstrap />, color: 'bg-purple-900' },
            { name: 'Webpack', icon: <SiWebpack />, color: 'bg-blue-500' },
            { name: 'DaisyUI', icon: <SiDaisyui />, color: 'bg-teal-600' },
          ],
        },
        backend: {
          tools: [
            { name: 'Node.js', icon: <SiNodedotjs /> , color: 'bg-purple-500' },
            { name: 'PHP', icon: <FaPhp /> , color: 'bg-blue-600' },
            { name: 'Ruby', icon: <SiRuby /> , color: 'bg-red-500' },
            { name: 'Laravel', icon: <FaLaravel /> , color: 'bg-red-400' },
            { name: 'Ruby on Rails', icon: <SiRubyonrails /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'MySQL', icon: <SiMysql /> , color: 'bg-orange-400' },
            { name: 'PostgreSQL', icon: <SiPostgresql /> , color: 'bg-blue-900' },
          ],
        },
        tools: [
          { name: 'Git', icon: <FaGithub />, color: 'bg-gray-500' },
          { name: 'GitHub', icon: <FaGithubAlt />, color: 'bg-gray-600' },
          { name: 'vercel', icon: <SiVercel />, color: 'bg-gray-950' },
          { name: 'DevTools', icon: <PiDevToLogo />, color: 'bg-blue-500' },
          { name: 'Jest', icon: <SiJest />, color: 'bg-red-600' },
        ],
      };
    
      useEffect(() => {
        setFrontendTools(technologyStack.frontend.tools);
        setBackendDatabases(technologyStack.backend.tools);
        setSkillTools(technologyStack.tools);
      }, []);
    
      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    
      const fadeInAnimationVarients = {
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.05 * index,
          }
        }),
      }

  return (
    <>
      <Hero
        name="ABOUT ME"
        details="IT’S A-ME, MARIO!"
        backgroundImage="src/assets/my-projects-background.jpg"
      />
      <section className="text-black">
        <div className="container space-y-10 py-16">
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1 font-robotoCondensed">My Background</h3>
            <p className="text-base whitespace-break-spaces font-robotoOriginal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. <br />
              <br />
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. <br />
              <br />
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </p>
          </article>
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-4 font-robotoCondensed">My Skills</h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex flex- justify-center items-start gap-0 mb-10 md:gap-3">
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white ${
                activeTab === 'all' ? 'bg-newGreen text-black hover:bg-newGreen' : 'hover:text-violet-500 hover:bg-newYellow'
              }`}
              onClick={() => handleTabChange('all')}
            >
              All
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white hover:text-white ${
                activeTab === 'frontend' ? 'bg-newGreen text-black hover:bg-newGreen' : 'hover:text-violet-500 hover:bg-newYellow'
              }`}
              onClick={() => handleTabChange('frontend')}
            >
              Frontend
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white hover:text-white ${
                activeTab === 'backend' ? 'bg-newGreen text-black hover:bg-newGreen' : 'hover:text-violet-500 hover:bg-newYellow'
              }`}
              onClick={() => handleTabChange('backend')}
            >
              Backend
            </button>
            <button
              className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white hover:text-white hover:bg-newYellow ${
                activeTab === 'tools' ? 'bg-newGreen text-black hover:bg-newGreen' : 'hover:text-violet-500'
              }`}
              onClick={() => handleTabChange('tools')}
            >
              Tools
            </button>
          </motion.div>
          <article className="grid grid-cols-1 gap-12">
          {activeTab === 'all' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {frontendTools.map((tool, index) => (
                    <motion.li 
                      variants={fadeInAnimationVarients}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      key={index} 
                      className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{tool.name}</p>
                    </motion.li>
                  ))}
                  {backendDatabases.map((database, index) => (
                    <motion.li 
                      variants={fadeInAnimationVarients}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      key={index} 
                      className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${database.color}`}>
                      <span className="text-4xl md:text-6xl">{database.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{database.name}</p>
                    </motion.li>
                  ))}
                  {SkillTools.map((tool, index) => (
                    <motion.li 
                      variants={fadeInAnimationVarients}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      key={index} 
                      className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm">{tool.name}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'frontend' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {frontendTools.map((tool, index) => (
                    <motion.li 
                      variants={fadeInAnimationVarients}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      key={index} 
                      className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm md:text-lg">{tool.name}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'backend' && (
            <div className="grid flex-grow place-items-center py-10">
              <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                {backendDatabases.map((database, index) => (
                  <motion.li 
                    variants={fadeInAnimationVarients}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                    key={index} 
                    className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${database.color}`}>
                    <span className="text-4xl md:text-6xl">{database.icon}</span>
                    <p className="font-semibold text-sm md:text-lg">{database.name}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
            )}
            {activeTab === 'tools' && (
              <div className="grid flex-grow place-items-center py-10">
                <ul className="flex flex-wrap gap-5 mb-0 justify-center items-center text-white">
                  {SkillTools.map((tool, index) => (
                    <motion.li 
                      variants={fadeInAnimationVarients}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      key={index} 
                      className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}>
                      <span className="text-4xl md:text-6xl">{tool.icon}</span>
                      <p className="font-semibold text-sm">{tool.name}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
            </article>
          </article>
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1 font-robotoCondensed">
              My Hobbies and Interests
            </h3>
            <p className="text-base whitespace-break-spaces font-robotoOriginal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. <br />
              <br />
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. <br />
              <br />
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
            </p>
          </article>
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1 font-robotoCondensed">
              Connect with me
            </h3>
            <p className="text-base whitespace-break-spaces font-robotoOriginal">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </article>
          <div className="flex flex-col justify-center items-center gap-10 mt-10 md:flex-row">
            <Link
              to="/contact"
              className="p-3 px-10 text-black bg-gradient-to-r from-indigo-300 to-blue-400 flex justify-center items-center gap-1 w-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
            >
              <IoIosChatboxes className="text-2xl" />
              CONTACT ME
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
