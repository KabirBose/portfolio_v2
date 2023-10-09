// initial setup
const express = require("express");
const app = express();
const PORT = 3000;

// use static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// set view engine
app.set("views", "./views");
app.set("view engine", "ejs");

// homepage
app.get("", (req, res) => {
  res.render("index");
});

// express server configs
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
