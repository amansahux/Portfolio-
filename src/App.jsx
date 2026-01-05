import React, { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WorkingWithME from './components/WorkingWithMe'
import Projects from './components/Projects'
import FAQs from './components/FAQs'
import ProjectsBanner from './components/ProjectsBanner'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const App = () => {
   const footerRef = useRef(null);
    const handleScrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
 <main className='bg-[black] text-white'>
  <Hero onContactClick={handleScrollToFooter}/>
  <About/>
  <Skills/>
  <WorkingWithME onContactClick={handleScrollToFooter}/>
  <Projects/>
  <FAQs/>
  {/* <ProjectsBanner/> */}
  {/* <Reviews/> */}
  <Footer ref={footerRef}/>
 </main>

 
  )
}

export default App
