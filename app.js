// initial setup
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// use static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// set view engine
app.use(expressLayouts);
app.set("views", "./views");
app.set("view engine", "ejs");

// homepage
app.get("", (req, res) => {
  res.render("navbar");
});

// express server configs
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
