import React, { createContext, useContext, useEffect, useState } from "react";

const adddata = createContext();

export const Contextprovider = ({ children }) => {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/get")
      .then((res) => res.json())
      .then((data) => setdatas(data));
  });
  return (
    <div>
      <adddata.Provider value={{ datas, setdatas }}>
        {children}
      </adddata.Provider>
    </div>
  );
};

export const Datastate = () => {
  return useContext(adddata);
};
