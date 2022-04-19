// @desc Get Techs
// @route GET /api/v1/techs
// @access PRIVATE
const getTechs = (req, res) => {
  res.status(200).json({ message: `Get Techs` });
};

// @desc Get Techs
// @route GET /api/v1/techs
// @access PRIVATE
const setTechs = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add bodeh");
  }
  res.status(200).json({ message: "Set Techs" });
};

// @desc Get Techs
// @route GET /api/v1/techs
// @access PRIVATE
const updateTechs = (req, res) => {
  res.status(200).json({ message: `Update Techs ${req.params.id}` });
};

// @desc Get Techs
// @route GET /api/v1/techs
// @access PRIVATE
const deleteTechs = (req, res) => {
  res.status(200).json({ message: `Delete Techs ${req.params.id}` });
};

module.exports = {
  getTechs,
  setTechs,
  updateTechs,
  deleteTechs,
};
