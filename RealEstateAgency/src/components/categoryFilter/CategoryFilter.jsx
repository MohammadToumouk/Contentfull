import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import './CategoryFilter.css';


export default function CategoryFilter({propertyData}) {
  //console.log(propertyData[1])
  return (

 <div>
      
      {propertyData?.map((property) => (
        <MDBBtnGroup aria-label='Basic example' key={property.sys.id}>
          <MDBBtn class="btn btn-light">{property.fields.category}</MDBBtn>
        </MDBBtnGroup>
      ))}
    </div>



    
  );
}

