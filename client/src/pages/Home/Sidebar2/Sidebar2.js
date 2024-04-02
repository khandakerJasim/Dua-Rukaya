import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import img from "./../../../Assets/image/person.png";
export default function Sidebar2() {
  const [search, setsearch] = useState();
  //const [datas, setDatas] = useState([]);

  useEffect(() => {
    //fetchdata();
  }, [search]);
  // const fetchdata = async () => {
  //   const response = await fetch(`http://localhost:4000/api/get`);
  //   const data = await response.json();
  //   setDatas(data.data);
  // };

  // const handleSearch = async (e) => {
  //   const value = e.target.value;
  //   // const
  //   // console.log(value);
  //   const response = await fetch(`http://localhost:4000/api/search/${value}`);
  //   const data = await response.json();
  //   console.log(data);
  // };
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };
  return (
    <div className="">
      <button className="w-full h-12 text-md rounded-t-md bg-green-600  mx-auto flex items-center font-semibold text-white  justify-center  ">
        Catagories
      </button>
      <div className="p-2 relative flex items-center gap-4 ">
        <span className="absolute   ">
          <AiOutlineSearch className="text-4xl mt-2 p-2" />
        </span>
        <form className="w-full" action="">
          <input
            className="w-full h-10 text-gray-800 opacity-80 pl-7 hover:outline-none focus:outline-none ring-1 ring-gray-200 rounded-md "
            type="text"
            placeholder="search by catogory"
            onChange={handleSearch}
          />
        </form>
      </div>
      {/* <div>
        {datas.map((data) => {
          return (
            <div>
              <h1>{data.dua_id}</h1>
              <h1>{data.name}</h1>
            </div>
          );
        })}
      </div> */}

      <div className="p-2 bg-gray-200 mx-2 rounded-md">
        <ul className="flex justify-between gap-3 ">
          <li className="flex space-x-2 items-center">
            <figure>
              <img className="h-12 w-12 rounded-md" src={img} alt="" />
            </figure>
            <span className="text-green-700 md:text-md text-sm font-semibold ">
              Introduction to Dua <br />
              <p className="text-gray-700 opacity-70">subcatagories</p>
            </span>
          </li>
          <li>
            <p className=" font-semibold text-gray-700  text-center m-auto ">
              15 <br /> <span className="text-sm opacity-80">Dua</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="p-4 border-l-4 pl-4 border-green-500 mt-2  mx-2 rounded-md">
        <ul className=" text-sm ">
          <li className=" text-green-500 ">what is Dua</li>
          <li className=" opacity-80 ">
            cordination dua is to be successfully
          </li>
          <li className=" opacity-80">the methods of dua</li>
          <li className=" opacity-80">Before dua</li>
          <li className=" opacity-80">During dua</li>
          <li className=" opacity-80">Bangladesh is a small country</li>
          <li className=" opacity-80">But her population is very high</li>
        </ul>
      </div>

      <div className="p-2 my-3 mx-2 rounded-md">
        <ul className="flex justify-between gap-3 ">
          <li className="flex space-x-2 items-center">
            <figure>
              <img className="h-12 w-12 rounded-md" src={img} alt="" />
            </figure>
            <span className="text-green-700 md:text-md text-sm font-semibold ">
              Introduction to Dua <br />
              <p className="text-gray-700 opacity-70">subcatagories</p>
            </span>
          </li>
          <li>
            <p className=" border-l-2 px-2 font-semibold text-gray-700  text-center m-auto ">
              15 <br /> <span className="text-sm opacity-80">Dua</span>
            </p>
          </li>
        </ul>
      </div>

      <div className="p-2 my-3 mx-2 rounded-md">
        <ul className="flex justify-between gap-3 ">
          <li className="flex space-x-2 items-center">
            <figure>
              <img className="h-12 w-12 rounded-md" src={img} alt="" />
            </figure>
            <span className="text-green-700 md:text-md text-sm font-semibold ">
              Introduction to Dua <br />
              <p className="text-gray-700 opacity-70">subcatagories</p>
            </span>
          </li>
          <li>
            <p className=" border-l-2 px-2 font-semibold text-gray-700  text-center m-auto ">
              15 <br /> <span className="text-sm opacity-80">Dua</span>
            </p>
          </li>
        </ul>
      </div>

      <div className="p-2 my-3  mx-2 rounded-md">
        <ul className="flex justify-between gap-3 ">
          <li className="flex  space-x-2 items-center">
            <figure>
              <img className="h-12 w-12 rounded-md" src={img} alt="" />
            </figure>
            <span className="text-green-700 md:text-md text-sm font-semibold ">
              Introduction to Dua <br />
              <p className="text-gray-700 opacity-70">subcatagories</p>
            </span>
          </li>
          <li className="">
            <p className=" border-l-2 px-2 font-semibold text-gray-700  text-center m-auto ">
              15 <br /> <span className="text-sm opacity-80">Dua</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
