const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: String,
  difficulty: String,
  languages: Array,
});

module.exports = mongoose.model("Project", projectsSchema, "projects");
