// initial setup
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const DB = require("./db");

const app = express();
const port = 3000;

// connect to DB
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection error"));
mongoDB.once("open", () => {
  console.log("MongoDB Connected");
});

app.use(expressLayouts);

// use static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// set view engine
app.set("view engine", "ejs");

const pagesRouter = require("../routes/pages");
const projectsRouter = require("../routes/projects");

app.use("/", pagesRouter);
app.use("/myprojects", projectsRouter);

// express server configs
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
