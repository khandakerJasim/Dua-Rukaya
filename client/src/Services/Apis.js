import { BASE_URL } from "./Helper";
import Commonrequest from "./Apicall";

export const Postfunc = async (data, header) => {
  return await Commonrequest("POST", `${BASE_URL}/api/post`, data, header);
};

export const Getfunc = async () => {
  return await Commonrequest("GET", `${BASE_URL}/api/get`, "");
};

export const Singleget = async (id) => {
  return await Commonrequest("GET", `${BASE_URL}/api/single/${id}`, "");
};
