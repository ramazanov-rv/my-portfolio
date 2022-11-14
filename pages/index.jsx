import { nanoid } from "nanoid";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

export async function getStaticProps() {
  const projectsResp = await fetch(
    "http://95.182.123.249:8889/api/projects?populate=*"
  );
  const infoResp = await fetch(
    "http://95.182.123.249:8889/api/info?populate=*"
  );
  const aboutResp = await fetch("http://95.182.123.249:8889/api/about");

  return {
    props: {
      data: await projectsResp.json(),
      info: await infoResp.json(),
      about: await aboutResp.json(),
    },
    revalidate: 40,
  };
}

export default function Home({ data, info, about }) {
  // Info
  const infoName = info.data.attributes.infoName;
  const infoJob = info.data.attributes.infoJob;

  // Projects
  const projectsArray = data.data.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        img={`http://95.182.123.249:8889${project.attributes.projectImg.data.attributes.url}`}
        title={project.attributes.projectTitle}
        description={project.attributes.projectDescription}
        link={project.attributes.projectLink}
      />
    );
  });

  // About
  const aboutText = about.data.attributes.aboutDescription;
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });

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

  const navLinks = navigation.map((navLink) => {
    return (
      <li key={nanoid()}>
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
    { name: "Strapi" },
    { name: "Javascript" },
    { name: "Git" },
    { name: "React" },
  ];

  let skillsArray = skills.map((skill) => {
    return (
      <div key={nanoid()} className="skill">
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

  function handleOnSubmit(e) {
    e.preventDefault();
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
        <Info name={infoName} job={infoJob} />
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
          handleSubmit={handleOnSubmit}
          refContact={refContact}
          inViewContact={inViewContact}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
