import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Recepie from './components/Recepie';
import Services from './components/Services';
import Shop from './components/Shop';

const App = () => {
  return (
   <>
    <Header/>
     <Navbar/>
     <Shop/>
     <Recepie/>
     <Services/>
   </>
  )
}

export default App
