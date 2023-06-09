import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './components/map/Map'
import Footer from './components/footer/Footer'
import ContactForm from './components/contactForm/ContactForm'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContentfulApi from './components/contentful/Contentful'
import CategoryFilter from './components/categoryFilter/CategoryFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CategoryFilter />
    <ContactForm />
    <Map />
    <Footer />
    <ContentfulApi />
    
      
    </>
  )
}

export default App
