import React from 'react';
import service_image from '../images/services.jpg';
import './services.css';

const Services = () => {
    return (
        <>
            <div className='container'>
                <img src={service_image} alt='service'/>

                <div className='main_data'>
                    <div className='quality_std'>
                        <h3>Quality Standards</h3>
                    </div>

                    <div className='service_ship'>

                    </div>

                    <div className='grid_data'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
