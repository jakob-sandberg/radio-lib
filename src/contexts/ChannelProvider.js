import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
  const [programCategories, setProgramCategories] = useState(null);
  const [channels, setChannels] = useState(null);
  const [ programs, setPrograms] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [ categoryPrograms, setCategoryPrograms] = useState(null);
  const [ selectedCategory, setSelectedCategory] = useState(null);
  const [schedule, setSchedule] = useState(null);


  useEffect(() => {
    getAllChannels();
    getAllProgramCategories();
  }, []);

  useEffect(() => {
    getProgramByChannelId();
  }, [selectedChannel]);

  useEffect(() => {
    getProgramsByCategoryId();
  }, [selectedCategory]);


  

  const getAllChannels = async () => {
    let channels = await fetch ("/api/v1/channels");
    channels = await channels.json();
    console.log("Channels", channels)
    setChannels(channels.channels);
  };

  const getChannelSchedule = async (channelId, date) => {
    let fetchedschedule = await fetch(
      `/api/v1/channels/schedule/${channelId}?date=${date}`
    );
    fetchedschedule = await fetchedschedule.json();
    setSchedule(fetchedschedule);
  };

  const getAllProgramCategories = async () => {
    let programCategories = await fetch ("/api/v1/channels/programcategories")
    programCategories = await programCategories.json();
    console.log("Categories", programCategories);
    setProgramCategories(programCategories.programcategories)
  }

  const getProgramByChannelId = async () => {
    let programs = await fetch (`/api/v1/channels/programs/` + selectedChannel);
    programs = await programs.json();
    console.log("programs: ", programs);
    setPrograms(programs.programs)
  }

  const setActiveChannel = (channelId) => {
    setSelectedChannel(channelId);
  }


  const getProgramsByCategoryId = async () => {
    let categoryPrograms = await fetch ("/api/v1/channels/category/" + selectedCategory);
    categoryPrograms = await categoryPrograms.json();
    console.log("categoryPrograms ", categoryPrograms);
    setCategoryPrograms(categoryPrograms.programs)
  }

  const setActiveCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  }

const values = {
  channels,
  programCategories,
  programs,
  setActiveChannel,
  categoryPrograms,
  setActiveCategory,
  schedule,
  getChannelSchedule,
};

return (
  <ChannelContext.Provider value={values}>
    {props.children}
  </ChannelContext.Provider>
);
};


export default ChannelContextProvider;
