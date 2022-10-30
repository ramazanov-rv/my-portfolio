import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ramazanov | Web Developer</title>
      </Head>
      <div className="container">
        <Navbar />
      </div>
    </div>
  )
}
