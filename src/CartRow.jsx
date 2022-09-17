import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
const CartRow = () => {
  return (
    <div className="flex px-3">
        <button>
        <AiOutlineCloseCircle/>
        </button>
<div className="w-12">
        <img src="https://www.google.com/search?q=iphone+14&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjM1L-Zp5z6AhVIRmwGHbwDCRUQ_AUoA3oECAIQBQ#imgrc=w9AQoOvebc9UYM"/>
        </div>
        <h1>Iphone 14</h1>
        <h1>$1000</h1>
        <input className="w-4" type="number" min="1"/>
        <h1>$1000</h1>
      
    </div>
  );
};

export default CartRow;