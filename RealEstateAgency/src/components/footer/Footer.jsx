import React, { useState } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './footer.css'


export default function Footer() {

    const [className, setClassName] = useState("");



  return (

    <ThemeProvider theme={theme}>
    <MDBFooter  className='text-center text-lg-start text-muted'>

    
    <MDBFooter  className='text-center text-lg-start text-muted custom-footer'>

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='dark' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='dark' icon='gem' className='me-3' />
                EMA REAL ESTATE
              </h6>
              <p className='footerText'>
              Welcome to EMA Real Estate, where we turn your dreams of finding the perfect property into reality. With years of experience and a dedicated team of professionals, we are committed to providing exceptional real estate services tailored to your unique needs.


              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Mansion
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Villa
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Castle
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  House
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='dark' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='dark' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='dark' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='dark' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        EMA REAL ESTATE
        
      </div>
    </MDBFooter>
    
  );
}