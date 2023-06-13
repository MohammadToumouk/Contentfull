import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoryCards from '../../components/categorycards/categorycards'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

const Landingpage = () => {

  return (
    <div>
      <Navbar />
      <ImageSlider />
      <h1>We help you find your dream home!</h1>
      <CategoryCards />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Landingpage
