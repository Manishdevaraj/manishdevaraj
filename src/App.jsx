import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import Tech from "./sections/Tech"
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <div>
    <NavBar/>
      <Hero/>
      {/* <About/> */}
      <Experience/>
      <section id="skills">

      <Tech/>
      </section>

      <section id='projects'>
         <Project/>
      </section>

      <Contact/>
      <Footer/>
      <Analytics />
          </div>
  )
}

export default App