const express = require("express");
const Catagorycontroler = require("./../Controler/Catagorycontroler");

const router = express.Router();

router.post("/api/catagory", Catagorycontroler.addcatagory);

module.exports = router;
