import React from 'react';
import {BsEmojiFrown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function NotFound(){
  return(
    <div className="flex flex-col items-center justify-between">
    <BsEmojiFrown className="text-8xl py-2"/>
      <div className="text-6xl py-2">404</div>
    <div className="text-primary-dark text-3xl py-2">SORRY, the page Not Found </div>
      <div className="text-xl py-2">The link you followed probably broken or the page has been removed.</div>
      	<Link to="/">
      <button className="border rounded-md py-2 px-4 bg-black text-white mt-3">Back To Home</button>
          </Link>
  </div>
  )
}
export default NotFound;