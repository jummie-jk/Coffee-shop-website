import React from "react";

const ExclusiveList = (props) => {
  return (
    <div className="text-center">
      <div>
        <img src={props.img} alt="A coffee cup" className="px-6"></img>
        <p className="text-[#D3AD7F]">{props.name}</p>
        <p className="text-[#938E8E]">{props.text}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default ExclusiveList;
