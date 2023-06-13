import React from 'react'
import './PropertyPage.css'
import ImageSliderForProperty from '../../components/ImageSliderForProperty/ImageSliderForProperty'
import AgentCard from '../../components/AgentCard/AgentCard'
import Navbar from '../../components/Navbar/Navbar'

const PropertyPage = ({propertyData}) => {

  console.log(propertyData)

  return (
    <div>
      <Navbar />
      <h1>showing the property I choose</h1>
      {propertyData?.map((property) => (
        <div key={property.sys.id}>
          <h1>{property.fields.name}</h1>
          <h2>{property.fields.price}</h2>
          <AgentCard image={property?.fields?.agents?.fields?.profilepic?.fields?.file?.url} email={property?.fields?.agents?.fields?.email} />
          <p>{property.fields.description}</p>
        </div>
      ))}
    </div>
  )
}
export default PropertyPage
