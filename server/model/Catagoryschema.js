const mongoose = require("mongoose");

const catagoryschema = new mongoose.Schema(
  {
    catagory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//mongoose model

const Catagory = new mongoose.model("Catagory", catagoryschema);

module.exports = Catagory;
