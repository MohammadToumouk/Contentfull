import React from 'react'
import images from "../../assets/index";
import { Link } from 'react-router-dom';
import './categorycards.css';

function CategoryCards() {
    return (
        <div className='cardsContainer'>
            <Link
              to={{
                pathname: "/listing",
                state: { data: "Villa" }
              }}
            >        
            <div className='catcard'>
                <img className='categoryImage' src={images.image1} />
                <div className='card-body'>
                    <h2>Villa</h2>
                </div>
            </div>
            </Link>  
            <div className='catcard'>
                <img className='categoryImage' src={images.image2} />
                <div className='card-body'>
                    <h2>Penthouse</h2>
                </div>
            </div>
            <div className='catcard'>
                <img className='categoryImage' src={images.image3} />
                <div className='card-body'>
                    <h2>Town Home</h2>
                </div>
            </div>
            <div className='break'></div>
            <div className='catcard'>
                <img className='categoryImage' src={images.image4} />
                <div className='card-body'>
                    <h2>Farmhouse</h2>
                </div>
            </div>
            <div className='catcard'>
                <img className='categoryImage' src={images.image5} />
                <div className='card-body'>
                    <h2>Cabin</h2>
                </div>
            </div>
            <div className='catcard'>
                <img className='categoryImage' src={images.image6} />
                <div className='card-body'>
                    <h2>Castle</h2>
                </div>
            </div>
        </div>
    )
}
export default CategoryCards;