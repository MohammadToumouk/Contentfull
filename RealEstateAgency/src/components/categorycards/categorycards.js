import React from 'react'
import images from "../assets/index.js";
import { Link } from 'react-router-dom';
import '../styles/categorycards.css';

function CategoryCards() {
    return (
        <div className='cardsContainer'>
            <div className='card'>
                <img className='categoryImage' src={images.image5} />
                <div className='card-body'>
                    <h2>Villa</h2>
                </div>
            </div>
            <div className='card'>
                <img className='categoryImage' src={images.image5} />
                <div className='card-body'>
                    <h2>Penthouse</h2>
                </div>
            </div>
            <div className='card'>
                <img className='categoryImage' src={images.image5} />
                <div className='card-body'>
                    <h2>Town Home</h2>
                </div>
            </div>
            <div className='break'></div>
            <div className='card'>
                <img className='categoryImage' src={images.image5} />
                <div className='card-body'>
                    <h2>Farmhouse</h2>
                </div>
            </div>
            <div className='card'>
                <img className='categoryImage' src={images.image5} />
                <div className='card-body'>
                    <h2>Cabin</h2>
                </div>
            </div>
            <div className='card'>
                <img className='categoryImage' src={images.image5} />
                <div className='card-body'>
                    <h2>Castle</h2>
                </div>
            </div>
        </div>
    )
}
export default CategoryCards;