const { showTeams, addNewScore } = require("../controllers/teams.controller");

const router = require("express").Router();

router.get("/", showTeams);
router.post("/scores", addNewScore);

module.exports = router;
