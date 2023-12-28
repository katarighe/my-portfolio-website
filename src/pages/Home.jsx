/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaChrome,
  FaGitAlt,
} from "react-icons/fa";
import {  
  SiDaisyui, 
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiNpm,
} from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Hero from "../components/Hero";
import project1 from '../assets/project1.png'

function Home() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-[#E44D26]' },
    { name: 'CSS', icon: <FaCss3 />, color: 'text-blue-600' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'ReactJS', icon: <FaReact />, color: 'text-{#00D8FF}' },
    { name: 'NodeJS', icon: <SiNodedotjs />, color: 'text-[#539E43]' },
    { name: 'Figma ', icon: <SiFigma />, color: 'text-red-500' },
    { name: 'Chrome', icon: <FaChrome />, color: 'text-yellow-500' },
    { name: 'VS Code', icon: <TbBrandVscode />, color: 'text-blue-500' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-[#DE4C36]' },
    { name: 'NPM', icon: <SiNpm />, color: 'text-[#C12127]' },
  ]

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Book A Doctor",
      image: project1,
      details:
        "A frontend/backend application that allows users to book appointments with doctors. Access to the application requires users to sign up or sign in, which can be done through the provided forms.",
      techStack: "Ruby, Rails, ReactJS, PostgreSQL, Bootstrap, & API",
      live: "https://leaderboard-5318etbmg-ticoniq.vercel.app",
      source: "https://github.com/katarighe/book-appointment-back-end",
    },
    {
      id: 2,
      title: "Mini World Atlas",
      image: project1,
      details:
        "A mobile web application that allows users to check a list of metrics (numeric values) retrieved from a selected API. The API that was selected is called REST countries, where you can get information about countries via a RESTful API.",
      techStack: "React JS, Route, Redux, & API",
      live: "https://benevolent-crostata-5c4bea.netlify.app/",
      source: "https://github.com/katarighe/capstone-metrics-webapp",
    },
    {
      id: 3,
      title: "SmartPocket Budget",
      image: project1,
      details:
        "A budget app named SmartPocket Budget keeps track of all your expenses associated with categories.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://moyen-budget.onrender.com/",
      source: "https://github.com/katarighe/budget-app",
    },
  ]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const fadeInAnimationVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(", ") : [];
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProjectIndex]);

  const prevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = sortedProjects[selectedProjectIndex];

  return (
    <>
      <Hero name="Mohamed Aden Ighe" details="FULL STACK WEB DEVELOPER / DATA ANALYST" />
      <section className="text-black">
        <div className="container space-y-10 py-16">
          <article className="max-w-[35rem] mx-auto">
          <img src="src/assets/mai-profile.jpg" alt="About Me" className="mr-4 max-w-[20rem] max-h-[20rem] mx-auto flex items-center" />
            <h3 className="font-bold text-[2rem] mb-1 font-robotoCondensed">About Me</h3>
            <p className="text-base font-robotoOriginal">Dedicated full-stack developer and data analyst committed to ongoing skill development. I relish learning new languages and frameworks, and I apply a focused, mindful approach to deliver clean, well-tested code. I seek opportunities to leverage my expertise in impactful projects that make a difference through thoughtful web development.</p>
          </article>
          <article className="max-w-[35rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-4 font-robotoCondensed">My Skills</h3>
            <ul className="flex flex-wrap gap-5 justify-start items-center text-white">
              {skills.map((tool, index) => (
                <li
                  key={index} 
                  className={`flex flex-row flex-grow items-start gap-2`}>
                  <span className={`text-xl ${tool.color}`}>{tool.icon}</span>
                  <p className="font-semibold text-base text-black font-robotoOriginal">{tool.name}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <article className="max-w-[35rem] mx-auto">
        <h3 className="font-bold text-[2rem] mb-4 font-robotoCondensed">My Projects</h3>
        </article>
        <div className="container py-5 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div className="" key={item.id}>
                <div className="relative mb-6 overflow-hidden bg-cover bg-no-repeat bg-black shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full" />
                  {/* <a onClick={() => openModal(index)}>
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]" />
                  </a> */}
                    <div
                      className="absolute inset-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out bg-[hsla(0,0%,99%,0.15)]">
                        <div className="flex h-full items-start justify-start">
                          <div className="m-6 text-white">
                            <h5 className="mb-3 text-lg font-bold font-robotoCondensed">{item.title}</h5>
                            {techStackToArray(item.techStack).map((tech, index) => (
                              <span
                                key={index}
                                className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold font-robotoOriginal">
                                {tech}
                              </span>
                            ))}
                            <div className="mt-4 flex justify-start gap-5 self-end text-sm">
                              <a
                                href={item.source}
                                rel="noreferrer"
                                target="_blank"
                                className="text-newDarkGray font-bold flex gap-1 font-robotoCondensed">
                                <CodeBracketIcon className="w-4" />
                                Source Code
                              </a>
                              <a
                                href={item.live}
                                rel="noreferrer"
                                target="_blank"
                                className="text-newDarkGray font-bold flex gap-1 font-robotoCondensed">
                                <EyeIcon className="w-4" />
                                Live Preview
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-10 mt-10 md:flex-row">
            <Link
              to="/project"
              className="p-3 px-10 text-black bg-[#54d4ca] text-base flex justify-center items-center gap-1 w-full md:w-fit font-robotoOriginal hover:scale-110 transition-transform duration-300">
              <IoIosArrowRoundForward className="text-2xl" />
                MORE PROJECTS
            </Link>
            <Link
              to="/contact"
              className="p-3 px-10 text-black bg-[#54d4ca] text-base flex justify-center items-center gap-1 w-full md:w-fit font-robotoOriginal hover:scale-110 transition-transform duration-300">
              <IoIosArrowRoundForward className="text-2xl" />
                CONTACT ME
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;