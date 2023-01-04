const express = require("express");
const router = express.Router();

const saveIdea = require("./services/save");
const getAllIdeas = require("./services/getAll");

// save ideas
router.post("/save", async (req, res) => {
  await saveIdea(req, res);
});

// get all ideas
router.get("/get-all", async (req, res) => {
  await getAllIdeas(req, res);
});

module.exports = router;
