import React from 'react';
import coffee from '../images/coffee-img.png'

const CoffeeShop = () => {
  return (
    <div>
        <section className='bg-black bg-gradient-to-b from-[#2d2526] via-black to-black text-white '>
            <div className='flex flex-row justify-center pt-24 pb-0'>
                <div className=''>
                    <div><img src={coffee} alt="My Logo" className="-mt-12 "/></div>
                </div>
                <div className='px-32'>
                    <h3 className='font-semibold'>
                        Now enjoy a wonderful<br></br>cafe dining experience<br></br> and healthy food
                    </h3>
                </div>
                <div>
                    <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Nunc vulputate libero et <br></br> velit interdum, ac aliquet odio mattis.</p>
                    <p className='font-semibold pt-2'>About Us</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default CoffeeShop;