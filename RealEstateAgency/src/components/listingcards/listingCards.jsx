import React from 'react'
import images from "../../assets/index";
import { Link } from 'react-router-dom';
import './listingcards.css';

function ListingCards() {
    return (
        <div className='cardsContainer'>
            <div className='listingCard'>
                <img className='categoryImage' src={images.image1} />
                <div className='listingCard-body'>
                    <h2 className='propertyname'>Villa</h2>
                    <p className='propertyInfos'>2 bed • 2 bath • 300sqm</p>
                    <div className="divider"></div>
                    <p className='price'>300.000€</p>
                </div>
            </div>
        </div>
    )
}
export default ListingCards;