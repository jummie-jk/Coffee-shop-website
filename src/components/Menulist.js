import React from "react";

 const MenuList = (props) =>{
    return(
        <div className="">
            <div className="flex flex-row pt-8 pb-2 border-b-2 border-[#605D5D]">
                <div>
                    <img src={props.image} alt="A coffee cup"></img>
                </div>
                <div className="pl-4 pr-16 pt-4">
                    <p className="text-[#D3AD7F]">{props.coffeeName}</p>
                    <p className="text-[#938E8E]">{props.coffeeText}</p>
                </div>
                <div className="pt-6">
                    <p>{props.coffeePrice}</p>
                </div>
            </div>
        </div>
    )
 }

 export default MenuList;