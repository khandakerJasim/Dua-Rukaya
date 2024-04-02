import React from "react";
import { IoLanguage } from "react-icons/io5";
import { CiGrid32 } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";

export default function Rightside() {
  return (
    <div>
      <h1 className="text-center mt-6 text-xl opacity-80 font-bold ">
        Setting
      </h1>
      <div className="mt-4 ">
        <ul className="flex flex-col items-center px-2 ">
          <li className="w-full flex gap-2 items-center bg-gray-100 p-3  rounded-md shadow-lg mt-2  ">
            <IoLanguage />
            <p className="text-sm">Language setting</p>
          </li>
          <li className="w-full flex gap-2 items-center bg-gray-100 p-3  rounded-md shadow-lg mt-4  ">
            <CiGrid32 />
            <p className="text-sm">General setting</p>
          </li>
          <li className="w-full flex gap-2 items-center bg-gray-100 p-3 rounded-md shadow-lg mt-4  ">
            <FiCalendar />
            <p className="text-sm">Font setting</p>
          </li>
          <li className="w-full border-l-4 border-green-500 text-green-600 items-center  flex gap-2 bg-gray-100 p-3 rounded-md shadow-lg mt-4  ">
            <FiCalendar />
            <p className="text-sm">Apparel setting</p>
          </li>
          <li className="w-full  justify-between items-center  flex gap-2 bg-gray-50 p-3 rounded-md shadow-lg mt-4  ">
            <p className="text-sm">night mode</p>
            <FiCalendar />
          </li>
        </ul>
      </div>
    </div>
  );
}
