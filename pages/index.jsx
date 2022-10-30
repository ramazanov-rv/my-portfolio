import Head from 'next/head'
import Image from 'next/image'
import Info from './components/Info'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ramazanov | Web Developer</title>
      </Head>
      <main className="container">
        <Navbar />
        <Info />
      </main>
    </div>
  )
}
