import React from 'react'
import { useState } from 'react';
import "./ListingPage.css"
import ListingCards from '../../components/listingcards/listingCards';
import ImageSliderForProperty from '../../components/ImageSliderForProperty/ImageSliderForProperty';

const ListingPage = ({ propertyData }) => {

  console.log(propertyData[1]?.fields.images[0].fields.file.url)

  return (
    <div>
      {/* <ImageSliderForProperty images={propertyData[1]?.fields.images[0].fields.file.url} /> */}
      <h1>Listing All Properties by filter Page</h1>
      {propertyData?.map((property) => (
        <div key={property.sys.id}>

          <h1>{property.fields.name}</h1>
        </div>
      ))}
      <ListingCards />
    </div>
  )
}

export default ListingPage
