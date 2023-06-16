import Image from 'next/image'
import HeroSection from './components/hero-section/hero-section'
import Content from "./components/content"
import Feature from './components/feature'
import Contact from './components/contact'


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Feature/>
      <Content/>
      <Contact/>
    </main>
  )
}
