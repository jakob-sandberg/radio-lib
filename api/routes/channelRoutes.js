const express = require("express");

const router = express.Router();

const channelController = require("../controllers/channelController");

router.get("", channelController.getAllChannels);
router.get("/programcategories", channelController.getAllProgramCategories);
router.get("/programs/:id", channelController.getProgramByChannelId);
router.get("/category/:id", channelController.getProgramsByCategoryId);
router.get("/schedule/:channelId", channelController.getChannelSchedule)





module.exports = router;
