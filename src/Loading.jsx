import React from "react";
import { CgSearchLoading } from "react-icons/cg";

function Loading(){
  return <div className=" text-6xl text-rose-600 flex items-center justify-center">
    <CgSearchLoading className="animate-spin"/></div>;
  
}
export default Loading;