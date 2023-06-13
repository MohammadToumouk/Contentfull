import React, { useState } from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import './CategoryFilter.css';
import ListingCards from '../listingcards/listingCards';


export default function CategoryFilter({ propertyData }) {
  const [filteredData, setFilteredData] = useState(null);

  const handleClick = (category) => {
    const filteredResults = propertyData.filter((property) => property.fields.category === category);
    setFilteredData(filteredResults);
  };


  const uniqueCategories = [...new Set(propertyData.map((property) => property.fields.category))];

  return (
    <div>
      {uniqueCategories.map((category) => (
        <MDBBtnGroup aria-label='Basic example' key={category}>
          <button className='button-59' onClick={() => handleClick(category)}>
            {category}
          </button>
        </MDBBtnGroup>
      ))}

      <div className="cardsContainer">
        {filteredData?.map((property) => (
          <ListingCards
            key={property.sys.id}
            id={property.sys.id}
            image={property?.fields?.image?.fields?.file?.url}
            propertyName={property?.fields?.name}
            propertyInfos={`${property?.fields?.bedrooms} bed • ${property?.fields?.bath} bath • ${property?.fields?.propertySize}sqm`}
            price={`${property?.fields?.price} €`}
          />
        ))}
      </div>
    </div>
  );
}
