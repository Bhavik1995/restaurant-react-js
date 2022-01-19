import React from 'react';
import service_image from '../images/services.jpg';

import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import icon7 from '../images/icon7.png';
import icon8 from '../images/icon8.png';

import './services.css';

const Services = () => {
    return (
        <>
            <div className='container'>
                <img src={service_image} alt='service'/>

                <div className='main_data'>
                    <div className='quality_std'>
                        <h3>Quality <br/> Standards</h3>

                        <ul className='quality_list'>
                            <li>- Using the culture of the tradition</li>
                            <li>- Raw materials</li>
                            <li>- Advanced technologies</li>
                            <li>- The best pasta equipment</li>
                            <li>- Safe pasta processing</li>
                        </ul>

                        <button className='quality_btn'>Read More</button>
                    </div>

                    <div className='service_ship'>
                        <h3>Services & Shipping</h3>

                        <p>Here you can read some details about a nifty little lifecycle of your order's 
                        journey from the time you place your order to your 
                        new treasures arriving at your doorstep. At first you choose the product you like.</p>

                        <p>Then you put into your shopping cart and pass the checkout process in a few clicks. 
                        Our store offers several payment and delivery methods, 
                        so you have an opportunity to choose which one is the most convenient for you.</p>

                        {/* <button className='service_btn'>Read More</button> */}
                    </div>

                    <div className='grid_data'>
                        <ul className='bg-data'>
                            <li>
                               <img src={icon1} alt='icon1'/> 
                            </li>
                            <li>
                               <img src={icon2} alt='icon2'/> 
                            </li>
                            <li>
                               <img src={icon3} alt='icon3'/> 
                            </li>

                            <li>
                               <img src={icon4} alt='icon4'/> 
                            </li>
                            <li>
                               <img src={icon5} alt='icon5'/> 
                            </li>
                            <li>
                               <img src={icon6} alt='icon6'/> 
                            </li>

                            <li>
                               <img src={icon7} alt='icon7'/> 
                            </li>
                            <li>
                               <img src={icon8} alt='icon8'/> 
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
