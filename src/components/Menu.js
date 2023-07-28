import React from 'react';
import MenuList from './Menulist';
import minicoffeea from '../images/mini-coffee-a.png'
import minicoffeeb from '../images/mini-coffee-b.png'
import minicoffeec from '../images/mini-coffee-c.png'
import minicoffeed from '../images/mini-coffee-d.png'

import minicoffeee from '../images/mini-coffee-e.png'
import minicoffeef from '../images/mini-coffee-f.png'
import minicoffeeg from '../images/mini-coffee-g.png'
import minicoffeeh from '../images/mini-coffee-h.png'

const CoffeeMenu = () => {

  return (
    <div className='bg-[#191919] text-white pb-16'>
       <div className='uppercase py-20 flex justify-center'>
         <hr className="border border-t-0 border-white my-4 w-32" />
         <h3 className='text-4xl px-2'>popular menu</h3> 
         <hr className="border border-t-0 border-white w-32 my-4" />
       </div>
        <div className=' flex flex-column justify-center'>
            <div className='pr-14 pb-8'>
                <MenuList image={minicoffeea} coffeeName="Americano" coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$10.00"/>
                <MenuList image={minicoffeeb} coffeeName="Doppio" coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$15.00"/>
                <MenuList image={minicoffeec} coffeeName="Latte" coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$18.00"/>
                <MenuList image={minicoffeed} coffeeName="Espresso Conpana" img="" coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$23.00"/>
            </div>
            <div className='pl-14'>
                <MenuList image={minicoffeee} coffeeName="Cappuccino" coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$05.00"/>
                <MenuList image={minicoffeef} coffeeName="Irish" coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$07.00"/>
                <MenuList image={minicoffeeg} coffeeName="Espresso" coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$26.00"/>
                <MenuList image={minicoffeeh} coffeeName="Mocha"  coffeeText="Lorem ipsum dolor sit amet" coffeePrice="$50.00"/>
            </div>
        </div>
    </div>
  );
};

export default CoffeeMenu;