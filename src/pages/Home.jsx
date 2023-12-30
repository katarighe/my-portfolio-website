/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaCss3, FaHtml5, FaChrome, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiGithub,
  SiReact,
  SiRedux,
  SiRuby,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiAngular,
} from "react-icons/si";
import { IoIosChatboxes } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { IoIosPaper } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Hero from "../components/Hero";
import project1 from "../assets/background-project.jpg";

function Home() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-[#E44D26]" },
    { name: "CSS", icon: <FaCss3 />, color: "text-blue-600" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "React", icon: <SiReact />, color: "text-red-400" },
    { name: "Redux", icon: <SiRedux />, color: "text-red-400" },
    { name: "Ruby", icon: <SiRuby />, color: "text-red-400" },
    { name: "NodeJS", icon: <SiNodedotjs />, color: "text-[#539E43]" },
    { name: "PostgreSQL ", icon: <SiPostgresql />, color: "text-blue-500" },
    { name: "Chrome", icon: <FaChrome />, color: "text-yellow-500" },
    { name: "VS Code", icon: <TbBrandVscode />, color: "text-blue-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-[#DE4C36]" },
    { name: "GitHub", icon: <SiGithub />, color: "text-black" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "jQuery", icon: <SiJquery />, color: "text-blue-400" },
    { name: "Angular", icon: <SiAngular />, color: "text-red-600" },
  ];

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Book A Doctor",
      image: project1,
      details:
        "A frontend/backend application that allows users to book appointments with doctors. Access to the application requires users to sign up or sign in, which can be done through the provided forms.",
      techStack: "Ruby, Rails, ReactJS, PostgreSQL, Bootstrap, API",
      live: "https://book-doctor-appointment-frontend.netlify.app/",
      source: "https://github.com/katarighe/book-appointment-back-end",
    },
    {
      id: 2,
      title: "Mini World Atlas",
      image: project1,
      details:
        "A mobile web application that allows users to check a list of metrics (numeric values) retrieved from a selected API. The API that was selected is called REST countries, where you can get information about countries via a RESTful API.",
      techStack: "ReactJS, Route, Redux, API",
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

  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft") {
      prevProject();
    } else if (e.key === "ArrowRight") {
      nextProject();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const selectedProject = sortedProjects[selectedProjectIndex];

  return (
    <>
      <Hero
        name="Mohamed Aden Ighe"
        details="FULL STACK WEB DEVELOPER & DATA ANALYST"
        backgroundImage="src/assets/coding-background.jpg"
      />
      <section className="text-black">
        <div className="container space-y-10 py-16">
          <article className="max-w-[35rem] mx-auto">
            <img
              src="src/assets/mai-profile.jpg"
              alt="About Me"
              className="mr-4 max-w-[20rem] max-h-[20rem] mx-auto flex items-center"
            />
            <h3 className="font-bold text-[2rem] mb-1 font-robotoCondensed">
              About Me
            </h3>
            <p className="text-base font-robotoOriginal">
              I am a full-stack web developer with the expertise to assist you
              in building projects, features, or websites. Take a glance at my
              portfolio and explore my professional experience. If you find
              something you like, or if you have a specific project that
              requires coding, feel free to reach out to me.
            </p>
          </article>
          <article className="max-w-[35rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-4 font-robotoCondensed">
              My Skills
            </h3>
            <ul className="flex flex-wrap gap-5 justify-start items-center text-white">
              {skills.map((tool, index) => (
                <li
                  key={index}
                  className={`flex flex-row flex-grow items-start gap-2`}
                >
                  <span className={`text-xl ${tool.color}`}>{tool.icon}</span>
                  <p className="font-semibold text-base text-black font-robotoOriginal">
                    {tool.name}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center items-center gap-10 mt-10 md:flex-row">
              <Link
                to="#"
                className="p-2 px-6 text-black bg-gradient-to-r from-indigo-300 to-blue-400 text-base flex justify-center items-center gap-1 rounded-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
              >
                <IoIosAdd className="text-xl" />
                SEE MORE
              </Link>
            </div>
          </article>
        </div>
        <article className="max-w-[35rem] mx-auto">
          <h3 className="font-bold text-[2rem] mb-4 font-robotoCondensed">
            My Projects
          </h3>
        </article>
        <div className="container py-5 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div className="" key={item.id} onClick={() => openModal(index)}>
                <div className="relative mb-6 overflow-hidden bg-cover bg-no-repeat bg-black shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full" />
                  <div className="absolute inset-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out bg-[hsla(0,0%,99%,0.15)]">
                    <div className="flex h-full items-start justify-start">
                      <div className="m-6 text-white">
                        <h5 className="mb-3 text-2xl font-bold font-robotoCondensed hover:text-violet-600">
                          {item.title}
                        </h5>
                        {techStackToArray(item.techStack).map((tech, index) => (
                          <span
                            key={index}
                            className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold font-robotoOriginal bg-gray-800 hover:bg-blue-700 text-white py-3 px-4 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        <div className="mt-4 flex justify-start gap-5 self-end text-sm ">
                          <a
                            href={item.source}
                            rel="noreferrer"
                            target="_blank"
                            className="text-newDarkGray font-bold flex gap-1 font-robotoCondensed hover:scale-110 transition-transform duration-300 text-lg bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 rounded-full"
                          >
                            <CodeBracketIcon className="w-4" />
                            Source Code
                          </a>
                          <a
                            href={item.live}
                            rel="noreferrer"
                            target="_blank"
                            className="text-newDarkGray font-bold flex gap-1 font-robotoCondensed hover:scale-110 transition-transform duration-300 text-lg bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 rounded-full"
                          >
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
          {/* Modal Popup */}
          {selectedProjectIndex !== null && (
            <div className="fixed inset-0 grid place-items-center z-50 max-h-full bg-black bg-opacity-75 overflow-y-scroll">
              <div className="max-w-7xl bg-white dark:bg-neutral rounded-lg m-5">
                <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <figure className="bg-black">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </figure>
                  <aside className="p-4">
                    <div className="flex justify-end items-center">
                      <XMarkIcon
                        className="w-6 cursor-pointer"
                        onClick={closeModal}
                      />
                    </div>
                    <h2 className="text-2xl font-bold font-robotoCondensed">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-4 font-robotoOriginal">
                      {selectedProject.details}
                    </p>
                    <div className="my-5">
                      {techStackToArray(selectedProject.techStack).map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="mr-2 my-1 border-2 badge badge-outline font-semibold font-robotoOriginal bg-gray-800 hover:bg-blue-700 text-white py-3 px-4 rounded-full"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <div className="mt-4 flex justify-start gap-5 text-sm">
                      <a
                        href={selectedProject.source}
                        rel="noreferrer"
                        target="_blank"
                        className="font-bold flex gap-1 hover:text-newYellow font-robotoCondensed hover:scale-110 transition-transform duration-300 text-lg bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 rounded-full"
                      >
                        <CodeBracketIcon className="w-4" />
                        Source Code
                      </a>
                      <a
                        href={selectedProject.live}
                        rel="noreferrer"
                        target="_blank"
                        className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow font-robotoCondensed hover:scale-110 transition-transform duration-300 text-lg bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 rounded-full"
                      >
                        <EyeIcon className="w-4" />
                        Live Preview
                      </a>
                    </div>
                    <div className="flex justify-between mt-6 relative top-0">
                      <button
                        onClick={prevProject}
                        className="text-newDarkGray text-xl font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow font-robotoCondensed hover:scale-110 transition-transform duration-300"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextProject}
                        className="text-newDarkGray text-xl font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow font-robotoCondensed hover:scale-110 transition-transform duration-300"
                      >
                        Next
                      </button>
                    </div>
                  </aside>
                </article>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center items-center gap-10 mt-10 md:flex-row">
            <Link
              to="/my-projects"
              className="p-3 px-10 text-black bg-gradient-to-r from-indigo-300 to-blue-400 text-base flex justify-center items-center gap-1 w-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
            >
              <IoIosAdd className="text-2xl" />
              MORE PROJECTS
            </Link>
            <Link
              to="/contact"
              className="p-3 px-10 text-black bg-gradient-to-r from-indigo-300 to-blue-400 flex justify-center items-center gap-1 w-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
            >
              <IoIosChatboxes className="text-2xl" />
              CONTACT ME
            </Link>
            <a
              href="https://docs.google.com/document/d/10aKwG5M8Q0UozSecJdDe7ipX0eyMuoFZvQSNt3-qggE/edit?usp=sharing"
              className="p-3 px-10 text-black bg-gradient-to-r from-indigo-300 to-blue-400 flex justify-center items-center gap-1 w-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosPaper className="text-2xl" />
              RESUME / CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
