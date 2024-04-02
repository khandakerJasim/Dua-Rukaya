const mongoose = require("mongoose");

const Subcatagoryschema = new mongoose.Schema(
  {
    catagory_id: {
      type: String,
      required: true,
    },
    subcatagory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//create model

const Subcatagory = new mongoose.model("Subcatagory", Subcatagoryschema);

module.exports = Subcatagory;
