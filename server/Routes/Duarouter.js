const express = require("express");
const Duacontroler = require("./../Controler/Duacontroler");

const router = express.Router();

router.post("/api/dua", Duacontroler.adddua);

module.exports = router;
