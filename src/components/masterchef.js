import React from 'react';
import masterchef from '../images/master-chef.png'
import mastercoffeea from '../images/master-coffeea.png'
import mastercoffeeb from '../images/master-coffeeb.png'

const Masterchef = () => {
  return (
    <div className='text-white h-[50hv] w-full'>
      <div className='flex bg-black '>
         <div className='w-1/2'>
            <div>
                 <img src={masterchef} alt='A coffee cup'></img>
            </div>
            <div>
                <img></img>
                <h3>Masterchef message</h3>
                <p>Unique and delicious dishes from the worlds best masterchefs</p>
                <p>Lorem ipsum dolor sit amet, ssfsf consectetur
                     adipiscing elit. Nunc vulputate libero et velit
                      interdum, ac aliquet odio mattis.
                </p>
                <img></img>
            </div>
         </div>
         <div className= 'w-1/2 grid grid-cols-2 gap-4'>
            <div className='text-black bg-white'>
                <p>Delicious<br></br>morning<br></br> Coffee</p>
            </div>
            <div>
                <img src={mastercoffeea} alt='A coffee cup'></img>
            </div>
            <div>
                <img src={mastercoffeeb} alt='A coffee cup'></img>
            </div>
            <div>
                <p>Delicious<br></br>morning<br></br> Coffee</p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Masterchef;