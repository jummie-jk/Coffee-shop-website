import React, {useEffect, useState} from 'react';
import ExclusiveList from './ExclusiveList';
import exclusivea from '../images/exclusive-a.png'
import exclusiveb from '../images/exclusiveb.png'
import exclusivec from '../images/exclusivec.png'

const ExclusiveCoffee = () => {

  return (
    <div className='bg-black text-white pb-20'>
      <div>
        <div className='uppercase py-20 flex justify-center'>
            <hr className="border border-t-0 border-white my-5 w-32" />
            <h3 className='text-4xl px-2'>exclusive coffee</h3> 
            <hr className="border border-t-0 border-white w-32 my-5" />    
        </div>
        <div className='flex flex-row justify-center '>
           <div className='hover:bg-[#191919] hover:shadow-2xl py-4'><ExclusiveList img={exclusivea} name="Americano" text="Lorem ipsum dolor sit amet" price="JUST $19.00"/></div>
           <div className='hover:bg-[#191919] hover:shadow-2xl py-4'><ExclusiveList img={exclusiveb} name="Cappuccino" text="Lorem ipsum dolor sit amet" price="JUST $15.00"/></div>
           <div className='hover:bg-[#191919] hover:shadow-2xl py-4'><ExclusiveList img={exclusivec} name="Espresso" text="Lorem ipsum dolor sit amet" price="JUST $9.00"/></div>
        </div>
       
      </div>
    </div>
  );
};

export default ExclusiveCoffee;