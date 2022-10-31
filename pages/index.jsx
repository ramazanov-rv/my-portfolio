import Head from 'next/head'
import { useEffect } from 'react'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Ramazanov | Web Developer</title>
      </Head>
      <header className='header'>
        <Navbar />
      </header>
      <main className="container">
        <Info />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}
