import React, { useState } from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import './CategoryFilter.css';

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

      {filteredData?.map((property) => (
        <div key={property.sys.id}>
          <p>{property.fields.name}</p>
          <p>{property.fields.bedrooms}</p>
        </div>
      ))}
    </div>
  );
}
