const mongoose = require("mongoose");

const duaschema = new mongoose.Schema(
  {
    catagory_id: {
      type: String,
      required: true,
    },
    dua: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//model

const Dua = new mongoose.model("Dua", duaschema);

module.exports = Dua;
