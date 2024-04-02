import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Sidebar2 from "./Sidebar2/Sidebar2";
import Middleside from "./middlesidebar/Middleside";
import Rightside from "./Rightside/Rightside";

export default function Home() {
  return (
    <div className=" flex flex-wrap  gap-7 md:py-3 py-3 bg-gray-100 md:mt-7 md:3    ">
      <div className="w-[70px] h-[600px] hidden md:block ml-4 rounded-md shadow-md ">
        <Sidebar />
      </div>
      <div className="md:w-1/4 w-full h-[600px]  shadow-md bg-white rounded-md ">
        <Sidebar2 />
      </div>
      <div className="md:w-1/2 sm:w-1/2 h-full shadow-md bg-white rounded-md">
        <Middleside />
      </div>
      <div className="shadow-md h-[600px] md:w-[180px] w-full bg-white rounded-md ">
        <Rightside />
      </div>
    </div>
  );
}
