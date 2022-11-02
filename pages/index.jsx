import Head from 'next/head'
import Link from "next/link";
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  // Preloader
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  // Handle Mobile Navigation
  const [isActiveNav, setIsActiveNav] = useState(false)

  function handleActiveNav() {
    setIsActiveNav(prevIsActive => !prevIsActive)
  }

  function handleNavClosing() {
    if (isActiveNav) {
      setTimeout(() => {
        setIsActiveNav(false)
      }, 600)
    }
  }

  // Navigation Links
  const navigation = [
    { name: "home", to: "/" },
    { name: "skills", to: "/" },
    { name: "projects", to: "#projects" },
    { name: "contact", to: "/" }
  ]

  const navLinks = navigation.map((navLink) => {
    return (
      <li key={nanoid()}>
        <Link
          className="nav-link"
          href={navLink.to}
          onClick={handleNavClosing}
        >
          {navLink.name}
        </Link>
      </li>
    )
  })

  // Skills
  const skills = [
    { name: "HTML", },
    { name: "NextJs" },
    { name: "CSS/SCSS" },
    { name: "Strapi" },
    { name: "Javascript" },
    { name: "Git" },
    { name: "React" }

  ]

  let skillsArray = skills.map((skill) => {
    return (
      <div key={nanoid()} className="skill">
        <h4>{skill.name}</h4>
      </div>
    )
  })

  return (
    <div>
      <Head>
        <title>Ramazanov | Web Developer</title>
      </Head>
      {isLoading ?
        <div className="loader">
          <div></div>
        </div>
        : 
        <>
          <header className='header'>
        <Navbar
          isActive={isActiveNav}
          handleNav={handleActiveNav}
          handleNavClosing={handleNavClosing}
          navList={navLinks}
        />
      </header>
      <main className="container">
        <Info />
        <Skills
          skillsArray={skillsArray}
        />
        <Projects />
      </main>
        </>
      }
      
    </div>
  )
}
