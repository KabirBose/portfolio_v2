const express = require("express");
const router = express.Router();
const projects = require("../models/projects");

router.get("/", async (req, res, next) => {
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

module.exports = router;
