const router = require("express").Router();
const {
	getStatus,
	getSector,
	getFeed,
	getSearchResults,
} = require("./../controller");

router.get("/", (req, res) => res.send("Greetings from the Market service"));
router.get("/status", getStatus);
router.get("/sector", getSector);
router.get("/feed", getFeed);
router.get("/search/:market/:query", getSearchResults);

module.exports = router;
