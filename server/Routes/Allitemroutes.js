const express = require("express");
const allitemcontroler = require("./../Controler/Allitemcontroler");

const router = express.Router();

router.post("/api/post", allitemcontroler.addallitem);
router.get("/api/get", allitemcontroler.getall);
router.get("/api/single/:id", allitemcontroler.singledata);
router.put("/api/update/:id", allitemcontroler.updatedata);
router.delete("/api/delete/:id", allitemcontroler.deletedata);

router.get("/api/search/:value", allitemcontroler.searchitem);

module.exports = router;
