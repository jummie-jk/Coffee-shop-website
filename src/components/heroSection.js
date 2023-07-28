import React from "react";
import backgroundImage from '../images/coffee-bg.png';
import logo from '../images/logo.png';
import Button from "./Button";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
   return (
      <div>
         {/* <section>
            <div class="relative">
                  <img src={backgroundImage} alt="BannerImage" class=" h-[70vh] lg:h-[80vh] w-full object-cover bg-cover object-right opacity-30 " />
                  <div class="absolute -z-10 bg-gradient-to-b from-black via-[#26201f to-black h-[70vh] lg:h-[80vh] w-full" />
                  <div className="opacity-100">
                     <div>
                  </div>
            </div>
         </section> */}
         <section>
               <div className="bg-cover bg-center h-[80vh] w-full lg:h-[70vh] bg-gradient-to-b from-black via-[#61494a] to-black" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="w-full h-full backdrop-brightness-50">
                     <nav className="p-2">
                        <div className="max-w-6xl mx-auto">
                           <div className="flex justify-between font-display ">
                              <div className=" ">
                                 <img src={logo} alt="My Logo" className="h-14 w-14 pt-4 ml-4"/>
                              </div>
                              <ul className="flex space-x-8 text-white text-base pt-2">
                                 <li className="">Home</li>
                                 <li className="">About</li>
                                 <li className="">Menu</li>
                                 <li className="">Reservation</li>
                                 <li className="">Shop</li>
                                 <li className="">Contact</li>
                                <li> <Button className="primary-button bg-[#D3AD7F] hover:bg-[gold]-200  text-white px-4 py-2 rounded-md cursor-pointer">Book Now</Button></li>
                              </ul>
                           </div>
                        </div>
                     </nav>
                     <div className="text-white mt-14 ml-44">
                        <h1 className="text-6xl uppercase">Roasted Coffee<br></br>{" "}
                        <Typewriter
                              options={{
                              strings: ["For You"],

                              autoStart: true,
                              loop: true,
                              deleteSpeed: 200,
                              }}
                           />
                        </h1>
                        <p className="text-sm my-8">The coffee is brewed by first roasting the green coffee<br></br> 
                              coals in a brazier. given an opportunity to sample.
                        </p>
                        <div className="space-x-4">
                           <Button className="bg-[#D3AD7F] hover:bg-[gold]-200  text-white px-4 py-2 rounded-md cursor-pointer">Testy Coffee</Button>
                           <Button className="text-white border border-[#D3AD7F] p-2 rounded-mdpx-4 py-2 rounded-md cursor-pointer">Read More</Button>
                        </div>
                     </div>
                  </div>
               </div>
         </section>
      </div>
      
    )
  }
  
  export default HeroSection;