const mongoose = require("mongoose");

const allitem = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    catagory_id: {
      type: String,
      required: true,
    },
    subcatagory_id: {
      type: String,
      required: true,
    },
    dua_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Allitem = new mongoose.model("allRukaya", allitem);

module.exports = Allitem;
