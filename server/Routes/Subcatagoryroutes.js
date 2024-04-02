const express = require("express");
const subcatagoryrouter = require("./../Controler/Subcatagorycontroler");
const router = express.Router();

//subcatagory post

router.post("/api/subcatagory", subcatagoryrouter.addsubcatagory);

module.exports = router;
