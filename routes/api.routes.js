const router = require("express").Router();
router.get("/", function(req, res, next) {
  res.send("Api Routes");
});
module.exports = router;
