const express = require("express");

const router = express.Router();

const channelController = require("../controllers/channelController");

router.get("", channelController.getAllChannels);
/* router.get("/:channelId", channelController.getChannelById);
router.get("/schedule/:channelId", channelController.getChannelSchedule); */
router.get("/programcategories", channelController.getAllProgramCategories);
router.get("/programs/:id", channelController.getProgramByChannelId)




module.exports = router;
