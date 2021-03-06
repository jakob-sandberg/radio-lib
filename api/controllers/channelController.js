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

const getAllPrograms = async (req, res) => {
  let fetchAllPrograms = await fetch(
    `http://api.sr.se/api/v2/programs?${json}&${paginationFalse}`
  );
  fetchAllPrograms = await fetchAllPrograms.json();
  res.json(fetchAllPrograms);
};

const getAllProgramCategories = async (req, res) => {
  let categories = await fetch(
    `http://api.sr.se/api/v2/programcategories?${json}&${paginationFalse}`
  );
  categories = await categories.json();
  res.json(categories);
};

const getProgramByChannelId = async (req, res) => {
  let programs = await fetch(
    `http://api.sr.se/api/v2/programs/index?channelid=${req.params.id}&${json}&${paginationFalse}`
  );
  programs = await programs.json();
  res.json(programs);
};

const getProgramsByCategoryId = async (req, res) => {
  let categoryPrograms = await fetch(
    `http://api.sr.se/api/v2/programs/index?programcategoryid=${req.params.id}&${json}&${paginationFalse}`
  );
  categoryPrograms = await categoryPrograms.json();
  res.json(categoryPrograms);
};

const getScheduleByDate = async (req, res) => {
  let schedules = await fetch(`
  http://api.sr.se/api/v2/scheduledepisodes?${json}&${paginationFalse}&channelId=${req.params.channelId}&date=${req.query.date}
  `);
  schedules = await schedules.json();

  schedules.schedule = schedules.schedule.map((p) => {
    return {
      ...p,
      starttimeutc: utils.convertToDateObject(p.starttimeutc),
      endtimeutc: utils.convertToDateObject(p.endtimeutc),
    };
  });
  res.json(schedules);
};

module.exports = {
  getAllChannels,
  getAllProgramCategories,
  getProgramByChannelId,
  getProgramsByCategoryId,
  getScheduleByDate,
  getAllPrograms,
};
