import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
  const [programCategories, setProgramCategories] = useState(null);
  const [channels, setChannels] = useState(null);
  const [ programs, setPrograms] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    getAllChannels();
    getAllProgramCategories();
  }, []);

  useEffect(() => {
    console.log("GET CHANNELS BY PROGRAM ID");
    getProgramByChannelId();
  }, [selectedChannel]);
  

  const getAllChannels = async () => {
    let channels = await fetch ("/api/v1/channels");
    channels = await channels.json();
    console.log("Channels", channels)
    setChannels(channels.channels);
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


const values = {
  channels,
  programCategories,
  programs,
  setActiveChannel
};

return (
  <ChannelContext.Provider value={values}>
    {props.children}
  </ChannelContext.Provider>
);
};


export default ChannelContextProvider;
