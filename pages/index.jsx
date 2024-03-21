import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { sendContactForm } from "../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { data } from "./api/projects";

export default function Home() {
  useEffect(() => {
    // Theme Color
    const theme = "#bf2020"; //"#f36c31"
    function setTheme() {
      document.documentElement.style.setProperty("--mainColor", theme);
      return theme;
    }
    setTheme();
  }, []);

  // Info
  const infoName = "Ramazan Ramazanov";
  const infoJob = "Front-end Web Developer";

  // Projects
  const projectsArray = data.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        img={project.img}
        title={project.title}
        description={project.description}
        link={project.link}
      />
    );
  });

  // About
  const aboutText = "My expertise in frontend development revolves around the React stack. I've worked with Next.js, Nest.js, Material-UI, GraphQL, REST API, and Websockets. Experienced in web app architecture design using react-router, state managers like Redux/MobX, and popular libraries like react-query and react-hook-form.";
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });

  // Photo Color
  const photoColor = "#bf2020"; //"#f36c31"

  // Handle Mobile Navigation
  const [isActiveNav, setIsActiveNav] = useState(false);

  function handleActiveNav() {
    setIsActiveNav((prevIsActive) => !prevIsActive);
  }

  function handleNavClosing() {
    if (isActiveNav) {
      setTimeout(() => {
        setIsActiveNav(false);
      }, 600);
    }
  }

  // Navigation Links
  const navigation = [
    { name: "home", to: "#" },
    { name: "projects", to: "#projects" },
    { name: "about", to: "#about" },
    { name: "contact", to: "#contact" },
  ];

  const navLinks = navigation.map((navLink, i) => {
    return (
      <li key={i}>
        <a className="nav-link" href={navLink.to} onClick={handleNavClosing}>
          {navLink.name}
        </a>
      </li>
    );
  });

  // Skills
  const skills = [
    { name: "HTML" },
    { name: "NextJs" },
    { name: "CSS/SCSS" },
    { name: "Javascript" },
    { name: "Git" },
    { name: "React" },
    { name: "NestJs" },
    { name: "TypeScript" },
  ];

  let skillsArray = skills.map((skill, i) => {
    return (
      <div key={i} className="skill">
        <h4>{skill.name}</h4>
      </div>
    );
  });

  const { ref: refSkill, inView: inViewSkill } = useInView({
    triggerOnce: true,
  });

  // Contact
  const { ref: refContact, inView: inViewContact } = useInView({
    triggerOnce: true,
  });

  // Contact Form
  const formData = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(formData);
  const { name, subject, email, message } = formState;
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  function handleChange({ target }) {
    setFormState((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  }

  async function handleSubmit(e) {
    setIsLoading(true);
    await e.preventDefault();
    if (name == "" || subject == "" || email == "" || message == "") {
      setIsLoading(false);
      toast.warn("Fill every field please.", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      try {
        setIsSent(true);
        await sendContactForm(formState);
        setIsLoading(false);
        setIsSent(false);
        toast.success("💌 Message Sent. Thanks!", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        setFormState((prev) => {
          return {
            ...prev,
            name: "",
            subject: "",
            email: "",
            message: "",
          };
        });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        toast.error("💌 Message not sent. Try later.", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }

  return (
    <>
      <header className="header">
        <Navbar
          isActive={isActiveNav}
          handleNav={handleActiveNav}
          handleNavClosing={handleNavClosing}
          navList={navLinks}
        />
      </header>
      <main className="container">
        <Info name={infoName} job={infoJob} photoColor={photoColor} />
        <Skills
          inViewSkill={inViewSkill}
          refSkill={refSkill}
          skillsArray={skillsArray}
        />
        <Projects projectsArray={projectsArray} />
        <About
          aboutRef={aboutRef}
          aboutInView={aboutInView}
          aboutText={aboutText}
        />
        <Contact
          handleSubmit={handleSubmit}
          refContact={refContact}
          inViewContact={inViewContact}
          name={name}
          subject={subject}
          email={email}
          message={message}
          handleChange={handleChange}
          isLoading={isLoading}
          isSent={isSent}
        />
        <ToastContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
