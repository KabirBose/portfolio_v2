// initial setup
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.use(expressLayouts);

// use static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// set view engine
app.set("view engine", "ejs");

// homepage
app.get("", (req, res) => {
  res.render("index");
});

// about
app.get("/about", (req, res) => {
  res.render("about");
});

// express server configs
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
