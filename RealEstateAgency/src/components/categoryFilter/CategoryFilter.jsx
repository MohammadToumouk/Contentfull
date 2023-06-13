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

  return (
    <div>
      {propertyData?.map((property) => (
        <MDBBtnGroup aria-label='Basic example' key={property.sys.id}>
          <MDBBtn
            className='btn btn-light'
            onClick={() => handleClick(property.fields.category)}
          >
            {property.fields.category}
          </MDBBtn>
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
