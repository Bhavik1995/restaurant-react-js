import React from 'react';

import bg_image from '../images/parallax-bg01.png';
import dishImage1 from '../images/dish1.png';
import './navbar.css';

const Navbar = () => {
    return (
      <>
        <div className='container'>
            <img className='bg_image' src={bg_image} alt=''/>
            <div className='navbar-data'>
                <ul className='list'>
                    <li className='navbarList'>Home</li>
                    <li className='navbarList'>About Us</li>
                    <li className='navbarList'>Products</li>
                    <li className='navbarList'>Catering</li>
                    <li className='navbarList'>Contacts</li>
                </ul>

                <h1>Welcome!</h1>
                <h6>Our Company is a diverse manufacturer and distributor, <br/>
                    specializing in authentic Italian fresh-filled pastas</h6> 


                <div className='content'>
                    <div className='left-content'>
                        <p>Our comprehensive Italian products include ravioli, tortellini, manicotti, cannelloni,
                                stuffed shells, gnocchi, lasagna and other premium filled pasta products. You can
                                supplement the pasta with our line of delicious fresh sauces. Along with our awesome
                                products we can manufacture products specifically tailored to your requirements. </p>
                    </div>

                    <div className='right-content'>
                        <p>Our contemporary life styles have made time-saving concessions in the kitchen a
                                necessity, but we are not willing to sacrifice the quality of the meals we serve to our
                                families. For those of us reared in the tradition of traditional Italian cooking, and
                                for countless others who love the authentic dishes of Italy, there is an alternative.
                                That alternative is the superb line of our products</p>
                    </div>
                </div>

                <div className='dishes'>
                    <div className='dish-image'>
                        <img src={dishImage1} alt='dishes'/>
                    </div>

                    <div className='dish-price'>
                        <h4>Tagliatelle</h4>
                        <p className='dish-value'>$25.99</p>

                        <p>
                            Long, thin ribbons of pasta sold either in curled nests or straight, like
                            spaghetti. Tagliatelle can be plain or green (flavoured with spinach) and is
                            available fresh or dried.
                        </p>

                        <button className='btn-buy'>Buy Now!</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default Navbar
