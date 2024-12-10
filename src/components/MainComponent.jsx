import React from 'react'
import Home from './Home'
import {createBrowserRouter} from "react-router-dom";
import Contact from './Contact';
import OrderDetails from './OrderDetails';
import Navbar from './Navbar';
const MainComponent = () => {
   
  return (
    <>
        
          <h1>This is My main Component</h1>
          <h2>Here i can do Routing</h2>

          <Navbar />


    
    
    </>
  )
}

export default MainComponent