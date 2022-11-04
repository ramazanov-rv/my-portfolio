import Head from "next/head";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
// import { v4 as uuidv4 } from "uuid";

export default function Home() {
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
    { name: "home", to: "/" },
    { name: "projects", to: "/#projects" },
    { name: "about", to: "/" },
    { name: "contact", to: "/" },
  ];

  const navLinks = navigation.map((navLink) => {
    return (
      <li key={nanoid()}>
        <Link className="nav-link" href={navLink.to} onClick={handleNavClosing}>
          {navLink.name}
        </Link>
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
      <div 
        key={nanoid()} className="skill">
        <h4>{skill.name}</h4>
      </div>
    );
  });

  return (
    <div>
      <Head>
        <title>Ramazanov | Web Developer</title>
      </Head>
      <header className="header">
        <Navbar
          isActive={isActiveNav}
          handleNav={handleActiveNav}
          handleNavClosing={handleNavClosing}
          navList={navLinks}
        />
      </header>
      <main className="container">
        <Info />
        <Skills skillsArray={skillsArray} />
        <Projects />
        <About />
      </main>
    </div>
  );
}
