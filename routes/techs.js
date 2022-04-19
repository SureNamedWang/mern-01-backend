const express = require("express");

const router = express.Router();
const {
  getTechs,
  setTechs,
  updateTechs,
  deleteTechs,
} = require("../controller/techsController");

router.get("/", getTechs);

router.post("/", setTechs);

router.put("/:id", updateTechs);

router.delete("/:id", deleteTechs);

module.exports = router;
