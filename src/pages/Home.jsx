import AiBenefits from "../components/AiBenefits"
import AiTypes from "../components/AiTypes"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home