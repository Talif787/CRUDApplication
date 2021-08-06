const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 7000;

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/css", express.static(path.join(__dirname, "assets", "css")));
app.use("/img", express.static(path.join(__dirname, "assets", "img")));
app.use("/js", express.static(path.join(__dirname, "assets", "js")));

app.get("/", (req, res) => {
  //   res.send("Welcome to the CRUD Apllication..");
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Listening at the port: ${PORT}`);
});
