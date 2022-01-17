import React from 'react'
import slider from '../images/slide-1.jpg';
import flag from '../images/italian flag.jpg';
import './header.css';

const Header = () => {

    return (
        <>

            <div className='container'>
                <div className='head-image'>
                    <img src={slider} alt='pizza'/>
                    <div className='header_data'>
                        <h1>Pasta & Ravioli</h1>  
                        <p>Offering authentic Italian <br/>
                            fresh-filled pastas 
                        </p>
                        <img src={flag} alt='flag'/>
                    </div>
                </div>
            </div>
           
        </>
    )
}


export default Header
