const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const router = require("./server/routes/router");
const mongodb = require("./server/database/connection");

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 7000;

mongodb();

app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/css", express.static(path.join(__dirname, "assets", "css")));
app.use("/img", express.static(path.join(__dirname, "assets", "img")));
app.use("/js", express.static(path.join(__dirname, "assets", "js")));

// app.get("/", (req, res) => {
//   //   res.send("Welcome to the CRUD Apllication..");
//   res.render("index");
// });
// app.get("/add-user", (req, res) => {
//   //   res.send("Welcome to the CRUD Apllication..");
//   res.render("add_user");
// });
// app.get("/update-user", (req, res) => {
//   //   res.send("Welcome to the CRUD Apllication..");
//   res.render("update_user");
// });

app.use('/',router);

app.listen(PORT, () => {
  console.log(`Listening at the port: ${PORT}`);
});
