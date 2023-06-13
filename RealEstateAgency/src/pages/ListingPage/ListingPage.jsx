import React from 'react'
import { useState } from 'react';
import "./ListingPage.css"
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ListingCards from '../../components/listingcards/listingCards';
import ImageSliderForProperty from '../../components/ImageSliderForProperty/ImageSliderForProperty';
import CategoryFilter from '../../components/categoryFilter/CategoryFilter';


const ListingPage = ({ propertyData}) => {


  console.log(propertyData[1]?.fields.images[0]?.fields.file.url)


  return (
    <div className='listingPage'>
      <Navbar />
      <h1 className='listingpageH1'>Listing All Properties by filter Page</h1>
      <CategoryFilter propertyData={propertyData}/>
      <Footer />
    </div>
  )
}

export default ListingPage;
