import React from 'react'
import images from "../../assets/index";
import { Link } from 'react-router-dom';
import './listingcards.css';

function ListingCards({ id, image, propertyName, propertyInfos, price }) {
    return (
        <div className='cardsContainer'>
            <Link to={{pathname: `/property/${id}`, state: { data: {id} }}}>
            <div className='listingCard'>
                <img className='listingImage' src={image} />
                <div className='listingCard-body'>
                    <h2 className='propertyname'>{propertyName}</h2>
                    <p className='propertyInfos'>{propertyInfos}</p>
                    <div className="divider"></div>
                    <p className='price'>{price}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default ListingCards;