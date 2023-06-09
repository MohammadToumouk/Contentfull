import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import './CategoryFilter.css';

export default function CategoryFilter() {
  return (
    <div className='Filter'>
    <MDBBtnGroup aria-label='Basic example'>
      <MDBBtn color='dark'>Villas</MDBBtn>
      <MDBBtn color='dark'>Ranches</MDBBtn>
      <MDBBtn color='dark'>Town Homes</MDBBtn>
      <MDBBtn color='dark'>House Boats</MDBBtn>
      <MDBBtn color='dark'>Mansion</MDBBtn>
      <MDBBtn color='dark'>PROPERTIES</MDBBtn>
    </MDBBtnGroup>
    </div>
  );
}