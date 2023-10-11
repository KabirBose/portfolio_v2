const express = require("express");
const router = express.Router();

// homepage
router.get("", (req, res) => {
  res.render("index");
});

// about
router.get("/about", (req, res) => {
  res.render("about");
});

// projects
router.get("/projects", (req, res) => {
  res.render("projects");
});

// contact
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
