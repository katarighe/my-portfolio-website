import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import project1 from "../assets/background/background-project.jpg";
import { Link } from "react-router-dom";
import { IoIosChatboxes } from "react-icons/io";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function MyProjects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Book A Doctor",
      image: project1,
      details:
        "A frontend/backend application that allows users to book appointments with doctors. Access to the application requires users to sign up or sign in, which can be done through the provided forms.",
      releaseDate: "15 December 2023",
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
      releaseDate: "6 September 2023",
      techStack: "React JS, Route, Redux, API",
      live: "https://benevolent-crostata-5c4bea.netlify.app/",
      source: "https://github.com/katarighe/capstone-metrics-webapp",
    },
    {
      id: 3,
      title: "SmartPocket Budget",
      image: project1,
      details:
        "A budget app named SmartPocket Budget keeps track of all your expenses associated with categories.",
      releaseDate: "24 November 2023",
      techStack: "ReactJS, Redux, Route, CSS, API",
      live: "https://moyen-budget.onrender.com/",
      source: "https://github.com/katarighe/budget-app",
    },
    {
      id: 4,
      title: "Bookstore CMS",
      image: project1,
      details:
        "The Bookstore CMS React App is a single-page application that allows users to browse and purchase books. It is built using the React JavaScript library and features a navbar and footer that provide navigation throughout the app.",
      releaseDate: "25 August 2023",
      techStack: "ReactJS, Redux, JavaScript, API",
      live: "https://brilliant-vacherin-c698ee.netlify.app/",
      source: "https://github.com/katarighe/bookstore",
    },
    {
      id: 5,
      title: "Capstone MealDB",
      image: project1,
      details:
        "This Capstone Project is built on MealDB, an external API, and an Involvement API which is used to record the user interactions including likes, and comments. The external API service used is called MealAPI. MealDB is a crowd-sourced database of recipes from around the world. It was created in 2008 by two developers in the UK, and it has since grown to include over 29,000 recipes from over 100 countries.",
      releaseDate: "4 August 2023",
      techStack: "HTML5, CSS3, JavaScript, API",
      live: "https://astonishing-mermaid-7b5d60.netlify.app/dist/",
      source: "https://github.com/katarighe/Capstone-Meal-DB",
    },
    {
      id: 6,
      title: "LaxAct Streaming Conference 2023",
      image: project1,
      details:
        "A website that announced for the TV streaming conference organized by laxACT Ltd, which as held on July 2023 at Crest Towers, Diego Garcia, BIOT.",
      releaseDate: "1 July 2023",
      techStack: "HTML, CSS, JavaScript, Bootstrap",
      live: "https://katarighe.github.io/microverse-capstone-project-1/",
      source: "https://github.com/katarighe/microverse-capstone-project-1",
    },
  ]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedProject = sortedProjects[selectedProjectIndex];

  return (
    <>
      <Hero
        name="Portfolio"
        details="Projects Crafted with Care"
        backgroundImage="src/assets/background/my-projects-background.jpg"
      />
      <div className="flex flex-col justify-center items-center px-10 gap-10 mt-10 md:flex-row">
        <p className="text-newDarkGray text-lg font-robotoOriginal">
          My portfolio showcases over 15 projects developed using robust
          technology stacks, including HTML5/CSS3, JavaScript, React/Redux, API,
          Ruby, and Ruby on Rails.
        </p>
      </div>
      <section>
        <div className="container py-10 md:py-15">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div className="" key={item.id} onClick={() => openModal(index)}>
                <div className="relative mb-6 overflow-hidden bg-cover bg-no-repeat bg-black shadow-lg ">
                  <img src={item.image} alt={item.title} className="w-full" />
                  <div className="absolute inset-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out bg-[hsla(0,0%,99%,0.15)]">
                    <div className="flex h-full items-start justify-start">
                      <div className="m-6 text-white">
                        <h5
                          className="mb-3 text-2xl font-bold font-robotoCondensed hover:text-violet-600"
                          onClick={() => openModal(index)}
                        >
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
                        <div className="mt-4 flex justify-start gap-5 self-end text-sm">
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
                    <p className="mt-4 font-semibold font-robotoOriginal">
                      Release Date: {selectedProject.releaseDate}
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
                        className="text-newDarkGray text-lg font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow font-robotoCondensed hover:scale-110 transition-transform duration-300"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextProject}
                        className="text-newDarkGray text-lg font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow font-robotoCondensed hover:scale-110 transition-transform duration-300"
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
            <p className="text-newDarkGray text-lg font-robotoOriginal">
              I can assist you in building a product, feature, or website. Take
              a look at some of my recent projects!
            </p>
            <p className="text-newDarkGray text-lg font-robotoOriginal">
              If you appreciate what you see and have a project that requires
              attention, feel free to contact me.
            </p>
            <Link
              to="/contact"
              className="p-3 px-8 text-black bg-gradient-to-r from-indigo-300 to-blue-400 text-lg flex justify-center items-center gap-1 rounded-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
            >
              <IoIosChatboxes className="text-2xl" />
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProjects;
