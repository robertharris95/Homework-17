const router = require("express").Router();
const searchController = require("../../controllers/searchController");


router.route("/")
  .get(searchController.findAll)

module.exports = router;
