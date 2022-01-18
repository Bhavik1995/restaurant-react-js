import React from 'react';
import './recepie.css';

import recepie_bg from '../images/parallax-bg01.png';

const Recepie = () => {
    return (
       <>
         <div className='container'>
             <img src={recepie_bg} alt='recepie_bg'/> 

             <div className='main_heading'>
                 <h1>Send your recipe <br/>  get free pasta</h1>

                <div className='main-heading-desc'>
                    <p>There is a diverse variety of authentic Italian recipes - pastas, sauces, as well as a
                        variety of other traditional style foods. Try to cook them in your kitchen in a traditional style,
                        or you may add your favourite spices and flavors, try new meal ideas...impress your family and
                        friends. Send us your own recipe and get free pasta. </p>

                        <button className='desc-button'>Read More</button>
                </div>
           
             </div>
         </div>
       </>
    )
}

export default Recepie
