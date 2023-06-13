import React, {useState, useEffect} from 'react'
import './PropertyPage.css'
import ImageSliderForProperty from '../../components/ImageSliderForProperty/ImageSliderForProperty'
import AgentCard from '../../components/AgentCard/AgentCard'
import Navbar from '../../components/navbar/Navbar'
//import Mapbox from '../../components/map/Mapbox'
import { useLocation } from 'react-router-dom';
import { createClient } from "contentful";
import AmenitiesList from '../../components/amenities/AmenitiesFilter'
import MyMap from '../../components/map/Mapbox'
import Footer from '../../components/footer/Footer'

const PropertyPage = () => {
  const [properties, setProperties] = useState([])
  const location = useLocation();
  const [long, setLong] = useState();
  const [lat, setLat] = useState();

  const client = createClient({
    space: '5bdhq9idx46g',
    environment: 'master',
    accessToken: 'wG4HFPrxlVdRGbvq1aeA1Q6DmegdYSrPih_hqz3oik8'
  });

  useEffect(() => {
    const getPropertyEntry = async () => {
      const pathname = location.pathname;
      const id = pathname.substring(pathname.lastIndexOf('/') + 1);
  
      console.log(id);
  
      try {
        const entries = await client.getEntries({ 'sys.id': id });
        setProperties(entries.items);
        setLong(entries.items[0]?.fields.location?.lon);
        setLat(entries.items[0]?.fields.location?.lat);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
  
    getPropertyEntry();
  }, []);

  console.log(properties)
  


  return (
    <div>
      <Navbar />
      <h1></h1>
      {properties?.map((property) => (
        <div className='propertyContainer' key={property.sys.id}>
          <h1>{property.fields.name}</h1>
          <img src={property.fields.image.fields.file.url}></img>
          <h2>{property.fields.price}</h2>
          <ul className='sizeBBList'>
            <li>{property.fields.bedrooms}</li>
            <li>{property.fields.bath}</li>
            <li>{property.fields.propertySize}</li>
          </ul>
    
          <AgentCard image={property?.fields?.agents?.fields?.profilepic?.fields?.file?.url} email={property?.fields?.agents?.fields?.email} />
          <p>{property.fields.description}</p>
          {/* <Mapbox /> */}
          <MyMap lon={long} lat={lat} />
        </div>
      ))}
      <Footer />
    </div>
  )
}
export default PropertyPage
