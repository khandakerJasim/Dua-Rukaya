import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import img from "./../../Assets/image/man.png";
import { BsCaretDownFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="bg-white w-full text-black h-full sticky top-0 z-50">
      <div className="flex justify-between items-center p-3 md:mx-10 mx-3 gap-5">
        <div className="items-center">
          <h1 className="md:text-xl text-sm font-bold opacity-90 ">Dua page</h1>
        </div>
        <div className="flex items-center relative ">
          <input
            className="h-10 md:w-[300px]  w-full bg-white  opacity-75  hover:outline-none focus:outline-none
             p-2 rounded-md  ring-1 ring-gray-500 "
            type="text"
            placeholder="Search ByDua Name"
          />
          <AiOutlineSearch className=" text-2xl absolute right-1  h-9 w-9 bg-gray-200 items-center p-1 rounded-md   " />
        </div>
        <div className="flex items-center gap-1">
          <figure>
            <img className="h-12 w-12 rounded-full" src={img} alt="" />
          </figure>
          <BsCaretDownFill />
        </div>
      </div>
    </div>
  );
}
