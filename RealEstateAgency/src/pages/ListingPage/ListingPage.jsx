import React from 'react'
import { useState } from 'react';
import "./ListingPage.css"
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ListingCards from '../../components/listingcards/listingCards';
import ImageSliderForProperty from '../../components/ImageSliderForProperty/ImageSliderForProperty';


const ListingPage = ({ propertyData}) => {


  console.log(propertyData[1]?.fields.images[0]?.fields.file.url)


  return (
    <div>
      <Navbar />
      <h1>Listing All Properties by filter Page</h1>
      <div className="cardsContainer">
        {/* <ImageSliderForProperty images={propertyData[1]?.fields.images[0].fields.file.url} /> */}


        {propertyData?.map((property) => (

          <ListingCards
            key={property.sys.id} 
            image={property?.fields?.image?.fields?.file?.url}

            propertyName={property?.fields?.name}

            propertyInfos={`${property?.fields?.bedrooms} bed • ${property?.fields?.bath} bath • ${property?.fields?.propertySize}sqm`}

            price={`${property?.fields?.price} €`}
          />

        ))}

      </div>
      <Footer />
    </div>
  )
}

export default ListingPage;
