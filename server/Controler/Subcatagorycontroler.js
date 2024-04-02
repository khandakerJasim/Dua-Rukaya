const Subcatagory = require("./../model/subcatagory");

exports.addsubcatagory = async (req, res) => {
  try {
    const subcatagory = new Subcatagory({
      catagory_id: req.body.catagory_id,
      subcatagory: req.body.subcatagory,
    });

    const subdata = await subcatagory.save();
    res.status(200).json({ mess: "successfull", data: subdata });
  } catch (err) {
    res.status(500).json({ mess: "this is server error" });
    console.log(err);
  }
};
