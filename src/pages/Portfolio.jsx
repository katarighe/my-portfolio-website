import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { IoIosChatboxes } from "react-icons/io";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Screenshots & Templates
import laxact from "../assets/screenshots/laxact-streaming.jpg";
import mealdb from "../assets/screenshots/mealdb.jpg";
import bookstore from "../assets/screenshots/bookstore.jpg";
import smartpocket from "../assets/screenshots/smartpocket-budget.jpg";
import worldatlas from "../assets/screenshots/mini-world-atlas.jpg";
import bookadoctor from "../assets/screenshots/book-a-doctor.jpg";
import "../assets/styles/animations.css";

function MyProjects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Book A Doctor",
      image: bookadoctor,
      details:
        "An application, with both frontend and backend components, enabling users to schedule appointments with doctors. Access necessitates user sign-up or sign-in through provided forms.",
      releaseDate: "15 December 2023",
      techStack: "Ruby, Rails, ReactJS, PostgreSQL, Bootstrap, API",
      live: "https://book-doctor-appointment-frontend.netlify.app/",
      source: "https://github.com/katarighe/book-appointment-back-end",
    },
    {
      id: 2,
      title: "Mini World Atlas",
      image: worldatlas,
      details:
        "A mobile web app enabling users to view numeric metrics from the REST countries API, providing information about various countries.",
      releaseDate: "6 September 2023",
      techStack: "ReactJS, Redux, API",
      live: "https://benevolent-crostata-5c4bea.netlify.app/",
      source: "https://github.com/katarighe/capstone-metrics-webapp",
    },
    {
      id: 3,
      title: "SmartPocket Budget",
      image: smartpocket,
      details:
        "A budgeting app that monitors expenses across various categories.",
      releaseDate: "24 November 2023",
      techStack: "Ruby, Rails, PostgreSQL",
      live: "https://moyen-budget.onrender.com/",
      source: "https://github.com/katarighe/budget-app",
    },
    {
      id: 4,
      title: "Bookstore CMS",
      image: bookstore,
      details:
        "A single-page application enabling users to browse and buy books, featuring a navbar and footer for seamless app navigation.",
      releaseDate: "25 August 2023",
      techStack: "ReactJS, Redux, JavaScript, API",
      live: "https://brilliant-vacherin-c698ee.netlify.app/",
      source: "https://github.com/katarighe/bookstore",
    },
    {
      id: 5,
      title: "MealDB Restaurant",
      image: mealdb,
      details:
        "A simple web app utilizing an external API for exact name matching and an Involvement API to capture user interactions such as likes and comments.",
      releaseDate: "4 August 2023",
      techStack: "HTML5, CSS3, JavaScript, API",
      live: "https://astonishing-mermaid-7b5d60.netlify.app/dist/",
      source: "https://github.com/katarighe/Capstone-Meal-DB",
    },
    {
      id: 6,
      title: "LaxAct Streaming Conference 2023",
      image: laxact,
      details:
        "A website that announced for the TV streaming conference organized by laxACT Ltd, which as held on July 2023 at Crest Towers, Diego Garcia, BIOT. The website is designed to provide attendees with essential details about the summit, including schedules, speakers, venue information, registration, and more.",
      releaseDate: "1 July 2023",
      techStack: "HTML5, CSS3, JavaScript, Bootstrap",
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
      <div className="flex flex-col justify-center items-center px-10 gap-10 mt-10 md:flex-row mx-auto animate__animated animate__fadeInDown">
        <p className="text-xl font-robotoOriginal">
          My portfolio showcases over 15 projects developed using robust
          technology stacks, including HTML5/CSS3, JavaScript, React/Redux, API,
          Ruby, and Ruby on Rails.
        </p>
      </div>
      <section>
        <div className="container py-10 md:py-15">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div
                className="animate__animated animate__fadeInRight"
                key={item.id}
                onClick={() => openModal(index)}
              >
                <div className="relative mb-6 overflow-hidden bg-cover bg-no-repeat bg-gray-500 shadow-lg">
                  <img
                    src={item.image}
                    style={{ opacity: 0.3 }}
                    alt={item.title}
                    className="w-full"
                  />
                  <div className="absolute inset-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out bg-[hsla(0,0%,99%,0.15)]">
                    <div className="flex h-full items-start justify-start">
                      <div className="m-6 text-white">
                        <h5
                          className="mb-3 text-4xl font-bold font-robotoCondensed hover:text-black"
                          onClick={() => openModal(index)}
                        >
                          {item.title}
                        </h5>
                        {techStackToArray(item.techStack).map((tech, index) => (
                          <span
                            key={index}
                            className="mr-2 my-1 border-2 badge border-violet-500 badge-outline text-lg font-semibold font-robotoOriginal bg-gray-800 hover:bg-blue-700 text-white py-3 px-4 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        <div className="mt-4 flex justify-start gap-5 self-end text-sm">
                          <a
                            href={item.live}
                            rel="noreferrer"
                            target="_blank"
                            className="font-bold flex gap-1 font-robotoCondensed hover:scale-110 transition-transform duration-300 text-lg bg-violet-500 hover:bg-violet-900 text-white py-2 px-4 rounded-full"
                          >
                            <EyeIcon className="w-4" />
                            See Live
                          </a>
                          <a
                            href={item.source}
                            rel="noreferrer"
                            target="_blank"
                            className="font-bold flex gap-1 font-robotoCondensed hover:scale-110 transition-transform duration-300 text-lg bg-violet-500 hover:bg-violet-900 text-white py-2 px-4 rounded-full"
                          >
                            <CodeBracketIcon className="w-4" />
                            See Source
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
            <div className="fixed inset-0 grid place-items-center z-50 max-h-full bg-black bg-opacity-75 overflow-y-scroll animate__animated animate__fadeIn">
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
                    <h2 className="text-4xl font-bold font-robotoCondensed">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-4 font-robotoOriginal text-lg">
                      {selectedProject.details}
                    </p>
                    <p className="mt-4 font-semibold font-robotoOriginal text-lg">
                      Release Date: {selectedProject.releaseDate}
                    </p>
                    <div className="my-5">
                      {techStackToArray(selectedProject.techStack).map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="mr-2 my-1 border-2 badge badge-outline border-violet-500 text-lg font-semibold font-robotoOriginal bg-gray-800 hover:bg-blue-700 text-white py-3 px-4 rounded-full"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <div className="mt-4 flex justify-start gap-5 text-sm">
                      <a
                        href={selectedProject.live}
                        rel="noreferrer"
                        target="_blank"
                        className="font-bold flex gap-1 font-robotoCondensed hover:scale-110 transition-transform duration-300 text-xl bg-violet-500 hover:bg-violet-900 text-white py-2 px-4 rounded-full"
                      >
                        <EyeIcon className="w-4" />
                        See Live
                      </a>
                      <a
                        href={selectedProject.source}
                        rel="noreferrer"
                        target="_blank"
                        className="font-bold flex gap-1 font-robotoCondensed hover:scale-110 transition-transform duration-300 text-xl bg-violet-500 hover:bg-violet-900 text-white py-2 px-4 rounded-full"
                      >
                        <CodeBracketIcon className="w-4" />
                        See Source
                      </a>
                    </div>
                    <div className="flex justify-between mt-6 relative top-0">
                      <button
                        onClick={prevProject}
                        className="text-black text-2xl font-semibold dark:text-white hover:text-violet-500 font-robotoCondensed hover:scale-110 transition-transform duration-300"
                      >
                        Previous
                      </button>
                      <button
                        onClick={nextProject}
                        className="text-black text-2xl font-semibold dark:text-white hover:text-violet-500 font-robotoCondensed hover:scale-110 transition-transform duration-300"
                      >
                        Next
                      </button>
                    </div>
                  </aside>
                </article>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center items-center gap-10 mt-10 md:flex-row animate__animated animate__fadeInUp">
            <p className="text-lg font-robotoOriginal">
              I can assist you in building a product, feature, or website. Take
              a look at some of my recent projects!
            </p>
            <p className="text-lg font-robotoOriginal">
              If you appreciate what you see and have a project that requires
              attention, feel free to contact me.
            </p>
            <Link
              to="/contact"
              className="p-3 px-8 text-black bg-gradient-to-r from-blue-500 to-violet-600 text-lg flex justify-center items-center gap-1 rounded-full md:w-fit font-robotoCondensed hover:scale-110 transition-transform duration-300"
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
