import React from 'react'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

const Landingpage = () => {

  return (
    <div>
      {/* <Navbar /> */}
      <ImageSlider />
      {/* <CategoryCards /> */}
      <ContactForm /> 
      <Footer />
    </div>
  )
}

export default Landingpage
