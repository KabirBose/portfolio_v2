const express = require("express");
const router = express.Router();
const projects = require("../models/projects");

// homepage
router.get("", (req, res) => {
  res.render("index");
});

// about
router.get("/about", (req, res) => {
  res.render("about");
});

// projects
router.get("/projects", async (req, res) => {
  try {
    const projectsList = await projects.find();
    console.log(projectsList);
    res.render("projects", {
      title: "My Projects",
      projectsList,
    });
  } catch (err) {
    console.error(err);
    res.render("project", {
      error: "Server error",
    });
  }
});

// contact
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
