import React from 'react';
import codeSymbol from './../../images/codeSymbol.png'
import mountainMe from './../../images/mountainMe.jpg'




const Home = () => {
    return ( <>
    <div className = 'bg-black relative'>
        <div className = 'bg-black pt-20'>
            
            <h1 className = 'font-extrabold font-serif text-center text-4xl text-white pt-5'>Hello Fellow Coders!</h1>
            <h1 className = 'text-white text-2xl text-center px-16'>I'm Tomas, welcome to my PORTFOLIO</h1>
        
       
        <img className = 'rounded-full px-2 py-3 absolute bottom-0 z-10 object-scale-down' src = {codeSymbol} alt = 'codeSymbol' ></img>

        <img className = 'rounded-full px-2 py-3 z-0' src = {mountainMe} alt = "profileMe"></img>
        </div>
        
      {/*
        <img className = {classes.Code} src = {codeSymbol} alt = 'codeSymbol' ></img>
        
        <img  src = {codingMe} alt = "profileMe"></img> */}
        
        </div>
    </>
     );
}
 
export default Home;