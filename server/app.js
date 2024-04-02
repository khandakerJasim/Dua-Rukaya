const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const catagoryrouter = require("./Routes/CatagoryRoute");
const subcatagoryrouter = require("./Routes/Subcatagoryroutes");
const duarouter = require("./Routes/Duarouter");
const allitemrouter = require("./Routes/Allitemroutes");
const app = express();
dotenv.config();

//database connention
mongoose
  .connect("mongodb://127.0.0.1:27017/DUA")
  .then(() => {
    console.log("mongodb connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//router use
app.use(catagoryrouter);
//subrouter use
app.use(subcatagoryrouter);

//dua router use
app.use(duarouter);

//allitem router use
app.use(allitemrouter);

module.exports = app;
