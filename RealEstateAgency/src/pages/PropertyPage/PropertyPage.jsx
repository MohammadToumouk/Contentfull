import React, {useState, useEffect} from 'react'
import './PropertyPage.css'
import ImageSliderForProperty from '../../components/ImageSliderForProperty/ImageSliderForProperty'
import AgentCard from '../../components/AgentCard/AgentCard'
import Navbar from '../../components/navbar/Navbar'
//import Mapbox from '../../components/map/Mapbox'
import { useLocation } from 'react-router-dom';
import { createClient } from "contentful";

const PropertyPage = () => {
  const [properties, setProperties] = useState([])
  const location = useLocation();

  const client = createClient({
    space: '5bdhq9idx46g',
    environment: 'master',
    accessToken: 'wG4HFPrxlVdRGbvq1aeA1Q6DmegdYSrPih_hqz3oik8'
  });


  useEffect(() => {
    const getPropertyEntry = async () => {
      const pathname = location.pathname;
      const id = pathname.substring(pathname.lastIndexOf('/') + 1);
     
       console.log(id)
     
      try {
        await client.getEntries({ 'sys.id': id }).then((entries) => {
          setProperties(entries.items);
          console.log(entries.items)

        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    getPropertyEntry();
  }, []);


  return (
    <div>
      <Navbar />
      <h1>showing the property I choose</h1>
      {properties?.map((property) => (
        <div key={property.sys.id}>
          <h1>{property.fields.name}</h1>
          <h2>{property.fields.price}</h2>
          <AgentCard image={property?.fields?.agents?.fields?.profilepic?.fields?.file?.url} email={property?.fields?.agents?.fields?.email} />
          <p>{property.fields.description}</p>
          {/* <Mapbox /> */}
        </div>
      ))}
    </div>
  )
}
export default PropertyPage
