import axios from "axios";

const Commonrequest = async (methods, url, header, body) => {
  let config = {
    method: methods,
    url,
    headers: header ? header : { "Content-type": "application/json" },
    data: body,
  };

  //axios instence

  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

export default Commonrequest;
