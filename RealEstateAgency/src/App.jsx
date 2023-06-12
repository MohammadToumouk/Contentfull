import './App.css'
import { useState, useEffect } from 'react'

import { createClient } from "contentful";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Map from './components/map/Map'
import Footer from './components/footer/Footer'
import ContactForm from './components/contactForm/ContactForm'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContentfulApi from './components/contentful/Contentful'
import CategoryFilter from './components/categoryFilter/CategoryFilter'
import MyMap from './components/map/Mapbox'
import AlabamaHome from './components/TownHome/Alabama'
import Landingpage from './pages/LandingPage/Landingpage';
import ListingPage from './pages/ListingPage/ListingPage';
import TeamPage from './pages/TeamPage/TeamPage';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import AmenitiesFilter from './components/amenities/AmenitiesFilter';
import AmenitiesList from './components/amenities/AmenitiesList';

function App() {
  const [properties, setProperties] = useState([])
  const [agents, setAgents] = useState([])  

  const client = createClient({
    space: '5bdhq9idx46g',
    environment: 'master',
    accessToken: 'wG4HFPrxlVdRGbvq1aeA1Q6DmegdYSrPih_hqz3oik8'
  });

  useEffect(() => {
    const getAllPropertiesEntries = async () => {
      try {
        await client.getEntries({content_type: "testBlog"}).then((entries) => {
          setProperties(entries.items);
          console.log(entries.items);
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    const getAllAgentsEntries = async () => {
      try {
        await client.getEntries({content_type: "agents"}).then((entries) => {
          setAgents(entries.items);
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    getAllAgentsEntries();
    getAllPropertiesEntries();
  }, []);


  //console.log(properties)

  return (
    <>
    <CategoryFilter propertyData={properties} />
    <AmenitiesFilter propertyData={properties} />
    <AmenitiesList propertyData={properties} />
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Landingpage />} />
          <Route path="listing" element={<ListingPage propertyData={properties} />} />
          <Route path="footer" element={<Footer />} />
          <Route path="property" element={<PropertyPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


    
    
    {/* <CategoryFilter />
    <ContactForm />
    <Footer />
    <ContentfulApi />
    <MyMap />
    <AlabamaHome /> */}

    </>
  )
}

export default App
