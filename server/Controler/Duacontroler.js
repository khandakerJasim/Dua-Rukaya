const Dua = require("./../model/Duaschema");

exports.adddua = async (req, res) => {
  try {
    const duadata = new Dua({
      subcatagory_id: req.body.subcatagory_id,
      dua: req.body.dua,
    });
    const savedata = await duadata.save();
    res.status(200).json({ messg: "successfull", data: savedata });
  } catch (err) {
    res.status(500).json({ mess: "this is server error" });
    console.log(err);
  }
};
