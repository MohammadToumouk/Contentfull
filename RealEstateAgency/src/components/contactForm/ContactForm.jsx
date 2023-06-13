import React from 'react';
import './ContactForm.css';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';

export default function ContactForm() {
  return (
    <div className='contactContainer'>
    <div>
      <img src='https://w0.peakpx.com/wallpaper/837/284/HD-wallpaper-cabin-home-house-mansion.jpg' height={"350px"}></img>
    </div>
    <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBTextArea label='Message' id='textAreaExample' rows={4} />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Remember Me'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4 btnSend' block>
        Send
      </MDBBtn>
    </form>
    </div>
  );
}