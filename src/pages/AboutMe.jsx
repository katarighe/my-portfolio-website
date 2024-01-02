import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  SiWebpack,
  SiNodedotjs,
  SiRuby,
  SiRubyonrails,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiGooglechrome,
  SiPython,
  SiCsharp,
} from "react-icons/si";
import { SocialIcon } from "react-social-icons";
import { ReactSocialMediaIcons } from "react-social-media-icons";
import Hero from "../components/Hero";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("all");
  const [frontendTools, setFrontendTools] = useState([]);
  const [backendDatabases, setBackendDatabases] = useState([]);
  const [SkillTools, setSkillTools] = useState([]);

  const technologyStack = {
    frontend: {
      tools: [
        {
          name: "JavaScript",
          icon: <TbBrandJavascript />,
          color: "bg-yellow-500",
        },
        { name: "React", icon: <FaReact />, color: "bg-blue-300" },
        { name: "HTML5", icon: <FaHtml5 />, color: "bg-orange-500" },
        { name: "CSS3", icon: <FaCss3 />, color: "bg-blue-600" },
        { name: "Redux", icon: <SiRedux />, color: "bg-purple-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-teal-500" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "bg-purple-900" },
        { name: "Webpack", icon: <SiWebpack />, color: "bg-blue-500" },
      ],
    },
    backend: {
      tools: [
        { name: "C#", icon: <SiCsharp />, color: "bg-blue-500" },
        { name: "PHP", icon: <FaPhp />, color: "bg-blue-600" },
        { name: "Ruby", icon: <SiRuby />, color: "bg-red-500" },
        { name: "Rails", icon: <SiRubyonrails />, color: "bg-red-400" },
        { name: "Python", icon: <SiPython />, color: "bg-blue-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "bg-red-400" },
        { name: "MySQL", icon: <SiMysql />, color: "bg-orange-400" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-blue-900" },
        { name: "Laravel", icon: <FaLaravel />, color: "bg-red-400" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "bg-purple-500" },
      ],
    },
    tools: [
      { name: "Git", icon: <FaGithub />, color: "bg-gray-500" },
      { name: "GitHub", icon: <FaGithubAlt />, color: "bg-gray-600" },
      { name: "vercel", icon: <SiVercel />, color: "bg-gray-950" },
      { name: "DevTools", icon: <PiDevToLogo />, color: "bg-blue-500" },
      { name: "Jest", icon: <SiJest />, color: "bg-red-600" },
      { name: "Chrome", icon: <SiGooglechrome />, color: "bg-red-600" },
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
      },
    }),
  };

  return (
    <>
      <Hero
        name="About Me"
        details="Welcome to my portfolio!"
        backgroundImage="src/assets/about-me-background.png"
      />
      <section className="text-black">
        <div className="container space-y-10 py-16">
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1 font-robotoCondensed">
              My Background
            </h3>
            <img
              src="src/assets/mai-profile.jpg"
              alt="About Me"
              className="mr-4 max-w-[20rem] max-h-[20rem] object-right md:float-right md:object rounded-2xl"
            />
            <br />
            <p className="text-base whitespace-break-spaces font-robotoOriginal">
              Greetings, I'm Mohamed
              <br />
              <br />
              As a full-stack developer with expertise in front-end and back-end
              skills, I thrive on building and deploying applications. My recent
              participation in Microverse's intensive full-stack program has
              strengthened my skills, as evidenced by my 20+ successful solo and
              collaborative projects. <br />
              <br />
              My passion lies in weaving clean, robust code into tangible
              applications. I thrive in collaborative environments where I can
              contribute fresh perspectives and accelerate project success
              through my expertise. In my free time, I actively mentor aspiring
              developers, empower open-source projects, and champion tech
              education initiatives that spark young minds in my community.
              <br />
              <br />
              Throughout my career, I've actively cultivated my expertise
              through collaborations with diverse companies and organizations.
              My direct influence on the success of dozens of clients has
              showcased my versatile skillset, spanning data management,
              networking, IT support, operating systems, design, research,
              full-stack development, and even academic-related projects. <br />
              <br />
              I've dedicated over 1,300+ hours to mastering algorithms, data
              structures, and full-stack development. This dedication translated
              into practical experience as I simultaneously built projects
              utilizing HTML, CSS, Ruby, Rails, JavaScript, React, and Redux.
              Moreover, I've actively collaborated with remote developers from
              around the globe and boosted my teamwork skills through numerous
              group projects. <br />
              <br />
              Motivated by a desire to contribute to impactful work, I seek
              opportunities with mission-driven companies that prioritize
              quality, creativity, and innovation. I am a fast learner with a
              passion for expanding my knowledge and skills in emerging
              technologies and their delivery. Eager to launch my career, I
              bring professionalism and enthusiasm to the table, confident in my
              ability to make a significant contribution to your team. <br />
              <br />
              If you're looking for a committed developer, let's get in touch!
            </p>
          </article>
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-4 font-robotoCondensed">
              My Skills
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex flex- justify-center items-start gap-0 mb-10 md:gap-3"
            >
              <button
                className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white ${
                  activeTab === "all"
                    ? "bg-green-500 text-black  hover:bg-green-500"
                    : "hover:text-black hover:bg-green-500"
                }`}
                onClick={() => handleTabChange("all")}
              >
                All
              </button>
              <button
                className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white hover:text-white ${
                  activeTab === "frontend"
                    ? "bg-green-500 text-black  hover:bg-green-500"
                    : "hover:text-black hover:bg-green-500"
                }`}
                onClick={() => handleTabChange("frontend")}
              >
                Frontend
              </button>
              <button
                className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white hover:text-white ${
                  activeTab === "backend"
                    ? "bg-green-500 text-black  hover:bg-green-500"
                    : "hover:text-black  hover:bg-green-500"
                }`}
                onClick={() => handleTabChange("backend")}
              >
                Backend
              </button>
              <button
                className={`py-2 px-3 text-newDarkGray font-semibold font-robotoOriginal border-0 rounded-md dark:text-white hover:text-white hover:bg-green-500 ${
                  activeTab === "tools"
                    ? "bg-green-500 text-black hover:bg-green-500"
                    : "hover:text-black"
                }`}
                onClick={() => handleTabChange("tools")}
              >
                Tools
              </button>
            </motion.div>
            <article className="grid grid-cols-1 gap-12">
              {activeTab === "all" && (
                <div className="grid flex-grow place-items-center py-10 font-robotoOriginal">
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
                        className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}
                      >
                        <span className="text-4xl md:text-6xl">
                          {tool.icon}
                        </span>
                        <p className="font-semibold text-sm md:text-lg">
                          {tool.name}
                        </p>
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
                        className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${database.color}`}
                      >
                        <span className="text-4xl md:text-6xl">
                          {database.icon}
                        </span>
                        <p className="font-semibold text-sm md:text-lg">
                          {database.name}
                        </p>
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
                        className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}
                      >
                        <span className="text-4xl md:text-6xl">
                          {tool.icon}
                        </span>
                        <p className="font-semibold text-sm">{tool.name}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "frontend" && (
                <div className="grid flex-grow place-items-center py-10 font-robotoOriginal">
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
                        className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}
                      >
                        <span className="text-4xl md:text-6xl">
                          {tool.icon}
                        </span>
                        <p className="font-semibold text-sm md:text-lg">
                          {tool.name}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "backend" && (
                <div className="grid flex-grow place-items-center py-10 font-robotoOriginal">
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
                        className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${database.color}`}
                      >
                        <span className="text-4xl md:text-6xl">
                          {database.icon}
                        </span>
                        <p className="font-semibold text-sm md:text-lg">
                          {database.name}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "tools" && (
                <div className="grid flex-grow place-items-center py-10 font-robotoOriginal">
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
                        className={`flex flex-col flex-grow items-center gap-3 rounded-lg p-3 w-20 md:w-32 ${tool.color}`}
                      >
                        <span className="text-4xl md:text-6xl">
                          {tool.icon}
                        </span>
                        <p className="font-semibold text-lg">{tool.name}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
            <p className="text-base whitespace-break-spaces font-robotoOriginal">
              Front-End: HTML5, CSS3, JavaScript, React, Angular, Vue.js, Redux,
              jQuery, Tailwind CSS, Bootstrap <br />
              <br />
              Back-End: Java, Python, PHP, C/C++, Ruby, Rails, Node.js, SQL,
              NoSQL, MongoDB, MySQL, PostgreSQL, Laravel <br />
              <br />
              Tools & Methods: Git, GitHub, Docker, Kubernetes, Agile
              development, Scrum, Kanban, Heroku, Netlify, Mobile/Responsive
              Development, RSpec, TDD, Chrome Dev Tools<br />
              <br />
              Professional: Communication, Problem-solving, Teamwork, Mentoring,
              Leadership, Adaptability, Critical thinking, Creativity, Research,
              Remote Pair-Programming
            </p>
          </article>
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1 font-robotoCondensed">
              Connect with me
            </h3>
            <br />
            <p className="whitespace-break-spaces">
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://facebook.com/katarighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://instagram.com/m.ighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://x.com/katarighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://youtube.com/@katarighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://linkedin.com/in/mighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://github.com/katarighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://www.reddit.com/user/Katarighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://medium.com/@katarighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://scholar.google.com/citations?user=p_BiBB0AAAAJ&hl=en"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://api.whatsapp.com/send?phone=16473739841"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://telegram.me/katarighe"
              />{" "}
              <SocialIcon
                className="hover:scale-110 transition-transform duration-400"
                url="https://www.snapchat.com/add/m.ighe?share_id=VL1Yc5t5ObQ&locale=en-US"
              />{" "}
            </p>
            <br />
            <div>
              <table>
                <tbody>
                  <tr>
                    <td className="whitespace-break-spaces">
                      <ReactSocialMediaIcons
                        className="hover:scale-110 transition-transform duration-400"
                        borderColor="rgba(0,0,0,0.25)"
                        icon="line"
                        iconColor="rgba(255,255,255,1)"
                        url="https://line.me/ti/p/mH4XEel70b"
                        size="50"
                      />
                    </td>
                    <td className="whitespace-break-spaces">
                      <ReactSocialMediaIcons
                        className="hover:scale-110 transition-transform duration-400"
                        borderColor="rgba(0,0,0,0.25)"
                        icon="messenger"
                        iconColor="rgba(255,255,255,1)"
                        url="https://msng.link/o?katarighe=fm"
                        size="50"
                      />
                    </td>
                    <td className="whitespace-break-spaces">
                      <ReactSocialMediaIcons
                        className="hover:scale-110 transition-transform duration-400"
                        borderColor="rgba(0,0,0,0.25)"
                        icon="skype"
                        iconColor="rgba(255,255,255,1)"
                        url="live:m.ighe"
                        size="50"
                      />
                    </td>
                    <td className="whitespace-break-spaces">
                      <ReactSocialMediaIcons
                        className="hover:scale-110 transition-transform duration-400"
                        borderColor="rgba(0,0,0,0.25)"
                        icon="angellist"
                        iconColor="rgba(255,255,255,1)"
                        url="https://wellfound.com/u/katarighe"
                        size="50"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <p className="text-base whitespace-break-spaces font-robotoOriginal">
              Please feel free to explore the diverse social media channels and
              other portals. Let's establish a community where ideas flow,
              knowledge grows, and connections flourish. I am excited to hear
              from you and embark on this journey together!
            </p>
            <br />
            <p className="text-base whitespace-break-spaces font-robotoOriginal">
              You can also contact me directly by clicking the button below.
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
