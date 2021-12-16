import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
  const [programCategories, setProgramCategories] = useState(null);
  const [channels, setChannels] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [categoryPrograms, setCategoryPrograms] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dateSchedules, setDateSchedules] = useState(null);

  const [allPrograms, setAllPrograms] = useState(null);

  useEffect(() => {
    getAllChannels();
    getAllPrograms();
    getAllProgramCategories();
  }, []);

  useEffect(() => {
    getProgramByChannelId();
  }, [selectedChannel]);

  useEffect(() => {
    getProgramsByCategoryId();
  }, [selectedCategory]);

  const getAllChannels = async () => {
    let channels = await fetch("/api/v1/channels");
    channels = await channels.json();
    //console.log("Channels", channels)
    setChannels(channels.channels);
  };

  const getAllPrograms = async () => {
    let allPrograms = await fetch(`/api/v1/channels/getallprograms`);
    allPrograms = await allPrograms.json();
    setAllPrograms(allPrograms.programs);
  };

  const getAllProgramCategories = async () => {
    let programCategories = await fetch("/api/v1/channels/programcategories");
    programCategories = await programCategories.json();
    //console.log("Categories", programCategories);
    setProgramCategories(programCategories.programcategories);
  };

  const getProgramByChannelId = async () => {
    let programs = await fetch(`/api/v1/channels/programs/` + selectedChannel);
    programs = await programs.json();
    //console.log("programs: ", programs);
    setPrograms(programs.programs);
  };

  const setActiveChannel = (channelId) => {
    setSelectedChannel(channelId);
  };

  const getProgramsByCategoryId = async () => {
    let categoryPrograms = await fetch(
      "/api/v1/channels/category/" + selectedCategory
    );
    categoryPrograms = await categoryPrograms.json();
    //console.log("categoryPrograms ", categoryPrograms);
    setCategoryPrograms(categoryPrograms.programs);
  };

  const setActiveCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getScheduleByDate = async (channelId, startDate) => {
    let schedulesByDate = await fetch(
      `/api/v1/channels/scheduledate/${channelId}?date=${startDate}`
    );
    schedulesByDate = await schedulesByDate.json();
    // console.log(schedulesByDate.schedule);
    setDateSchedules(schedulesByDate.schedule);
  };

  const values = {
    channels,
    programCategories,
    programs,
    setActiveChannel,
    categoryPrograms,
    setActiveCategory,
    dateSchedules,
    setDateSchedules,
    getScheduleByDate,
    allPrograms,
    getAllChannels,
  };

  return (
    <ChannelContext.Provider value={values}>
      {props.children}
    </ChannelContext.Provider>
  );
};

export default ChannelContextProvider;
