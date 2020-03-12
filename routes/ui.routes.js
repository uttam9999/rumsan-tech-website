const router = require("express").Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Homepage - RumsanTech" });
});

/* GET team page */
router.get("/team", function(req, res, next) {
  res.render("team", { title: "Our Team - RumsanTech" });
});

/* GET contact page */
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Contact Us - RumsanTech" });
});

module.exports = router;
