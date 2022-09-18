import React from "react";
import CartRow from "./CartRow";

const CartList = () => {
  return (
    <div className="mt-5 max-w-6xl mx-auto" >
 <CartRow 
 image="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  title="Black Printed Coffee Mug"
  price="5"
  quantity="2"
  total="10"
 />
  <CartRow
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyIncLVC6hbuiSqdu8w_pyhvQbjFj-b3lYA&usqp=CAU"
  title="Fasionable Blue Tshirt"
  price="10"
  quantity="5"
  total="50"
  />
  <div className="flex justify-between bg-white py-3 px-3">
    <div>
  <input className="w-auto border border-black px-4 py-1 mr-3" placeholder="Coupon Code"/>
  <button className="text-white bg-primary-default rounded-md px-4 py-1">APPLY COUPON</button>
  </div>
  <button className="text-white bg-primary-light rounded-md px-4 py-1">UPDATE CART</button>
  </div>

    </div>
 
  );
};

export default CartList;