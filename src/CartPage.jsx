import React from "react";
import CartList from "./CartList";
import {
  HiArrowNarrowLeft} from 'react-icons/hi';
  import { Link } from 'react-router-dom';


const CartPage = () => {
  return (
    <div>
       <Link to="/">
        <HiArrowNarrowLeft className="text-3xl mb-2 mx-36 mt-3" />
      </Link>

        <CartList/>
        </div>
  );
};

export default CartPage;