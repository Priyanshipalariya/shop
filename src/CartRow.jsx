import React, { useState } from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";

const CartRow = (data) => {
  const [inputValue, setInputValue] = useState(1)
  return (
    <div className="flex items-center justify-between border border-gray-400 p-5 max-w-6xl mx-auto m-2 border bg-white">
        <button className="text-2xl">
        <AiOutlineCloseCircle/>
        </button>
<div className="w-16 h-16">
        <img className="h-full w-full object-cover" src={data.image}/>
        </div>
        <h1 className="text-xl text-primary-default pr-12">{data.title}</h1>
        <h1>${data.price}</h1>
        <input className="w-8 border border-black" type="number" value={data.quantity} min="1"/>
        <h1>${data.total}</h1>
      
    </div>
  );
};

export default CartRow;