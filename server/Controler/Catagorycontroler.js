const Catagory = require("./../model/Catagoryschema");

exports.addcatagory = async (req, res) => {
  try {
    const catagory = new Catagory({
      catagory: req.body.catagory,
    });
    const catagorydata = await catagory.save();
    res
      .status(200)
      .json({ message: "catagory data", success: "true", data: catagorydata });
  } catch (err) {
    res.status(502).json({ mess: "this is server error" });
  }
};
