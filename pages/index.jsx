import Head from 'next/head'

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
      <Head>
        <title>VeroXyle - Design | Develop | Market</title>
        <meta
          name="keywords"
          content="digital marketing, search engine optimisation, content marketing, social media marketing, affiliate marketing, native advertising, marketing automation, email marketing, web development"
        />
        <meta
          name="news_keywords"
          content="digital marketing, search engine optimisation, content marketing, social media marketing, affiliate marketing, native advertising, marketing automation, email marketing, web development"
        />
        <meta
          name="description"
          content="We are VeroXyle and we love building great brands & digital experiences. We offer excellent design, development and marketing services."
        />
        <meta name="robots" content="index,follow" />

        <meta name="og:site_name" content="VeroXyle" />
        <meta name="og:title" content="VeroXyle - Design | Develop | Market" />
        <meta
          name="og:description"
          content="We are VeroXyle and we love building great brands & digital experiences. We offer excellent design, development and marketing services."
        />
      </Head>
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
