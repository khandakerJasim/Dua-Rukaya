const Allitem = require("./../model/Addall_item");

exports.addallitem = async (req, res) => {
  try {
    const allitem = new Allitem({
      name: req.body.name,
      catagory_id: req.body.catagory_id,
      subcatagory_id: req.body.subcatagory_id,
      dua_id: req.body.dua_id,
    });

    const saveitem = await allitem.save();

    res.status(200).json({ messg: "successfull", data: saveitem });
  } catch (err) {
    res.status(500).json({ messg: "this is server error" });
    console.log(err);
  }
};

//get allitem

exports.getall = async (req, res) => {
  try {
    const allitem = await Allitem.find();
    res.status(200).json({ messg: "successfully", data: allitem });
  } catch (err) {
    res.status(400).json({ messg: "error" });
    console.log(err);
  }
};

//get data by id
exports.singledata = async (req, res) => {
  const { id } = req.params;
  try {
    const singledata = await Allitem.findById({ _id: id });
    res.status(200).json({ messg: "find successfull", data: singledata });
  } catch (err) {
    res.status(400).json({ messg: "error" });
    console.log(err);
  }
};

//deleteuser

exports.deletedata = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedata = await Allitem.findByIdAndDelete({ _id: id });
    res.status(200).json({ messg: "delete successfully", data: deletedata });
  } catch (err) {
    res.status(400).json({ messg: "error" });
    console.log(err);
  }
};

//updatdata

exports.updatedata = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedata = await Allitem.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ messg: "successfully", data: updatedata });
  } catch (err) {
    res.status(400).json({ messg: "error" });
    console.log(err);
  }
};

// serach all item

exports.searchitem = async (req, res) => {
  const search = req.body.search || "";
  // const data = req.body.data;
  console.log(search);

  const query = {
    name: {
      $regex: search,
      $options: "i",
    },
  };
  try {
    const searchitem = await Allitem.find(query);
    if (searchitem.length > 0) {
      res
        .status(200)
        .json({ messg: "find item successfully", data: searchitem });
    } else {
      res.status(200).json({ messg: "serach item not found" });
    }
  } catch (err) {
    res.status(400).json({ messg: "error" });
    console.log(err);
  }
};
