import React from 'react'
import { useState } from 'react';

const ListingPage = ({propertyData}) => {
  
  console.log(propertyData[0]?.fields.name)

  return (
    <div>
      <h1>Listing All Properties by filter Page</h1>
      {propertyData?.map((property) => (
        <div key={property.sys.id}>
          <h1>{property.fields.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default ListingPage
