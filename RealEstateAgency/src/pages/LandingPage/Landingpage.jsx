import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoryCards from '../../components/categorycards/categorycards'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm'

const Landingpage = () => {

  return (
    <div>
      <Navbar />
      {/* <Slider /> */}
      <h1>We help you find your dream home!</h1>
      <CategoryCards />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Landingpage
