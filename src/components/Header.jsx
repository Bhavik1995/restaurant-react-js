import React from 'react'
import slider from '../images/slide-1.jpg';
import flag from '../images/italian flag.jpg';
import Typewriter from 'typewriter-effect';
import './header.css';

const Header = () => {

    return (
        <>

            <div className='container'>
                <div className='head-image'>
                    <img src={slider} alt='pizza'/>
                    <div className='header_data'>
                        <h1>
                        <Typewriter options={{
                      autoStart: true,
                      loop: true
                        }} onInit={(typewriter)=>{
                        typewriter.typeString(`Pasta & Ravioli`)
                        .pauseFor(4000)
                        // .deleteAll()
                        .start()
                            }} />
                        </h1>  
                        <p>Offering authentic Italian <br/>
                            fresh-filled pastas 
                        </p>
                        <img className='flag' src={flag} alt='flag'/>
                    </div>
                </div>
            </div>
           
        </>
    )
}


export default Header
