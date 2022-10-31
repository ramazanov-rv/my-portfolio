import Head from 'next/head'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ramazanov | Web Developer</title>
      </Head>
      <main className="container">
        <Navbar />
        <Info />
        <Skills />
      </main>
    </div>
  )
}
