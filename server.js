require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const multer = require("multer");

const app = express();
// const multerMid = multer({ storage: multer.memoryStorage() });

// app.use(multerMid.single("file"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const ideasRoute = require("./modules/ideas/router");
const vouchRoute = require("./modules/vouches/router");
const discussionsRoute = require("./modules/discussions/router");
require("./config/database").connect();

app.use("/api/ideas", ideasRoute);
app.use("/api/vouches", vouchRoute);
app.use("/api/discussions", discussionsRoute);

app.get("/api", (req, res) => {
  res.send("Api Working!");
});

const { PORT } = process.env;

app.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});
