var path = require("path");

module.exports = function (app) {
  //default, catch.all route that leads to home.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  //show display the survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

}