import React from 'react';
import './ScrollingText.css';
import left from '../images/left-grain.png'
import right from '../images/right-grain.png'
import coffeecup from '../images/coffee-shop-img.png'

const CoffenerShop = () => {
  return (
    <div className="background-scrolling">
        <section className='scrolling-text-container'>
            <div className='pt-48 flex flex-row justify-center'>
                <div>
                    <img src={left} alt='coffee-grains' className=''></img>
                </div>
                <div className=''>
                    <h1><span className="text-white scrolling-text mx-24 pt-16 uppercase text-6xl">coffeeshop</span></h1>
                </div>
                <div>
                    <img className='' src={right} alt='coffee-grains'></img>
                </div>
            </div>
            <div className='flex justify-center -mt-64'>
                    <img src={coffeecup} alt="A cup of coffee"></img>
                </div>
        </section> 
    </div>
  );
};

export default CoffenerShop;