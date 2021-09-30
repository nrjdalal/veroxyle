import Hero from 'components/home/Hero'
import Logo_Cloud from 'components/home/Logo_Cloud'
import Testimonials from 'components/home/Testimonials'
import Cards from 'components/home/Cards'
import Features from 'components/home/Features'
import Services from 'components/home/Services'
import Contact from 'components/home/Contact'
import Navbar from 'components/home/Navbar'

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Logo_Cloud />
      <Testimonials />
      <Cards />
      <Features />
      <Services />
      <Contact />
    </>
  )
}

export default index
