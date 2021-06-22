const express = require("express");

const router = express.Router();
const favoritesController = require("../controllers/favoritesController");


router.post("/savelikedchannel", favoritesController.saveLikedChannel);
router.post("/savelikedprogram", favoritesController.saveLikedProgram);
router.get("/getfavchannel", favoritesController.getFavChannel);
router.get("/getfavprogram", favoritesController.getFavProgram);
router.delete("/deletefavchannel/:channelId/:userId", favoritesController.deleteFavChannel)
router.delete("/deletefavprogram/:programId/:userId", favoritesController.deleteFavProgram)

module.exports = router;
