
const fetch = require("node-fetch");
const json = "format=json";
const paginationFalse = "pagination=false";

const utils = require("../core/utilities");


const getAllChannels = async (req, res) => {
  let channels = await fetch(
    `http://api.sr.se/api/v2/channels?${json}&${paginationFalse}`
  );
  channels = await channels.json();
  res.json(channels);

};

const getAllProgramCategories = async (req, res) => {
  let categories = await fetch(
    `http://api.sr.se/api/v2/programcategories?${json}&${paginationFalse}`
  );
  categories = await categories.json();
  res.json(categories);
};

const getProgramByChannelId = async (req, res) => {
  let programs = await fetch (`http://api.sr.se/api/v2/programs/index?channelid=${req.params.id}&${json}&${paginationFalse}`);
  programs = await programs.json();
  res.json(programs);
  
}

const getProgramsByCategoryId = async (req, res) => {
  let categoryPrograms = await fetch (`http://api.sr.se/api/v2/programs/index?programcategoryid=${req.params.id}&${json}&${paginationFalse}`);
  categoryPrograms = await categoryPrograms.json();
  res.json(categoryPrograms);
}



module.exports = {

  getAllChannels,
 /*  getChannelById,
  getChannelSchedule, */
  getAllProgramCategories,
  getProgramByChannelId,
  getProgramsByCategoryId

};