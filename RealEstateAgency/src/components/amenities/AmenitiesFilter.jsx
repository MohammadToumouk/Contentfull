import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

export default function AmenitiesList({ propertyData }) {
  const combinedAmenities = propertyData
    ? propertyData.reduce((amenities, property) => {
        if (property.fields.amenities) {
          return [...amenities, ...property.fields.amenities];
        }
        return amenities;
      }, [])
    : [];

  const uniqueAmenities = [...new Set(combinedAmenities)];

  return (
    <div>
      {uniqueAmenities.map((amenity) => (
        <MDBBtnGroup aria-label='Basic example' key={amenity}>
          <MDBBtn className='btn btn-light'>{amenity}</MDBBtn>
        </MDBBtnGroup>
      ))}
    </div>
  );
}