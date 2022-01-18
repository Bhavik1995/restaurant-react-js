import React from 'react';
import './shop.css';
import recepie_bg from '../images/parallax1.jpg';
import right_side_image from '../images/parallax-bg01.png';
 
const Shop = () => {
    return (
        <>
            <div className='container'>
                <div className='recepie-image'>
                    <img src={recepie_bg} alt='recepie_image'/>
                </div>
                
                <div className='recepie_divide'>
                    <div className='left-side-recepie'>
                        <p>65</p>
                        <h4>Kinds of pasta</h4>
                    </div>

                    <div className='left-side-recepie-1'>
                        <p>32</p>
                        <h4>Kinds of ravioli</h4>
                    </div>

                    <div className='left-side-recepie-2'>
                        <p>15</p>
                        <h4>Kinds of cheese</h4>
                    </div>

                    <div className='right-side-recepie'>
                        <div className='right-side-image'>
                            <img src={right_side_image} alt='right-side'/>
                        </div>

                        <ul>
                            <li>Regular (Square) Ravioli</li>
                            <li>Round Ravioli</li>
                            <li>Manicotti</li>
                            <li>Stuffed Shells</li>
                            <li>Gnocchi</li>
                        </ul>
                    </div>

                    <div className='right-side-button'>
                            <button className='right-button'>Visit our online store!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
