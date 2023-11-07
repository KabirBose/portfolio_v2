const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: String,
  experience: String,
  frameworks: Array,
});

module.exports = mongoose.model("Project", projectsSchema, "projects");
